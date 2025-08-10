import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Guard } from "@/types";
import { getGuards, deleteGuard } from "@/lib/api/guards";

export default function GuardList() {
  const navigate = useNavigate();
  const [guards, setGuards] = useState<Guard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchGuards = async () => {
    try {
      const response = await getGuards();
      setGuards(response.data);
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
      await deleteGuard({ id });
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
        <button
          onClick={() => navigate("/guards/new")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + New Guard
        </button>
      </div>

      {guards.length === 0 ? (
        <div className="p-4 text-gray-500">No guards found.</div>
      ) : (
        <ul className="space-y-4 mt-6">
          {guards.map((guard) => (
            <li
              key={guard.id}
              className="bg-white shadow-md p-4 rounded-md cursor-pointer hover:bg-gray-50"
              onClick={() => navigate(`/guards/${guard.id}`)}
            >
              <p className="font-bold">{guard.name}</p>
              <p className="text-sm text-gray-600">Phone: {guard.phone || "—"}</p>
              <p className="text-sm text-gray-600 capitalize">
                Status: {guard.status || "—"}
              </p>
              <p className="text-sm text-gray-600">
                Assigned Vehicle: {guard.assignedVehicleId || "—"}
              </p>

              <div className="flex gap-4 mt-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(guard.id!);
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
