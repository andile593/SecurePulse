import { useAlarms, useDeleteAlarm } from "@/hooks/useAlarms";
import { useNavigate } from "react-router-dom";
import type { Alarm } from "@/types";

export default function AlarmList() {
  const navigate = useNavigate();
  const { data: alarms = [], isLoading, error } = useAlarms();
  const { mutate: deleteAlarm } = useDeleteAlarm();

  const handleDelete = (id: string) => {
    if (!confirm("Are you sure you want to delete this alarm?")) return;
    deleteAlarm({ id });
  };

  if (isLoading) return <div className="p-4">Loading alarms...</div>;
  if (error) return <div className="p-4 text-red-600">{(error as Error).message}</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Alarms</h1>
        <button
          onClick={() => navigate("/alarms/new")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + New Alarm
        </button>
      </div>

      {alarms.length === 0 ? (
        <div className="p-4 text-gray-500">No alarms found.</div>
      ) : (
        <ul className="space-y-4 mt-6">
          {alarms.map((alarm) => (
            <li
              key={alarm.id}
              className="bg-white shadow-md p-4 rounded-md cursor-pointer hover:bg-gray-50"
              onClick={() => navigate(`/alarms/${alarm.id}`)}
            >
              <p className="text-sm text-gray-600">
                Site: {alarm.site?.name || alarm.siteId || "—"}
              </p>
              <p className="text-sm text-gray-600">
                Status: <span className="font-medium">{alarm.status}</span>
              </p>
              <p className="text-sm text-gray-600">
                Priority: {alarm.priority}
              </p>

              <div className="flex gap-4 mt-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(alarm.id!);
                  }}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
