import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAiCalls } from "@/hooks/useAiCalls";
import { useAlarms } from "@/hooks/useAlarms";
import { AiCallRow } from "@/components/ui/AiCallRow";
import PhoneIcon from '@mui/icons-material/Phone';
import CancelIcon from '@mui/icons-material/Cancel';
import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';
import SecurityIcon from '@mui/icons-material/Security';

type FilterTab = 'All calls' | 'Resolved' | 'Review Needed';

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
}) {
  return (
    <div className="bg-gray-900 rounded-xl p-5 flex items-center gap-4 text-white">
      <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-400">{label}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
}

export default function AiCallList() {
  const navigate = useNavigate();
  const { data: aiCalls = [], isLoading, error } = useAiCalls();
  const { data: alarms = [] } = useAlarms();

  const [activeTab, setActiveTab] = useState<FilterTab>('All calls');

  if (isLoading) return <div className="p-6">Loading call activity...</div>;
  if (error) return <div className="p-6 text-red-600">{(error as Error).message}</div>;

  const totalAiCalls = aiCalls.length;
  const cancelled = aiCalls.filter((a) => a.aiDecision === 'Cancelled').length;
  const unanswered = aiCalls.filter((a) => a.aiDecision === 'Unanswered').length;
  const dispatched = aiCalls.filter((a) => a.aiDecision === 'Dispatched').length;

  const resolved = aiCalls.filter((a) =>
    a.aiDecision === 'Cancelled' || a.aiDecision === 'Dispatched'
  );
  const reviewNeeded = aiCalls.filter((a) =>
    a.aiDecision === 'Unanswered' || a.aiDecision === 'Dialing' || !a.aiDecision
  );

  const tabCounts: Record<FilterTab, number> = {
    'All calls': totalAiCalls,
    'Resolved': resolved.length,
    'Review Needed': reviewNeeded.length,
  };

  const filtered =
    activeTab === 'All calls'
      ? aiCalls
      : activeTab === 'Resolved'
      ? resolved
      : reviewNeeded;

  return (
    <div className="p-6 space-y-6">

      {/* Header */}
      <h1 className="text-2xl font-bold text-gray-900">Call Activity</h1>

      {/* Stat cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard
          icon={<PhoneIcon className="text-white" fontSize="small" />}
          label="Total AI Calls"
          value={totalAiCalls}
        />
        <StatCard
          icon={<CancelIcon className="text-white" fontSize="small" />}
          label="Canceled by Client"
          value={cancelled}
        />
        <StatCard
          icon={<PhoneMissedIcon className="text-white" fontSize="small" />}
          label="Unanswered Calls"
          value={unanswered}
        />
        <StatCard
          icon={<SecurityIcon className="text-white" fontSize="small" />}
          label="Armed Response Sent"
          value={dispatched}
        />
      </div>

      {/* Table card */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">

        {/* Tabs */}
        <div className="flex items-center gap-2 px-4 pt-4 pb-3 border-b border-gray-100">
          {(['All calls', 'Resolved', 'Review Needed'] as FilterTab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeTab === tab
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              {tab}
              <span className={`text-xs px-1.5 py-0.5 rounded-full font-semibold ${
                activeTab === tab ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
              }`}>
                {tabCounts[tab]}
              </span>
            </button>
          ))}
        </div>

        {/* Table header */}
        <div className="flex items-center bg-gray-50 border-b border-gray-100 text-xs font-semibold text-gray-400 uppercase tracking-wider">
          <div className="w-[12%] pl-5 py-3">Call ID</div>
          <div className="w-[20%] py-3">Site Name</div>
          <div className="w-[10%] py-3 text-center">Time</div>
          <div className="w-[12%] py-3 text-center">Call Duration</div>
          <div className="w-[16%] py-3 text-center">Outcome</div>
          <div className="w-[15%] py-3 text-center">Code Provided</div>
          <div className="w-[15%] py-3 text-center">Results</div>
        </div>

        {/* Rows */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-gray-400 text-sm">
            No calls to display.
          </div>
        ) : (
          filtered.map((aiCall) => {
            const alarm = alarms.find((a) => a.id === aiCall.alarmId);
            const siteName = alarm?.transmitter?.site?.name ?? '—';
            return (
              <AiCallRow
                key={aiCall.id}
                aiCall={aiCall}
                alarm={alarm}
                siteName={siteName}
                navigate={navigate}
              />
            );
          })
        )}
      </div>
    </div>
  );
}