import DispatchForm from "@/components/forms/VehicleForm";
import { useCreateDispatch } from "@/hooks/useDispatch";
import { useNavigate } from "react-router-dom";

const NewDispatch = () => {
  const navigate = useNavigate();
  const { mutate: createDispatch } = useCreateDispatch();

  const handleSubmit = (data: any) => {
    createDispatch(data, {
      onSuccess: () => {
        navigate("/dispatch");
      },
      onError: (error) => {
        console.error("Failed to create dispatch:", error);
      },
    });
  };
  
  const emptyDispatchData = {
    dispatchedAt: '',
    alarmId: '',
    arrivalTime: '',
    responseNotes: '',
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Create New Vehicle</h1>
      <DispatchForm
        initialData={emptyDispatchData}
        onSubmit={handleSubmit}
        onClose={() => navigate("/dispatch")}
      />
    </div>
  );
};

export default NewDispatch;
