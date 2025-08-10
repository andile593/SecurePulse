import VehicleForm from "@/components/forms/VehicleForm";
import { useCreateVehicle } from "@/hooks/useVehicles";
import { useNavigate } from "react-router-dom";

const NewVehicle = () => {
  const navigate = useNavigate();
  const { mutate: createVehicle } = useCreateVehicle();

  const handleSubmit = (data: any) => {
    createVehicle(data, {
      onSuccess: () => {
        navigate("/vehicles");
      },
      onError: (error) => {
        console.error("Failed to create vehicle:", error);
      },
    });
  };
  
  const emptyVehicleData = {
    make: '',
    model: '',
    year: '',
    licensePlate: '',
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Create New Vehicle</h1>
      <VehicleForm
        initialData={emptyVehicleData}
        onSubmit={handleSubmit}
        onClose={() => navigate("/vehicles")}
      />
    </div>
  );
};

export default NewVehicle;
