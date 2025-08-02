import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Dispatch } from "@/types";
import { getDispatches, deleteDispatch } from "@/lib/api/dispatches";

export default function DispatchList() {
  const [dispatches, setDispatches] = useState<Dispatch[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDispatches = async () => {
    try {
      const data = await getDispatches();
      setDispatches(data);
    } catch {
      setError("Failed to fetch dispatches.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDispatches();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this dispatch?")) return;
    try {
      await deleteDispatch(id);
      setDispatches((prev) => prev.filter((item) => item.id !== id));
    } catch {
      alert("Failed to delete dispatch.");
    }
  };

  if (loading) return <div className="p-4">Loading dispatches...</div>;
  if (error) return <div className="p-4 text-red-600">{error}</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Dispatches</h1>
        <Link
          to="/dispatches/new"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + New Dispatch
        </Link>
      </div>

      {dispatches.length === 0 ? (
        <div>No dispatches found.</div>
      ) : (
        <table className="w-full border text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-2">Dispatched At</th>
              <th className="p-2">Arrival Time</th>
              <th className="p-2">Resolved At</th>
              <th className="p-2">Response Notes</th>
              <th className="p-2">Alarm ID</th>
              <th className="p-2">Guard ID</th>
              <th className="p-2">Vehicle ID</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dispatches.map((d) => (
              <tr key={d.id} className="border-t">
                <td className="p-2">{new Date(d.dispatchedAt).toLocaleString()}</td>
                <td className="p-2">
                  {d.arrivalTime ? new Date(d.arrivalTime).toLocaleString() : "—"}
                </td>
                <td className="p-2">
                  {d.resolvedAt ? new Date(d.resolvedAt).toLocaleString() : "—"}
                </td>
                <td className="p-2">{d.responseNotes || "—"}</td>
                <td className="p-2">{d.alarmId || "—"}</td>
                <td className="p-2">{d.guardId || "—"}</td>
                <td className="p-2">{d.vehicleId || "—"}</td>
                <td className="p-2 space-x-2">
                  <Link to={`/dispatches/${d.id}/edit`} className="text-blue-600 hover:underline">
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(d.id!)}
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
