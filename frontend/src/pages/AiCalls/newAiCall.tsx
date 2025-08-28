import { useNavigate } from 'react-router-dom';
import AiCallForm from '@/components/forms/AiCallForm';
import { useCreateAiCall } from '@/hooks/useAiCalls';
import type { AiCall } from '@/types/aiCall';

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

  const handleSubmit = (data: Partial<AiCall>) => {
    if (!data.aiDecision || !data.confidenceScore || !data.evaluatedAt || !data.alarmId) {
      console.error('Missing required fields:', data);
      return;
    }

    createAiCall(data as AiCall, {
      onSuccess: () => navigate('/ai-calls'),
      onError: (error) => console.error('Failed to create AiCall:', error),
    });
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Create New AI Call</h1>
      <AiCallForm initialData={{} as AiCall} onSubmit={handleSubmit} onClose={() => navigate('/ai-calls')} />
    </div>
  );
};

export default NewAiCall;
