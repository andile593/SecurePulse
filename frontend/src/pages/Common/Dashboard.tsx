import { useAiCalls } from "@/hooks/useAiCalls";
import { useAlarms } from "@/hooks/useAlarms";
import { useSites } from "@/hooks/useSites";
import { useNavigate } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import { useAlarmSocket } from "@/hooks/useAlarmSocket";
import API from "@/lib/api/axios";
import type { Alarm } from "@/types/alarm";
import type { AiCall } from "@/types/aiCall";
import { format } from "date-fns";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

// ─── Helpers ─────────────────────────────────────────────────────────────────

const eventTypeColors: Record<string, string> = {
  "Panic Alarm":     "bg-red-500",
  "Fire Alarm":      "bg-orange-500",
  "Intrusion Alarm": "bg-purple-600",
  "Open Alarm":      "bg-blue-500",
};

const eventTypeAccent: Record<string, string> = {
  "Panic Alarm":     "bg-red-500",
  "Fire Alarm":      "bg-orange-400",
  "Intrusion Alarm": "bg-purple-600",
  "Open Alarm":      "bg-blue-400",
};

const criticalTypes = ["Panic Alarm", "Fire Alarm"];

function getInitials(eventType: string) {
  return eventType?.split(" ").map((w) => w[0]).join("") ?? "?";
}

function getCallStatus(alarm: Alarm, aiCalls: AiCall[]) {
  const call = aiCalls.find((c) => c.alarmId === alarm.id);
  const type = alarm.eventType?.toLowerCase() ?? "";
  if (["panic alarm", "fire alarm", "open alarm"].includes(type)) return "No call";
  if (type === "intrusion alarm") {
    if (!call) return "No answer";
    if (call.notes?.toLowerCase().includes("code")) return "Code verified";
    return "No answer";
  }
  return "—";
}

function getResult(alarm: Alarm, aiCalls: AiCall[]) {
  const call = aiCalls.find((c) => c.alarmId === alarm.id);
  return call?.aiDecision ?? null;
}

function getAlarmStatus(alarm: Alarm, aiCalls: AiCall[]) {
  if (alarm.dispatch) return "Dispatched";
  const call = aiCalls.find((c) => c.alarmId === alarm.id);
  if (call?.aiDecision === "Cancelled") return "Handled";
  return "Active";
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatCard({ title, value, change }: { title: string; value: number; change: number }) {
  const up = change > 0;
  const down = change < 0;
  return (
    <div className="bg-[#0d1526] rounded-xl p-5 flex flex-col gap-3 text-white">
      <p className="text-gray-300 text-sm font-medium">{title}</p>
      <p className="text-4xl font-bold tracking-tight">{value}</p>
      {change !== 0 && (
        <div className="flex items-center gap-1.5 text-xs flex-wrap">
          {up && <FaArrowUp className="text-green-400" />}
          {down && <FaArrowDown className="text-red-400" />}
          <span className={up ? "text-green-400 font-medium" : "text-red-400 font-medium"}>
            {Math.abs(change).toFixed(1)}% {up ? "increase" : "decrease"}
          </span>
          <span className="text-gray-400">from previous</span>
        </div>
      )}
      {change === 0 && <p className="text-xs text-gray-500">No change from previous</p>}
    </div>
  );
}

function CallStatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    "No call":       "bg-yellow-100 text-yellow-700 border border-yellow-200",
    "No answer":     "bg-red-100 text-red-600 border border-red-200",
    "Code verified": "bg-green-100 text-green-700 border border-green-200",
    "Dialing":       "bg-gray-100 text-gray-600 border border-gray-200",
  };
  if (status === "—") return <span className="text-gray-300">—</span>;
  return (
    <span className={`text-xs px-2.5 py-1 rounded-full font-medium whitespace-nowrap ${styles[status] ?? "bg-gray-100 text-gray-600"}`}>
      {status}
    </span>
  );
}

