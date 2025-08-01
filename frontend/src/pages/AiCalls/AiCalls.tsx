import { useAiCalls } from '@/hooks/useAiCalls';
import type { AiCall } from '@/types/aiCall';

const AiCalls = () => {
  const { data: aiCalls, isLoading, error } = useAiCalls();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">AI Calls</h1>
      <ul className="space-y-4">
        {aiCalls?.map((call: AiCall) => (
          <li key={call.id} className="bg-white shadow-md p-4 rounded-md">
            {/* <p className="font-bold">Caller: {call.caller}</p> */}
            <p className="text-sm text-gray-600">{call.aiDecision}</p>
            <p className="text-sm text-gray-500">At: {new Date(call.evaluatedAt).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AiCalls;
