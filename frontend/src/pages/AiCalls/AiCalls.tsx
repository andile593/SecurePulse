import { useAiCalls, useCreateAiCall, useUpdateAiCall } from '@/hooks/useAiCalls';
import AiCallForm from '@/components/forms/AiCallForm';
import type { AiCall } from '@/types/aiCall';
import { useState } from 'react';

const AiCalls = () => {
  const { data: aiCalls = [], isLoading, error } = useAiCalls();
  const { mutate: createAiCall } = useCreateAiCall();
  const { mutate: updateAiCall } = useUpdateAiCall();

  const [showForm, setShowForm] = useState(false);
  const [editingAiCall, setEditingAiCall] = useState<AiCall | null>(null);

  const handleCreate = () => {
    setEditingAiCall(null);
    setShowForm(true);
  };

  const handleEdit = (aiCall: AiCall) => {
    setEditingAiCall(aiCall);
    setShowForm(true);
  };

  const handleSubmit = (data: Partial<AiCall>) => {
    if (editingAiCall?.id) {
      updateAiCall({ id: editingAiCall.id, aiCall: data });
    } else {
      createAiCall(data as AiCall);
    }
    setShowForm(false);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">AI Calls</h1>
        <button
          onClick={handleCreate}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          New Call
        </button>
      </div>

      {showForm && (
        <AiCallForm
          initialData={editingAiCall ?? {}}
          onSubmit={handleSubmit}
          onClose={() => setShowForm(false)}
        />
      )}

      <ul className="space-y-4 mt-6">
        {aiCalls.map((call: AiCall) => (
          <li key={call.id} className="bg-white shadow-md p-4 rounded-md">
            <p className="font-bold">{call.caller}</p>
            <p className="text-sm text-gray-600">Topic: {call.topic}</p>
            <p className="text-sm text-gray-500">Time: {call.timestamp}</p>
            <button
              className="text-blue-600 hover:underline mt-2"
              onClick={() => handleEdit(call)}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AiCalls;