function ResultBadge({ result }: { result: string | null }) {
  if (!result) return <span className="text-gray-300">—</span>;
  const styles: Record<string, string> = {
    Cancelled:  "bg-red-100 text-red-600 border border-red-200",
    Dispatched: "bg-blue-100 text-blue-600 border border-blue-200",
    Resolved:   "bg-green-100 text-green-700 border border-green-200",
  };
  return (
    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${styles[result] ?? "bg-gray-100 text-gray-600"}`}>
      {result}
    </span>
  );
}

function AlarmTableRow({ alarm, aiCalls, navigate }: { alarm: Alarm; aiCalls: AiCall[]; navigate: any }) {
  const callStatus = getCallStatus(alarm, aiCalls);
  const result = getResult(alarm, aiCalls);
  const accent = eventTypeAccent[alarm.eventType] ?? "bg-gray-400";
  const badge = eventTypeColors[alarm.eventType] ?? "bg-gray-500";
  const formatted = alarm.triggeredAt
    ? { time: format(new Date(alarm.triggeredAt), "HH:mm"), date: format(new Date(alarm.triggeredAt), "dd MMM yyyy") }
    : { time: "—", date: "—" };

  return (
    <div
      onClick={() => navigate(`/alarms/${alarm.id}`)}
      className="relative flex items-center gap-4 px-4 py-3 bg-white hover:bg-gray-50 border-b border-gray-100 cursor-pointer transition-colors"
    >
      <div className={`absolute left-0 top-2 bottom-2 w-[3px] rounded-full ${accent}`} />
      <div className="w-10 flex-shrink-0 pl-1">
        <div className={`w-9 h-9 flex items-center justify-center text-white text-xs font-bold rounded-lg ${badge}`}>
          {getInitials(alarm.eventType)}
        </div>
      </div>
      <div className="w-16 text-gray-400 text-sm font-mono flex-shrink-0">#{alarm.shortId ?? "—"}</div>
      <div className="w-28 flex-shrink-0">
        <p className="text-gray-800 text-sm font-semibold">{formatted.time}</p>
        <p className="text-gray-400 text-xs">{formatted.date}</p>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-gray-800 text-sm font-semibold truncate">{alarm.transmitter?.site?.name ?? "—"}</p>
      </div>
      <div className="w-36 flex justify-center flex-shrink-0">
        <CallStatusBadge status={callStatus} />
      </div>
      <div className="w-28 text-center flex-shrink-0">
        <span className="text-gray-500 text-sm font-mono">
          {alarm.transmitter?.referenceCode ? `${alarm.transmitter.referenceCode.slice(0, 7)}...` : "—"}
        </span>
      </div>
      <div className="w-28 flex justify-center flex-shrink-0">
        <ResultBadge result={result} />
      </div>
    </div>
  );
}

function CriticalEventCard({ alarm, navigate }: { alarm: Alarm; navigate: any }) {
  const isFire = alarm.eventType === "Fire Alarm";
  return (
    <div
      onClick={() => navigate(`/alarms/${alarm.id}`)}
      className="bg-[#0d1526] rounded-xl p-4 cursor-pointer hover:bg-[#111c35] transition-colors"
    >
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs text-gray-400 font-medium">{alarm.eventType}</span>
        <span className="text-xs text-gray-500 font-mono">#{alarm.shortId}</span>
      </div>
      <p className="text-white font-bold text-sm mb-1">{alarm.transmitter?.site?.name ?? "Unknown Site"}</p>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-lg">{isFire ? "🔥" : "🚨"}</span>
        <span className="text-gray-400 text-xs">Auto-escalated</span>
      </div>
      <button
        onClick={(e) => { e.stopPropagation(); navigate("/dispatches"); }}
        className="w-full bg-green-500 hover:bg-green-400 text-white text-xs font-bold py-2 rounded-lg transition-colors"
      >
        Dispatch
      </button>
    </div>
  );
}

// ─── Main Dashboard ───────────────────────────────────────────────────────────

type FilterTab = "All" | "Active" | "Handled" | "Dispatched";

export default function Dashboard() {
  const navigate = useNavigate();
  const { data: fetchedAlarms = [], isLoading: alarmsLoading, error: alarmsError } = useAlarms();
  const { data: aiCalls = [] } = useAiCalls();
  const { data: sites = [], isLoading: sitesLoading } = useSites();

  const [alarms, setAlarms] = useState<Alarm[]>([]);
  const [simulating, setSimulating] = useState(false);
  const [activeTab, setActiveTab] = useState<FilterTab>("All");

  useEffect(() => {
    if (fetchedAlarms.length > 0) setAlarms(fetchedAlarms);
  }, [fetchedAlarms]);

  const handleNewAlarm = useCallback((alarm: Alarm) => {
    setAlarms((prev) => {
      if (prev.some((a) => a.id === alarm.id)) return prev;
      return [alarm, ...prev];
    });
  }, []);

  const handleAlarmUpdated = useCallback((updated: Alarm) => {
    setAlarms((prev) => prev.map((a) => (a.id === updated.id ? updated : a)));
  }, []);

  useAlarmSocket({ onNewAlarm: handleNewAlarm, onAlarmUpdated: handleAlarmUpdated });

  const handleSimulate = async () => {
    setSimulating(true);
    try { await API.post("/alarms/simulate", {}); }
    catch (err) { console.error("Simulate failed:", err); }
    finally { setSimulating(false); }
  };

  if (alarmsLoading || sitesLoading)
    return <div className="flex items-center justify-center h-full text-gray-400 text-sm p-6">Loading dashboard...</div>;
  if (alarmsError)
    return <div className="p-6 text-red-500 text-sm">Something went wrong.</div>;

  const totalAlarms = alarms.length;
  const unansweredCalls = aiCalls.filter((a) => a.aiDecision === "Inconclusive").length;
  const cancelled = aiCalls.filter((a) => a.aiDecision === "Cancelled").length;
  const dispatched = alarms.filter((a) => a.dispatch).length;
  const calcChange = (cur: number, prev: number) => prev === 0 ? 0 : ((cur - prev) / prev) * 100;

  const criticalAlarms = alarms.filter((a) => criticalTypes.includes(a.eventType)).slice(0, 3);

  const tabCounts: Record<FilterTab, number> = {
    All:        alarms.length,
    Active:     alarms.filter((a) => getAlarmStatus(a, aiCalls) === "Active").length,
    Handled:    alarms.filter((a) => getAlarmStatus(a, aiCalls) === "Handled").length,
    Dispatched: alarms.filter((a) => getAlarmStatus(a, aiCalls) === "Dispatched").length,
  };

  const filtered = activeTab === "All"
    ? alarms
    : alarms.filter((a) => getAlarmStatus(a, aiCalls) === activeTab);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-6 space-y-6">

        {/* ── Page header ── */}
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold text-gray-900 tracking-tight">Overview</h1>
          <button
            onClick={handleSimulate}
            disabled={simulating}
            className="bg-yellow-400 hover:bg-yellow-300 disabled:opacity-50 text-black font-bold text-sm px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <span>⚡</span>
            {simulating ? "Simulating..." : "Simulate Alarm"}
          </button>
        </div>

        {/* ── Body ── */}
        <div className="flex gap-5">

          {/* ── Left ── */}
          <div className="flex-1 min-w-0 space-y-5">

            {/* Stat cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard title="Alarms Today"        value={totalAlarms}     change={calcChange(totalAlarms, 20)} />
              <StatCard title="Canceled by Client"  value={cancelled}       change={calcChange(cancelled, 5)} />
              <StatCard title="Unanswered Calls"    value={unansweredCalls} change={calcChange(unansweredCalls, 3)} />
              <StatCard title="Armed Response Sent" value={dispatched}      change={calcChange(dispatched, 5)} />
            </div>

            {/* Alarm table card */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">

              {/* Tabs */}
              <div className="flex items-center gap-1 px-4 pt-4 pb-3 border-b border-gray-100">
                {(["All", "Active", "Handled", "Dispatched"] as FilterTab[]).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium transition-all ${
                      activeTab === tab
                        ? "bg-gray-900 text-white"
                        : "text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                    }`}
                  >
                    {tab}
                    <span className={`text-xs px-1.5 py-0.5 rounded-full font-semibold ${
                      activeTab === tab ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
                    }`}>
                      {tabCounts[tab]}
                    </span>
                  </button>
                ))}
                <div className="ml-auto">
                  <button onClick={() => navigate("/alarms")} className="text-sm text-gray-400 hover:text-gray-700 transition-colors">
                    View all →
                  </button>
                </div>
              </div>

              {/* Table header */}
              <div className="flex items-center gap-4 px-4 py-2.5 bg-gray-50 border-b border-gray-100 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                <div className="w-10 flex-shrink-0">Type</div>
                <div className="w-16 flex-shrink-0">ID</div>
                <div className="w-28 flex-shrink-0">Date & Time</div>
                <div className="flex-1">Site Name</div>
                <div className="w-36 text-center flex-shrink-0">Verification Status</div>
                <div className="w-28 text-center flex-shrink-0">Source Code</div>
                <div className="w-28 text-center flex-shrink-0">Results</div>
              </div>

              {/* Rows */}
              {filtered.length === 0 ? (
                <div className="text-center py-16 text-gray-400">
                  <p className="text-3xl mb-2">🔕</p>
                  <p className="text-sm">No alarms to display</p>
                </div>
              ) : (
                filtered.map((alarm) => (
                  <AlarmTableRow key={alarm.id} alarm={alarm} aiCalls={aiCalls} navigate={navigate} />
                ))
              )}
            </div>
          </div>

          {/* ── Right: Critical Events ── */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-gray-800 font-semibold text-sm">Critical Events</h3>
                <button onClick={() => navigate("/alarms")} className="text-xs text-gray-400 hover:text-gray-700 transition-colors">
                  See all
                </button>
              </div>
              {criticalAlarms.length === 0 ? (
                <div className="py-8 text-center">
                  <p className="text-gray-400 text-sm">No critical events</p>
                </div>
              ) : (
                criticalAlarms.map((alarm) => (
                  <CriticalEventCard key={alarm.id} alarm={alarm} navigate={navigate} />
                ))
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}