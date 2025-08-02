import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alarm } from "@/types";
import { getAlarms, deleteAlarm } from "@/lib/api/alarms";

export default function AlarmList() {
  const [alarms, setAlarms] = useState<Alarm[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAlarms = async () => {
    try {
      const data = await getAlarms();
      setAlarms(data);
    } catch {
      setError("Failed to load alarms.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAlarms();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this alarm?")) return;
    try {
      await deleteAlarm(id);
      setAlarms((prev) => prev.filter((alarm) => alarm.id !== id));
    } catch {
      alert("Error deleting alarm.");
    }
  };

  if (loading) return <div className="p-4">Loading alarms...</div>;
  if (error) return <div className="p-4 text-red-600">{error}</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Alarms</h1>
        <Link
          to="/alarms/new"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + New Alarm
        </Link>
      </div>

      {alarms.length === 0 ? (
        <div>No alarms found.</div>
      ) : (
        <table className="w-full border text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-2">Type</th>
              <th className="p-2">Priority</th>
              <th className="p-2">Status</th>
              <th className="p-2">Triggered At</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {alarms.map((alarm) => (
              <tr key={alarm.id} className="border-t">
                <td className="p-2">{alarm.alarmType}</td>
                <td className="p-2">{alarm.priority}</td>
                <td className="p-2">{alarm.status}</td>
                <td className="p-2">
                  {alarm.triggeredAt ? new Date(alarm.triggeredAt).toLocaleString() : "—"}
                </td>
                <td className="p-2 space-x-2">
                  <Link to={`/alarms/${alarm.id}/edit`} className="text-blue-600 hover:underline">
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(alarm.id!)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
