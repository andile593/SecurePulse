import { useVehicles, useCreateVehicle, useUpdateVehicle, useDeleteVehicle } from "@/hooks/useVehicles";
import VehicleForm from "@/components/forms/VehicleForm";
import type { Vehicle } from "@/types/vehicle";
import { useState } from "react";

const Vehicles = () => {
  const { data: vehicles = [], isLoading, error } = useVehicles();
  const { mutate: createVehicle } = useCreateVehicle();
  const { mutate: updateVehicle } = useUpdateVehicle();
  const { mutate: deleteVehicle } = useDeleteVehicle();

  const [showForm, setShowForm] = useState(false);
  const [editingVehicle, setEditingVehicle] = useState<Vehicle | null>(null);

const handleSubmit = (data: Partial<Vehicle>) => {
  if (editingVehicle?.id) {
    const updatedVehicle: Vehicle = {
      ...editingVehicle,
      ...data,
    };
    updateVehicle({ id: editingVehicle.id, vehicle: updatedVehicle });
  } else {
    createVehicle(data as Vehicle);
  }
  setShowForm(false);
  setEditingVehicle(null);
};

const handleDelete = (id?: string) => {
  if (!id || !confirm("Are you sure you want to delete this vehicle?")) return;
  deleteVehicle({ id });
};


  const handleEdit = (vehicle: Vehicle) => {
    setEditingVehicle(vehicle);
    setShowForm(true);
  };

  

  if (isLoading) return <div className="p-4">Loading vehicles...</div>;
  if (error) return <div className="p-4 text-red-600">{(error as Error).message}</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Vehicles</h1>
        <button
          onClick={() => {
            setEditingVehicle(null);
            setShowForm(true);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + New Vehicle
        </button>
      </div>

      {showForm && (
        <VehicleForm
          initialData={editingVehicle ?? {}}
          onSubmit={handleSubmit}
          onClose={() => setShowForm(false)}
        />
      )}

      <ul className="space-y-4 mt-6">
        {vehicles.map((vehicle: Vehicle) => (
          <li key={vehicle.id} className="bg-white shadow-md p-4 rounded-md">
            <p className="font-bold">
              {vehicle.name} ({vehicle.model})
            </p>
            <p className="text-sm text-gray-600">Plate #: {vehicle.plate}</p>
            <p className="text-sm text-gray-600">Status: {vehicle.status}</p>
            <div className="flex gap-4 mt-2">
              <button
                className="text-blue-600 hover:underline"
                onClick={() => handleEdit(vehicle)}
              >
                Edit
              </button>
              <button
                className="text-red-600 hover:underline"
                onClick={() => handleDelete(vehicle.id)}
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
