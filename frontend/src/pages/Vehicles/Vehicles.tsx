import { useVehicles, useDeleteVehicle } from "@/hooks/useVehicles";
import type { Vehicle } from "@/types/vehicle";
import { useNavigate } from "react-router-dom";

const Vehicles = () => {
  const navigate = useNavigate();
  const { data: vehicles = [], isLoading, error } = useVehicles();
  const { mutate: deleteVehicle } = useDeleteVehicle();

  const handleDelete = (id: string) => {
    if (!confirm("Are you sure you want to delete this vehicle?")) return;
    deleteVehicle({ id });
  };

  if (isLoading) return <div className="p-4">Loading vehicles...</div>;
  if (error) return <div className="p-4 text-red-600">{(error as Error).message}</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Vehicles</h1>
        <button
          onClick={() => navigate("/vehicles/new")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + New Vehicle
        </button>
      </div>

      {vehicles.length === 0 ? (
        <div className="p-4 text-gray-500">No vehicles found.</div>
      ) : (
        <div className="grid grid-cols mt-6">
          {vehicles.map((vehicle: Vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white shadow-md p-4 rounded-md cursor-pointer hover:bg-gray-50"
              onClick={() => navigate(`/vehicles/${vehicle.id}`)}
            >
              <p className="font-bold">
                {vehicle.name} {vehicle.model ? `(${vehicle.model})` : ""}
              </p>
              <p className="text-sm text-gray-600">Registration: {vehicle.plate || "—"}</p>
              <p className="text-sm text-gray-600 capitalize">
                Status: {vehicle.status || "—"}
              </p>
              {vehicle.description && (
                <p className="text-sm text-gray-600">Description: {vehicle.description}</p>
              )}
              <div className="flex gap-4 mt-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(vehicle.id!);
                  }}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Vehicles;
