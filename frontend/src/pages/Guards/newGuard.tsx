import GuardForm from "@/components/forms/GuardForm";
import { useCreateGuard } from "@/hooks/useGuards";
import { useNavigate } from "react-router-dom";

const NewGuard = () => {
  const navigate = useNavigate();
  const { mutate: createGuard } = useCreateGuard();

  const handleSubmit = (data: any) => {
    createGuard(data, {
      onSuccess: () => {
        navigate("/guards");
      },
      onError: (error) => {
        console.error("Failed to create guard:", error);
      },
    });
  };
  
  const emptyGuardData = {
    name: '',
    phone: '',
    status: '',
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Create New Vehicle</h1>
      <GuardForm
        initialData={emptyGuardData}
        onSubmit={handleSubmit}
        onClose={() => navigate("/guards")}
      />
    </div>
  );
};

export default NewGuard;
