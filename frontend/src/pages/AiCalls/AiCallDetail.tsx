import { useParams, useNavigate } from "react-router-dom";
import { useAiCall, useUpdateAiCall, useDeleteAiCall } from "@/hooks/useAiCalls";
import AiCallForm from "@/components/forms/AiCallForm";
import { useState } from "react";
import type { AiCall } from '@/types';

const AiCallDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  if (!id) return <div className="p-4">AI Call ID not found</div>;

  const { data: aiCall, isLoading, error, refetch } = useAiCall(id);
  const { mutate: updateAiCall } = useUpdateAiCall();
  const { mutate: deleteAiCall } = useDeleteAiCall();

  const [editing, setEditing] = useState(false);

  const handleSubmit = (data: Partial<AiCall>) => {
    if (!aiCall) return;

    const updatedAiCall = { ...aiCall, ...data };
    updateAiCall(
      { id: aiCall.id!, aiCall: updatedAiCall },
      {
        onSuccess: () => {
          refetch();
          setEditing(false);
        },
      }
    );
  };

  const handleDelete = () => {
    if (!aiCall) return;

    if (confirm("Are you sure you want to delete this AI call?")) {
      deleteAiCall(
        { id: aiCall.id! },
        {
          onSuccess: () => navigate("/aicalls"),
        }
      );
    }
  };

  if (isLoading) return <div className="p-4">Loading AI call details...</div>;
  if (error) return <div className="p-4 text-red-600">{(error as Error).message}</div>;
  if (!aiCall) return <div className="p-4">AI Call not found.</div>;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">AI Call Details</h1>

      {editing ? (
        <AiCallForm
          initialData={{ ...aiCall }}
          onSubmit={handleSubmit}
          onClose={() => setEditing(false)}
        />
      ) : (
        <>
          <p><strong>Call ID:</strong> {aiCall.id}</p>
          <p><strong>Evaluated At:</strong> {new Date(aiCall.evaluatedAt).toLocaleString()}</p>
          <p><strong>Decision:</strong> {aiCall.aiDecision ?? "—"}</p>
          <p><strong>Notes:</strong> {aiCall.notes ?? "—"}</p>

          <div className="flex gap-4 mt-6">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={() => setEditing(true)}
            >
              Edit
            </button>

            <button
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              onClick={handleDelete}
            >
              Delete
            </button>

            <button
              className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
              onClick={() => navigate("/aicalls")}
            >
              Back to AI Calls
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AiCallDetail;
