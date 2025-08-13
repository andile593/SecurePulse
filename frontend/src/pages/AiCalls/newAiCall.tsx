-import AiCallForm from "@/components/forms/AiCallForm";
import { useCreateAiCall } from "@/hooks/useAiCalls";
import { useNavigate } from "react-router-dom";

const NewAlarm = () => {
  const navigate = useNavigate();
  const { mutate: createAiCall } = useCreateAiCall();

  const handleSubmit = (data: any) => {
    createAiCall(data, {
      onSuccess: () => {
        navigate("/ai-calls");
      },
      onError: (error) => {
        console.error("Failed to create Ai calls:", error);
      },
    });
  };
  
  const emptyAiCallData = {
    aiDecision: '',
    confidenceScore: '',
    evaluatedAt: '',
    notes: '',
    alarmId: '',
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Create New Vehicle</h1>
      <AiCallForm
        initialData={emptyAiCallData}
        onSubmit={handleSubmit}
        onClose={() => navigate("/ai-calls")}
      />
    </div>
  );
};

export default NewAlarm;
