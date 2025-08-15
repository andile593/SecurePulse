import { useState } from "react";
import type { AiCall } from "@/types/aiCall";

type AiCallFormProps = {
  initialData?: Partial<AiCall>;
  onSubmit: (data: Partial<AiCall>) => void;
  onClose: () => void;
};

const AiCallForm = ({
  initialData = {},
  onSubmit,
  onClose,
}: AiCallFormProps) => {
  const [aiDecision, setAiDecision] = useState(initialData.aiDecision ?? "");
  const [confidenceScore, setConfidenceScore] = useState(
    initialData.confidenceScore ?? 0.5
  );
  const [evaluatedAt, setEvaluatedAt] = useState(
    initialData.evaluatedAt ?? new Date().toISOString().slice(0, 16)
  );
  const [notes, setNotes] = useState(initialData.notes ?? "");
  const [alarmId, setAlarmId] = useState(initialData.alarmId ?? "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const evaluatedAtIso = new Date(evaluatedAt).toISOString();
    onSubmit({ aiDecision, confidenceScore, evaluatedAt: evaluatedAtIso, notes, alarmId });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white shadow p-4 rounded max-w-md"
    >
      <div>
        <label className="block text-sm font-medium mb-1">AI Decision</label>
        <select
          value={aiDecision}
          onChange={(e) => setAiDecision(e.target.value)}
          className="w-full border p-2 rounded"
          required
        >
          <option value="">Select Decision</option>
          <option value="cancelled">Cancelled</option>
          <option value="escalated">Escalated</option>
          <option value="inconclusive">Inconclusive</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Confidence Score
        </label>
        <input
          type="number"
          step="0.01"
          min="0"
          max="1"
          value={confidenceScore}
          onChange={(e) => setConfidenceScore(parseFloat(e.target.value))}
          className="w-full border p-2 rounded"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Evaluated At</label>
        <input
          type="datetime-local"
          value={evaluatedAt}
          onChange={(e) => setEvaluatedAt(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Notes</label>
        <textarea
          className="w-full border p-2 rounded"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Alarm ID</label>
        <input
          className="w-full border p-2 rounded"
          value={alarmId}
          onChange={(e) => setAlarmId(e.target.value)}
          required
        />
      </div>
      

      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onClose}
          className="text-gray-600 hover:underline"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AiCallForm;
