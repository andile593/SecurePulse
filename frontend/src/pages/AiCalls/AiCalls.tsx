import { useNavigate } from "react-router-dom";
import { useAiCalls } from "@/hooks/useAiCalls";
import { useAlarms } from "@/hooks/useAlarms";
import { SummaryCard } from "@/components/ui/SummaryCard";
import { AiCallRow } from "@/components/ui/AiCallRow";
import { useSites } from "@/hooks/useSites";

export default function AiCallList() {
  const navigate = useNavigate();
  const { data: aiCalls = [], isLoading, error } = useAiCalls();
  const { data: alarms = [] } = useAlarms();
  const { data: sites = [] } = useSites();



  if (isLoading) return <div className="p-4">Loading AI calls...</div>;
  if (error) return <div className="p-4 text-red-600">{(error as Error).message}</div>;

  const totalAiCalls = aiCalls.length
  const cancelled = aiCalls.filter((a) => a.aiDecision === "Cancelled").length;
  const unansweredCalls = aiCalls.filter((a) => a.aiDecision === "Inconclusive").length;
  const escalatedAlarms = alarms.filter(
    (a) => a.aiDecision?.toLowerCase() === "dispatched"
  ).length;

  const prevTotalAiCalls = 8;
  const prevCancelled = 5;
  const prevUnansweredCalls = 3;
  const prevEscalatedAlarms = 10;

  const siteMap = sites.reduce((acc, site) => {
    if (site.id) acc[site.id] = site.name;
    return acc;
  }, {} as Record<string, string>);

  const calcPercentageChange = (current: number, previous: number) =>
    previous === 0 ? 0 : ((current - previous) / previous) * 100;

  return (
    <div className="p-6 space-y-8">
      <h3 className="text-3xl font-bold mb-6">Call Activity</h3>
      <button
        onClick={() => navigate("/ai-calls/new")}
        className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
      >
        + New AI Call
      </button>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <SummaryCard
          title="Total AI Calls"
          value={totalAiCalls}
          color="bg-primary"
          percentageChange={calcPercentageChange(totalAiCalls, prevTotalAiCalls)}
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

      {aiCalls.length === 0 ? (
        <div className="p-4 text-gray-500 text-center">No AI calls found.</div>
      ) : (

        <div className="w-full text-sm">
          <div className="flex mb-3 rounded-sm font-semibold bg-gray gap-2">
            <div className="w-[8%] text-center py-2">Call ID</div>
            <div className="w-[15%] py-2">Site Name</div>
            <div className="w-[8%] text-center py-2">Time</div>
            <div className="w-[10%] py-2">Call Duration</div>
            <div className="w-[20%] text-center py-2">Outcome</div>
            <div className="w-[15%] text-center py-2">Code Provided</div>
            <div className="w-[15%] text-center py-2">Results</div>
          </div>
          {aiCalls.map((aiCall) => {
            // Find the alarm that belongs to this aiCall
            const alarm = alarms.find((a) => a.id === aiCall.alarmId);

            // Resolve site name using siteMap
            const siteName = alarm && alarm.siteId ? siteMap[alarm.siteId] : "—";

            return (
              <AiCallRow
                key={aiCall.id}
                aiCall={aiCall}
                alarm={alarm}   // pass the alarm too if needed
                siteName={siteName}  // pass the resolved site name
                navigate={navigate}
              />
            );
          })}

        </div>
      )}
    </div>
  );
}
