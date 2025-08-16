import { useAiCalls } from "@/hooks/useAiCalls";
import { useAlarms } from "@/hooks/useAlarms";
import { useSites } from "@/hooks/useSites";
import { useNavigate } from "react-router-dom";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import type { Site } from "@/types/site";

export default function Dashboard() {
  const navigate = useNavigate();
  const {
    data: alarms = [],
    isLoading: alarmsLoading,
    error: alarmsError,
  } = useAlarms();
  const { data: aiCalls = [] } = useAiCalls();
  const { data: sites = [], isLoading: sitesLoading } = useSites();

  if (alarmsLoading || sitesLoading)
    return <div className="p-6">Loading dashboard...</div>;
  if (alarmsError)
    return <div className="p-6 text-red-600">Something went wrong</div>;

  const totalAlarms = alarms.length;
  const unansweredCalls = aiCalls.filter(
    (a) => a.aiDecision === "escalated"
  ).length;
  const cancelled = aiCalls.filter((a) => a.aiDecision === "cancelled").length;
  const escalatedAlarms = aiCalls.filter(
    (a) => a.aiDecision === "Requires Response"
  ).length;

  const siteMap = sites
    .filter((site): site is Site & { id: string } => !!site.id)
    .reduce((acc, site) => {
      acc[site.id] = site.name;
      return acc;
    }, {} as Record<string, string>);

  const eventTypeColors: Record<string, string> = {
    "Panic Alarm": "bg-red",
    "Fire Alarm": "bg-red",
    "Intrusion Alarm": "bg-purple",
    "Open Alarm": "bg-blue",
  };

  return (
    <div className="p-6 space-y-8">
      {/* Dashboard Header */}
      <h3 className="text-3xl font-bold mb-6">Overview</h3>

      {/* Summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <SummaryCard
          title="Alarms Today"
          value={totalAlarms}
          color="bg-primary"
          percentageChange={getPercentageChange(totalAlarms, prevTotalAlarms)}
        />
        <SummaryCard
          title="Cancelled By Client"
          value={cancelled}
          color="bg-primary"
          percentageChange={getPercentageChange(cancelled, prevCancelled)}
        />
        <SummaryCard
          title="Unanswered Calls"
          value={unansweredCalls}
          color="bg-primary"
          percentageChange={getPercentageChange(
            unansweredCalls,
            prevUnansweredCalls
          )}
        />
        <SummaryCard
          title="Response Sent Out"
          value={escalatedAlarms}
          color="bg-primary"
          percentageChange={getPercentageChange(
            escalatedAlarms,
            prevEscalatedAlarms
          )}
        />
      </div>

      <div className="bg-white shadow rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Recent Alarms</h2>
          <button
            onClick={() => navigate("/alarms")}
            className="text-blue-600 hover:underline"
          >
            View All
          </button>
        </div>

        {alarms.length === 0 ? (
          <p className="text-gray-500">No alarms available.</p>
        ) : (
          <div className="w-full text-sm">
            {/* Header */}
            <div className="flex border-b font-semibold text-gray-700 gap-2" >
              <div className="w-[8%] text-center py-2">Event</div>
              <div className="w-[6%] text-center py-2">ID</div>
              <div className="w-[10%] text-center py-2">Date & Time</div>
              <div className="w-[30%] py-2">Site</div>
              <div className="w-[20%] py-2">Call Status</div>
              <div className="w-[10%] py-2">Results</div>
            
            </div>

            {/* Rows */}
            {alarms.slice(1).map((alarm) => (
              <div
                key={alarm.id}
                className="flex gap-2 border-b hover:bg-gray-50 cursor-pointer"
                onClick={() => navigate(`/alarms/${alarm.id}`)}
              >
                {/* Event Type square */}
                <div className="w-[8%] py-2 flex items-center justify-center">
                  <div
                    className={`w-[35px] h-[35px] flex items-center justify-center text-white text-xs font-bold rounded ${
                      eventTypeColors[alarm.eventType] || "bg-gray-400"
                    }`}
                  >
                    {alarm.eventType
                      ?.split(" ")
                      .map((word) => word[0])
                      .join("")}
                  </div>
                </div>

                {/* ID */}
                <div className="w-[6%] py-2  flex justify-center items-center">
                  #{alarm.shortId || "Unknown"}
                </div>

                {/* Date & Time */}
                <div className="w-[10%] px-2 py-2 flex flex-wrap text-center items-center">
                  {new Date(alarm.triggeredAt).toLocaleString()}
                </div>

                {/* Site */}
                <div className="w-[30%] py-2 flex items-center">
                  {alarm.siteId ? siteMap[alarm.siteId] : "—"}
                </div>
               
               <div className="w-[20%] py-2 flex items-center">
                  {alarm.status}
                </div>

                <div className="w-[10%] py-2 flex items-center justify-center font-bold">
                  {alarm.resolutionNotes}
                </div>

              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const prevTotalAlarms = 10;
const prevCancelled = 2;
const prevUnansweredCalls = 3;
const prevEscalatedAlarms = 1;

function getPercentageChange(current: number, previous: number) {
  if (previous === 0) return current === 0 ? 0 : 100;
  return ((current - previous) / previous) * 100;
}

function SummaryCard({
  title,
  value,
  color,
  percentageChange,
}: {
  title: string;
  value: number;
  color: string;
  percentageChange?: number;
}) {
  const isPositive = percentageChange !== undefined && percentageChange >= 0;
  return (
    <div className={`p-6 rounded-lg text-white shadow ${color}`}>
      <p className="text-base mb-2">{title}</p>
      <p className="text-3xl font-bold">{value}</p>
      {percentageChange !== undefined && (
        <p className={`mt-2 text-xs flex items-center gap-1`}>
          {isPositive ? (
            <FaArrowUp className="text-green-500 rotate-45" />
          ) : (
            <FaArrowDown className="text-red-500 rotate-45" />
          )}
          {Math.abs(percentageChange).toFixed(1)}% from past day
        </p>
      )}
    </div>
  );
}
