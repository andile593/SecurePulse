import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Vehicle } from "@/types";
import { getVehicles, deleteVehicle } from "@/lib/api/vehicles";

export default function VehicleList() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchVehicles = async () => {
    try {
      const data = await getVehicles();
      setVehicles(data);
    } catch {
      setError("Failed to load vehicles.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this vehicle?")) return;
    try {
      await deleteVehicle(id);
      setVehicles((prev) => prev.filter((v) => v.id !== id));
    } catch {
      alert("Failed to delete vehicle.");
    }
  };

  if (loading) return <div className="p-4">Loading vehicles...</div>;
  if (error) return <div className="p-4 text-red-600">{error}</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Vehicles</h1>
        <Link
          to="/vehicles/new"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + New Vehicle
        </Link>
      </div>

      {vehicles.length === 0 ? (
        <div>No vehicles found.</div>
      ) : (
        <table className="w-full border text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-2">Plate Number</th>
              <th className="p-2">Model</th>
              <th className="p-2">Status</th>
              <th className="p-2">Assigned Guard</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((vehicle) => (
              <tr key={vehicle.id} className="border-t">
                <td className="p-2">{vehicle.plateNumber}</td>
                <td className="p-2">{vehicle.model}</td>
                <td className="p-2 capitalize">{vehicle.status}</td>
                <td className="p-2">{vehicle.assignedGuardId || "—"}</td>
                <td className="p-2 space-x-2">
                  <Link
                    to={`/vehicles/${vehicle.id}/edit`}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(vehicle.id!)}
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
