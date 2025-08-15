import { useNavigate } from "react-router-dom";
import AiCallForm from "@/components/forms/AiCallForm";
import { useCreateAiCall } from "@/hooks/useAiCalls";
import type { AiCall } from "@/types";

// Define the type for submitting to the backend
export interface AiCallSubmitData {
  aiDecision: string;
  confidenceScore: number;
  evaluatedAt: string;
  notes?: string;
  alarmId: string;
}

const NewAiCall = () => {
  const navigate = useNavigate();
  const { mutate: createAiCall } = useCreateAiCall();

  // Handle form submission
  const handleSubmit = (data: Partial<AiCall>) => {
    // Make sure required fields exist
    if (!data.aiDecision || !data.confidenceScore || !data.evaluatedAt || !data.alarmId) {
      console.error("Missing required fields:", data);
      return;
    }

    const submitData: AiCallSubmitData = {
      aiDecision: data.aiDecision,
      confidenceScore: data.confidenceScore,
      evaluatedAt: data.evaluatedAt,
      notes: data.notes,
      alarmId: data.alarmId,
    };

    createAiCall(submitData, {
      onSuccess: () => navigate("/ai-calls"),
      onError: (error) => console.error("Failed to create AiCall:", error),
    });
  };

  const emptyAiCallData: Partial<AiCallSubmitData> = {
    aiDecision: "",
    confidenceScore: 0,
    evaluatedAt: "",
    notes: "",
    alarmId: "",
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Create New AiCall</h1>
      <AiCallForm
        initialData={emptyAiCallData}
        onSubmit={handleSubmit} // now matches Partial<AiCall>
        onClose={() => navigate("/ai-calls")}
      />
    </div>
  );
};

export default NewAiCall;
