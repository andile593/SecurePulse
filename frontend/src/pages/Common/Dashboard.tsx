import { useAiCalls } from "@/hooks/useAiCalls";
import { useAlarms } from "@/hooks/useAlarms";
import { useSites } from "@/hooks/useSites";
import { useNavigate } from "react-router-dom";
import { SummaryCard } from "@/components/ui/SummaryCard";
import { AlarmRow } from "@/components/ui/AlarmRow";

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

  const siteMap = sites.reduce((acc, site) => {
    if (site.id) acc[site.id] = site.name;
    return acc;
  }, {} as Record<string, string>);
  
  const prevTotalAlarms = 20; 
  const prevCancelled = 5;
  const prevUnansweredCalls = 3;
  const prevEscalatedAlarms = 10;

  const calcPercentageChange = (current: number, previous: number) =>
    previous === 0 ? 0 : ((current - previous) / previous) * 100;

  return (
    <div className="p-6 space-y-8">
      <h3 className="text-3xl font-bold mb-6">Overview</h3>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <SummaryCard
          title="Alarms Today"
          value={totalAlarms}
          color="bg-primary"
          percentageChange={calcPercentageChange(totalAlarms, prevTotalAlarms)}
        />
        <SummaryCard
          title="Cancelled By Client"
          value={cancelled}
          color="bg-primary"
          percentageChange={calcPercentageChange(cancelled, prevCancelled)}
        />
        <SummaryCard
          title="Unanswered Calls"
          value={unansweredCalls}
          color="bg-primary"
          percentageChange={calcPercentageChange(
            unansweredCalls,
            prevUnansweredCalls
          )}
        />
        <SummaryCard
          title="Response Sent Out"
          value={escalatedAlarms}
          color="bg-primary"
          percentageChange={calcPercentageChange(
            escalatedAlarms,
            prevEscalatedAlarms
          )}
        />
      </div>

      <div className="p-4">
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
            <div className="flex mb-3 rounded-sm font-semibold bg-gray gap-2">
              <div className="w-[8%] text-center py-2">Event</div>
              <div className="w-[6%] text-center py-2">ID</div>
              <div className="w-[10%] text-center py-2">Date & Time</div>
              <div className="w-[25%] py-2">Site</div>
              <div className="w-[20%] text-center py-2">Call Status</div>
              <div className="w-[15%] text-center py-2">Source Code</div>
              <div className="w-[15%] text-center py-2">Results</div>
            </div>

            {alarms.slice(1).map((alarm) => (
              <AlarmRow
                key={alarm.id}
                alarm={alarm}
                aiCalls={aiCalls}
                siteMap={siteMap}
                navigate={navigate}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
