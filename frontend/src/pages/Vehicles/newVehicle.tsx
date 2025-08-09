import VehicleForm from "@/components/forms/VehicleForm";
import { useVehicles } from "@/hooks/useVehicles";
import { useNavigate } from "react-router-dom";


const NewVehicle = () => {
  const navigate = useNavigate();
  const { mutate: createVehicle } = useVehicles();

const handleSubmit = (data: any) => {
  createVehicle(data, {
    onSuccess: () => {
      navigate("/vehicles");
    },
    onError: (error) => {
      console.error("Failed to create vehicle:", error);
    }
  });
};



  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Create New Vehicle</h1>
      <UserForm
        onSubmit={handleSubmit}
        onClose={() => navigate("/vehicles")}
       
      />
    </div>
  );
};

export default NewVehicle
