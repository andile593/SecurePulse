import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { AiCall } from "@/types";
import { getAiCalls, deleteAiCall } from "@/lib/api/aiCalls";

export default function AiCallList() {
  const [aiCalls, setAiCalls] = useState<AiCall[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAiCalls = async () => {
    try {
      const response = await getAiCalls();
      setAiCalls(response.data);
    } catch (err) {
      setError("Failed to load AI calls.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAiCalls();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this AI call?")) return;
    try {
      await deleteAiCall({id});
      setAiCalls((prev) => prev.filter((c) => c.id !== id));
    } catch {
      alert("Delete failed.");
    }
  };

  if (loading) return <div className="p-4">Loading AI calls...</div>;
  if (error) return <div className="p-4 text-red-600">{error}</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">AI Calls</h1>
        <Link
          to="/ai-calls/new"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + New AI Call
        </Link>
      </div>

      {aiCalls.length === 0 ? (
        <div>No AI calls found.</div>
      ) : (
        <table className="w-full border text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-2">Decision</th>
              <th className="p-2">Confidence</th>
              <th className="p-2">Evaluated At</th>
              <th className="p-2">Notes</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {aiCalls.map((call) => (
              <tr key={call.id} className="border-t">
                <td className="p-2">{call.aiDecision}</td>
                <td className="p-2">{call.confidenceScore.toFixed(2)}</td>
                <td className="p-2">{new Date(call.evaluatedAt).toLocaleString()}</td>
                <td className="p-2">{call.notes || "—"}</td>
                <td className="p-2 space-x-2">
                  <Link
                    to={`/ai-calls/${call.id}/edit`}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(call.id!)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
