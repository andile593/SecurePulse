import { useState } from "react";
import type { AiCall } from "@/types/aiCall";
import { useAlarms } from "@/hooks/useAlarms";
import { useSites } from "@/hooks/useSites";

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
  const [calledAt, setCalledAt] = useState(
    initialData.calledAt ?? new Date().toISOString().slice(0, 16)
  );
  const [callDuration, setCallDuration] = useState(initialData.callDuration ?? "");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phone, setPhone] = useState(initialData.phone ?? "");

  const { data: alarms = [] } = useAlarms();
  const { data: sites = [] } = useSites();

  const siteMap = sites.reduce((acc, site) => {
    if (site.id) acc[site.id] = site.name;
    return acc;
  }, {} as Record<string, string>);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;
    setIsSubmitting(true);

    const capitalize = (str: string) => {
      if (!str) return "";
      return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const evaluatedAtIso = new Date(evaluatedAt).toISOString();
    onSubmit({
      aiDecision, confidenceScore, evaluatedAt: evaluatedAtIso, notes, alarmId, calledAt: new Date(calledAt).toISOString(),
      callDuration, phone,
    });
    setTimeout(() => setIsSubmitting(false), 1000);
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
          <option value="Cancelled">Cancelled</option>
          <option value="Escalated">Escalated</option>
          <option value="Inconclusive">Inconclusive</option>
        </select>
      </div>
      <select
        className="w-full border p-2 rounded"
        value={alarmId}
        onChange={(e) => {
          const selectedId = e.target.value;
          setAlarmId(selectedId);

          const selectedAlarm = alarms.find((a) => a.id === selectedId);
          if (selectedAlarm?.transmitter?.site?.client?.phone) {
            setPhone(selectedAlarm.transmitter.site.client.phone);
          }
        }}
        required
      >
        <option value="">Select an Alarm</option>
        {alarms.map((alarm) => (
          <option key={alarm.id} value={alarm.id}>
            {alarm.eventType} - {siteMap[alarm.transmitter?.siteId ?? ""] ?? "Unknown Site"}

          </option>
        ))}
      </select>

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
        <label className="block text-sm font-medium mb-1">Call Started At</label>
        <input
          type="datetime-local"
          value={calledAt}
          onChange={(e) => setCalledAt(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Call Duration</label>
        <input
          type="text"
          placeholder="e.g. 00:03:25"
          value={callDuration}
          onChange={(e) => setCallDuration(e.target.value)}
          className="w-full border p-2 rounded"
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
        <label className="block text-sm font-medium mb-1">Alarm</label>
        <select
          className="w-full border p-2 rounded"
          value={alarmId}
          onChange={(e) => setAlarmId(e.target.value)}
          required
        >
          <option value="">Select a Alarm</option>
          {alarms.map((alarm) => (
            <option key={alarm.id} value={alarm.id}>
              {alarm.eventType} - {siteMap[alarm.transmitter?.siteId ?? ""] ?? "Unknown Site"}
            </option>

          ))}

        </select>
      </div>


      <div className="flex gap-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-4 py-2 rounded text-white ${isSubmitting ? "bg-gray-400" : "bg-blue-600"
            }`}
        >
          {isSubmitting ? "Saving..." : "Save"}
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
