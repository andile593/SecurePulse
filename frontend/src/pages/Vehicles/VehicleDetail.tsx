import { useParams, Link } from "react-router-dom";
import { useVehicleById } from "@/hooks/useVehicles"; // You’ll need this custom hook
import type { Vehicle } from "@/types/vehicle";

const VehicleDetail = () => {
  const { id } = useParams<{ id: string }>();
const { data, isLoading, error } = useVehicleById(id || "");
const vehicle = data?.data;


  if (isLoading) return <div className="p-4">Loading vehicle details...</div>;
  if (error) return <div className="p-4 text-red-600">{(error as Error).message}</div>;
  if (!vehicle) return <div className="p-4">Vehicle not found.</div>;

  return (
    <div className="p-6">
      <Link to="/vehicles" className="text-blue-600 hover:underline">&larr; Back to Vehicles</Link>
      <h1 className="text-2xl font-semibold mt-4">Vehicle Details</h1>

      <div className="mt-4 bg-white p-6 rounded shadow">
        <p><strong>Name:</strong> {vehicle.name}</p>
        <p><strong>Model:</strong> {vehicle.model}</p>
        <p><strong>Plate:</strong> {vehicle.plate}</p>
        <p><strong>Status:</strong> {vehicle.status}</p>
        <p><strong>Description:</strong> {vehicle.description || "N/A"}</p>
      </div>
    </div>
  );
};

export default VehicleDetail;
