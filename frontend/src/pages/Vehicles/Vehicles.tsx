import { useVehicles, useCreateVehicle, useUpdateVehicle } from '@/hooks/useVehicles';
import VehicleForm from '@/components/forms/VehicleForm';
import type { Vehicle } from '@/types/vehicle';
import { useState } from 'react';

const Vehicles = () => {
  const { data: vehicles = [], isLoading, error } = useVehicles();
  const { mutate: createVehicle } = useCreateVehicle();
  const { mutate: updateVehicle } = useUpdateVehicle();

  const [showForm, setShowForm] = useState(false);
  const [editingVehicle, setEditingVehicle] = useState<Vehicle | null>(null);

  const handleCreate = () => {
    setEditingVehicle(null);
    setShowForm(true);
  };

  const handleEdit = (vehicle: Vehicle) => {
    setEditingVehicle(vehicle);
    setShowForm(true);
  };

  const handleSubmit = (data: Partial<Vehicle>) => {
    if (editingVehicle?.id) {
      updateVehicle({ id: editingVehicle.id, vehicle: data });
    } else {
      createVehicle(data as Vehicle);
    }
    setShowForm(false);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Vehicles</h1>
        <button
          onClick={handleCreate}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          New Vehicle
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
            <p className="font-bold">{vehicle.model}</p>
            <p className="text-sm text-gray-600">Plate #: {vehicle.plateNumber}</p>
            <button
              className="text-blue-600 hover:underline mt-2"
              onClick={() => handleEdit(vehicle)}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Vehicles;
