import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Guard } from "@/types";
import { getGuards, deleteGuard } from "@/lib/api/guards";

export default function GuardList() {
  const [guards, setGuards] = useState<Guard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchGuards = async () => {
    try {
      const data = await getGuards();
      setGuards(data);
    } catch {
      setError("Failed to load guards.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGuards();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this guard?")) return;
    try {
      await deleteGuard(id);
      setGuards((prev) => prev.filter((g) => g.id !== id));
    } catch {
      alert("Delete failed.");
    }
  };

  if (loading) return <div className="p-4">Loading guards...</div>;
  if (error) return <div className="p-4 text-red-600">{error}</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Guards</h1>
        <Link
          to="/guards/new"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + New Guard
        </Link>
      </div>

      {guards.length === 0 ? (
        <div>No guards found.</div>
      ) : (
        <table className="w-full border text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-2">Name</th>
              <th className="p-2">Phone</th>
              <th className="p-2">Status</th>
              <th className="p-2">Assigned Vehicle</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {guards.map((guard) => (
              <tr key={guard.id} className="border-t">
                <td className="p-2">{guard.name}</td>
                <td className="p-2">{guard.phone}</td>
                <td className="p-2 capitalize">{guard.status}</td>
                <td className="p-2">{guard.assignedVehicleId || "—"}</td>
                <td className="p-2 space-x-2">
                  <Link
                    to={`/guards/${guard.id}/edit`}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(guard.id!)}
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
