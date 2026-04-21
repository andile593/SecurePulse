import { useAiCalls } from "@/hooks/useAiCalls";
import { useAlarms } from "@/hooks/useAlarms";
import { useSites } from "@/hooks/useSites";
import { useNavigate } from "react-router-dom";
import { SummaryCard } from "@/components/ui/SummaryCard";
import { AlarmRow } from "@/components/ui/AlarmRow";
import { useState, useCallback, useEffect } from "react";
import { useAlarmSocket } from "@/hooks/useAlarmSocket";
import API from "@/lib/api/axios";
import type { Alarm } from "@/types/alarm";

export default function Dashboard() {
  const navigate = useNavigate();
  const {
    data: fetchedAlarms = [],
    isLoading: alarmsLoading,
    error: alarmsError,
  } = useAlarms();
  const { data: aiCalls = [] } = useAiCalls();
  const { data: sites = [], isLoading: sitesLoading } = useSites();

  const [alarms, setAlarms] = useState<Alarm[]>([]);
  const [simulating, setSimulating] = useState(false);

  // Sync React Query data into local state on load.
  useEffect(() => {
    if (fetchedAlarms.length > 0) {
      setAlarms(fetchedAlarms);
    }
  }, [fetchedAlarms]);

  // Prepend new alarms from socket without page refresh.
  const handleNewAlarm = useCallback((alarm: Alarm) => {
    setAlarms((prev) => {
      if (prev.some((a) => a.id === alarm.id)) return prev;
      return [alarm, ...prev];
    });
  }, []);

  const handleAlarmUpdated = useCallback((updated: Alarm) => {
    setAlarms((prev) =>
      prev.map((a) => (a.id === updated.id ? updated : a))
    );
  }, []);

  useAlarmSocket({
    onNewAlarm: handleNewAlarm,
    onAlarmUpdated: handleAlarmUpdated,
  });

  // Hits the simulate endpoint — backend creates a realistic alarm,
  // emits the socket event, and it appears here in real time.
  const handleSimulate = async () => {
    setSimulating(true);
    try {
      await API.post('/alarms/simulate', {});
    } catch (err) {
      console.error('Simulate failed:', err);
    } finally {
      setSimulating(false);
    }
  };

  if (alarmsLoading || sitesLoading)
    return <div className="p-6">Loading dashboard...</div>;
  if (alarmsError)
    return <div className="p-6 text-red-600">Something went wrong</div>;

  const totalAlarms = alarms.length;
  const unansweredCalls = aiCalls.filter(
    (a) => a.aiDecision === "Inconclusive"
  ).length;
  const cancelled = aiCalls.filter((a) => a.aiDecision === "Cancelled").length;

  const prevTotalAlarms = 20;
  const prevCancelled = 5;
  const prevUnansweredCalls = 3;

  const calcPercentageChange = (current: number, previous: number) =>
    previous === 0 ? 0 : ((current - previous) / previous) * 100;

  return (
    <div className="p-6 space-y-8">
      <div className="flex justify-between items-center">
        <h3 className="text-3xl font-bold">Overview</h3>

        {/* DEMO MODE button — clearly labelled, triggers simulate endpoint */}
        <button
          onClick={handleSimulate}
          disabled={simulating}
          className="bg-yellow-500 hover:bg-yellow-600 disabled:opacity-50 text-white font-semibold px-4 py-2 rounded transition"
        >
          {simulating ? 'Simulating...' : ' Simulate Alarm (Demo)'}
        </button>
      </div>

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
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Recent Alarms</h2>
          <button
            onClick={() => navigate("/alarms")}
            className="text-primary hover:border rounded"
          >
            View All
          </button>
        </div>

        {alarms.length === 0 ? (
          <p className="text-gray-500">No alarms available.</p>
        ) : (
          <div className="w-full text-sm">
            <div className="flex mb-3 rounded-sm font-medium bg-gray gap-2">
              <div className="w-[8%] text-center py-2">Event</div>
              <div className="w-[6%] text-center py-2">ID</div>
              <div className="w-[10%] text-center py-2">Date & Time</div>
              <div className="w-[25%] py-2">Site Address</div>
              <div className="w-[20%] text-center py-2">Call Status</div>
              <div className="w-[15%] text-center py-2">Source Code</div>
              <div className="w-[15%] text-center py-2">Results</div>
            </div>

            {alarms.map((alarm) => (
              <AlarmRow
                key={alarm.id}
                alarm={alarm}
                aiCalls={aiCalls}
                navigate={navigate}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}