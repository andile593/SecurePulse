import { useParams, useNavigate } from "react-router-dom";
import { useVehicle, useUpdateVehicle, useDeleteVehicle } from "@/hooks/useVehicles";
import VehicleForm from "@/components/forms/VehicleForm";
import { useState} from "react";
import type { Vehicle } from "@/types/vehicle";

const VehicleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  if (!id) return <div className="p-4">Vehicle ID not found</div>;
 
  const { data: vehicle, isLoading, error, refetch } = useVehicle(id);
  const { mutate: updateVehicle } = useUpdateVehicle();
  const { mutate: deleteVehicle } = useDeleteVehicle();

  const [editing, setEditing] = useState(false);

  const handleSubmit = (data: Partial<Vehicle>) => {
  if (!vehicle) return;

  const updatedVehicle = { ...vehicle, ...data };
  const { id, ...vehicleData } = updatedVehicle; 
  updateVehicle(
    { id: vehicle.id!, vehicle: vehicleData }, 
    {
      onSuccess: () => {
        refetch();
        setEditing(false);
      },
    }
  );
};

  

  const handleDelete = () => {
    if (!vehicle) return;
    if (confirm("Are you sure you want to delete this vehicle?")) {
      deleteVehicle(
        { id: vehicle.id! },
        { onSuccess: () => navigate("/vehicles") }
      );
    }
  };

  if (isLoading) return <div className="p-4">Loading vehicle details...</div>;
  if (error) return <div className="p-4 text-red-600">{(error as Error).message}</div>;
  if (!vehicle) return <div className="p-4">Vehicle not found.</div>

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mt-4">Vehicle Details</h1>
      {editing ? (
        <VehicleForm
          initialData={{ ...vehicle }}
          onSubmit={handleSubmit}
          onClose={() => setEditing(false)}
        />
      ) : (
        <>
          <p><strong>Vehicle Name:</strong> {vehicle.name}</p>
          <p><strong>Model:</strong> {vehicle.model}</p>
          <p><strong>Description:</strong> {vehicle.description ?? "—"}</p>
          <p><strong>Plate:</strong> {vehicle.plate}</p>
          <p><strong>Status:</strong> {vehicle.status}</p>

          <div className="flex gap-4 mt-6">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={() => setEditing(true)}>Edit</button>
            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700" onClick={handleDelete}>Delete</button>
            <button className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400" onClick={() => navigate("/vehicles")}>Back to Vehicles</button>
          </div>
        </>
      )}
    </div>
  );
};

export default VehicleDetail;
