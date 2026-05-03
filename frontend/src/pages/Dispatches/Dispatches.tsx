import { useNavigate } from "react-router-dom";
import { useDispatches, useDeleteDispatch } from "@/hooks/useDispatches";
import { useAlarms } from "@/hooks/useAlarms";
import { useGuards } from "@/hooks/useGuards";
import { useVehicles } from "@/hooks/useVehicles";

export default function DispatchList() {
  const navigate = useNavigate();
  const { data: dispatches = [], isLoading, error } = useDispatches();
  const { mutate: deleteDispatch } = useDeleteDispatch();
  const { data: alarms = [] } = useAlarms();
  const { data: guards = [] } = useGuards();
  const { data: vehicles = [] } = useVehicles();

  const handleDelete = (id: string) => {
    if (!confirm("Are you sure you want to delete this dispatch?")) return;
    deleteDispatch({ id });
  };

  if (isLoading) return <div className="p-4">Loading dispatches...</div>;
  if (error) return <div className="p-4 text-red-600">{(error as Error).message}</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Dispatch Center</h1>
        <button
          onClick={() => navigate("/dispatches/new")}
          className="bg-primary text-white px-4 py-2 rounded"
        >
          + New Dispatch
        </button>
      </div>

      {dispatches.length === 0 ? (
        <div className="p-4 text-gray-500">No dispatches found.</div>
      ) : (
        <div className="w-full text-sm">
          <div className="flex mb-3 rounded-sm font-medium bg-gray gap-2 px-2">
            <div className="w-[8%] text-center py-2">ID</div>
            <div className="w-[20%] py-2">Alarm</div>
            <div className="w-[15%] py-2">Guard</div>
            <div className="w-[15%] py-2">Vehicle</div>
            <div className="w-[15%] text-center py-2">Dispatched At</div>
            <div className="w-[15%] text-center py-2">Resolved At</div>
            <div className="w-[12%] text-center py-2">Actions</div>
          </div>

          {dispatches.map((dispatch) => {
            const alarm = alarms.find((a) => a.id === dispatch.alarmId);
            const guard = guards.find((g) => g.id === dispatch.guardId);
            const vehicle = vehicles.find((v) => v.id === dispatch.vehicleId);

            return (
              <div
                key={dispatch.id}
                className="flex items-center gap-2 px-2 py-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
                onClick={() => navigate(`/dispatches/${dispatch.id}`)}
              >
                <div className="w-[8%] text-center font-medium">
                  #{dispatch.shortId}
                </div>
                <div className="w-[20%] text-sm">
                  {alarm
                    ? `#${alarm.shortId} — ${alarm.eventType}`
                    : dispatch.alarmId?.slice(0, 8) + '...'}
                </div>
                <div className="w-[15%] text-sm">
                  {guard?.name ?? '—'}
                </div>
                <div className="w-[15%] text-sm">
                  {vehicle?.plate ?? '—'}
                </div>
                <div className="w-[15%] text-center text-sm">
                  {new Date(dispatch.dispatchedAt).toLocaleString()}
                </div>
                <div className="w-[15%] text-center text-sm">
                  {dispatch.resolvedAt
                    ? new Date(dispatch.resolvedAt).toLocaleString()
                    : <span className="text-yellow-600 font-medium">Pending</span>}
                </div>
                <div className="w-[12%] text-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(dispatch.id!);
                    }}
                    className="text-red-600 hover:underline text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}