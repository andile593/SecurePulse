import DispatchForm from "@/components/forms/DispatchForm";
import { useCreateDispatch } from "@/hooks/useDispatches";
import { useNavigate } from "react-router-dom";
import type { Dispatch } from "@/types";

const NewDispatch = () => {
  const navigate = useNavigate();
  const { mutate: createDispatch } = useCreateDispatch();

  const handleSubmit = (data: any) => {
    createDispatch(data, {
      onSuccess: () => {
        navigate("/dispatches");
      },
      onError: (error) => {
        console.error("Failed to create dispatch:", error);
      },
    });
  };
  
  const emptyDispatchData: Partial<Dispatch> = {
    dispatchedAt: '',
    alarmId: '',
    arrivalTime: '',
    responseNotes: '',
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Create New dispatch</h1>
      <DispatchForm
        initialData={emptyDispatchData}
        onSubmit={handleSubmit}
        onClose={() => navigate("/dispatch")}
      />
    </div>
  );
};

export default NewDispatch;
