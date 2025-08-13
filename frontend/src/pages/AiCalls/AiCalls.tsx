import { useNavigate } from "react-router-dom";
import { useAiCalls, useDeleteAiCall } from "@/hooks/useAiCalls";

export default function AiCallList() {
  const navigate = useNavigate();
  const { data: aiCalls = [], isLoading, error } = useAiCalls();
  const { mutate: deleteAiCall } = useDeleteAiCall();

  const handleDelete = (id: string) => {
    if (!confirm("Are you sure you want to delete this AI call?")) return;
    deleteAiCall({ id });
  };

  if (isLoading) return <div className="p-4">Loading AI calls...</div>;
  if (error) return <div className="p-4 text-red-600">{(error as Error).message}</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">AI Calls</h1>
        <button
          onClick={() => navigate("/ai-calls/new")}
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
        >
          + New AI Call
        </button>
      </div>

      {aiCalls.length === 0 ? (
        <div className="p-4 text-gray-500 text-center">No AI calls found.</div>
      ) : (
        <ul className="space-y-4">
          {aiCalls.map((call) => (
            <li
              key={call.id}
              className="bg-white shadow-md p-5 rounded-md cursor-pointer hover:bg-gray-50 transition"
              onClick={() => navigate(`/ai-calls/${call.id}`)}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-lg font-semibold text-gray-900">
                    Decision: {call.aiDecision || "Unknown"}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Confidence: <span className="font-medium">{call.confidenceScore?.toFixed(2) ?? "—"}</span>
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Evaluated At: <span className="font-medium">{new Date(call.evaluatedAt).toLocaleString()}</span>
                  </p>
                </div>

                <div className="text-right space-y-1">
                  <p className="text-sm text-gray-600">
                    Notes: <span className="font-medium">{call.notes || "—"}</span>
                  </p>
                </div>
              </div>

              <div className="flex justify-end mt-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(call.id!);
                  }}
                  className="text-red-600 hover:underline font-semibold"
                  aria-label={`Delete AI call ${call.id}`}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
