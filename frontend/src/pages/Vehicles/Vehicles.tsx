import { useVehicles, useDeleteVehicle } from "@/hooks/useVehicles";
import type { Vehicle } from "@/types/vehicle";
import { useNavigate } from "react-router-dom";

const Vehicles = () => {
  const { data: vehicles = [], isLoading, error } = useVehicles();
  const { mutate: deleteVehicle } = useDeleteVehicle();

  const handleDelete = (id?: string) => {
    if (!id || !confirm("Are you sure you want to delete this vehicle?"))
      return;
    deleteVehicle({ id });
  };

  if (isLoading) return <div className="p-4">Loading vehicles...</div>;
  if (error)
    return <div className="p-4 text-red-600">{(error as Error).message}</div>;

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

      <ul className="space-y-4 mt-6">
        {vehicles.map((vehicle: Vehicle) => (
          <li key={vehicle.id} className="bg-white shadow-md p-4 rounded-md" onClick={() => navigate(`/vehicles/${user.id}`)}>
            <p className="font-bold text-blue-600 hover:underline">{vehicle.name} ({vehicle.model})</p>
            <p className="text-sm text-gray-600">Plate #: {vehicle.plate}</p>
            <p className="text-sm text-gray-600">Status: {vehicle.status}</p>
            <p className="text-sm text-gray-600">Description: {vehicle.description}</p>
            <div className="flex gap-4 mt-2">
              <button
                className="text-red-600 hover:underline"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(vehicle.id);
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Vehicles;
