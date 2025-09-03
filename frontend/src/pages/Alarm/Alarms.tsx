import { useAlarms, useDeleteAlarm } from "@/hooks/useAlarms";
import { useSites } from "@/hooks/useSites";
import { useNavigate } from "react-router-dom";

export default function AlarmList() {
  const navigate = useNavigate();
  const { data: alarms = [], isLoading, error } = useAlarms();
  const { data: sites = [] } = useSites();
  const { mutate: deleteAlarm } = useDeleteAlarm();

  console.log(sites);
  
 

  const handleDelete = (id: string) => {
    if (!confirm("Are you sure you want to delete this alarm?")) return;
    deleteAlarm({ id });
  };

  if (isLoading) return <div className="p-4">Loading alarms...</div>;
  if (error) return <div className="p-4 text-red-600">{(error as Error).message}</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Alarms</h1>
        <button
          onClick={() => navigate("/alarms/new")}
          className="bg-primary text-white px-5 py-2 rounded hover:bg-blue-700 transition"
        >
          + New Alarm
        </button>
      </div>

      {alarms.length === 0 ? (
        <div className="p-4 text-gray-500 text-center">No alarms found.</div>
      ) : (
        <ul className="space-y-4">
          {alarms.map((alarm) => {
            // Find the site via the transmitterId
            const site = sites.find((s) => s.transmitters?.some(t => t.id === alarm.transmitterId));

            return (
              <li
                key={alarm.id}
                className="bg-white shadow-md p-5 rounded-md cursor-pointer hover:bg-gray-50 transition"
                onClick={() => navigate(`/alarms/${alarm.id}`)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-lg font-semibold text-gray-900">
                      {alarm.eventType || "Unknown Alarm"}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Site: <span className="font-medium">{site?.name || "—"}</span>
                    </p>
                  </div>

                  {/* <div className="text-right space-y-1">
                    <p>
                      <span className="text-sm text-gray-600">Priority:</span>{" "}
                      <span
                        className={`font-bold ${
                          alarm.priority >= 4 ? "text-red-600" : alarm.priority === 3 ? "text-yellow-600" : "text-green-600"
                        }`}
                      >
                        {alarm.priority}
                      </span>
                    </p>
                    <p>
                      <span className="text-sm text-gray-600">Status:</span>{" "}
                      <span className="font-medium">{alarm.status}</span>
                    </p>
                    <p className="text-sm text-gray-600">
                      Triggered: {new Date(alarm.triggeredAt).toLocaleString()}
                    </p>
                  </div> */}
                </div>

                <div className="flex justify-end mt-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(alarm.id!);
                    }}
                    className="text-red-600 hover:underline font-semibold"
                    aria-label={`Delete alarm ${alarm.id}`}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
