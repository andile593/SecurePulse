import { useState } from "react";
import type { OBLog } from "@/types/OBLog";
import { useSites } from "@/hooks/useSites";
import { useGuards } from "@/hooks/useGuards";

type OBLogFormProps = {
  initialData?: Partial<OBLog>;
  onSubmit: (data: Partial<OBLog>) => void;
  onClose: () => void;
};

const OBLogForm = ({ initialData = {}, onSubmit, onClose }: OBLogFormProps) => {
  const [logTime, setLogTime] = useState(initialData.logTime ?? "");
  const [actionLog, setActionLog] = useState(initialData.actionLog ?? "");
  const [notes, setNotes] = useState(initialData.notes ?? "");
  const [guardId, setGuardId] = useState(initialData.guardId ?? "");
  const [siteId, setSiteId] = useState(initialData.siteId ?? "");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { data: sites = [] } = useSites();
  const { data: guards = [] } = useGuards();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;
    setIsSubmitting(true);

    const capitalize = (str: string) => {
      if (!str) return "";
      return str.charAt(0).toUpperCase() + str.slice(1);
    };


    const formatDateTimeLocal = (value: string) => {
      if (!value) return new Date().toISOString();

      const normalized = value.length === 16 ? `${value}:00` : value;

      const date = new Date(normalized);
      return date.toISOString();
    };


    onSubmit({
      logTime: formatDateTimeLocal(logTime),  // 🔹 send directly, no UTC conversion
      actionLog: capitalize(actionLog),
      notes: capitalize(notes),
      guardId,
      siteId,
    });

    setTimeout(() => setIsSubmitting(false), 1000);
  };


  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white shadow p-4 rounded max-w-md"
    >
      <div>
        <label className="block text-sm font-medium mb-1">Timestamp</label>
        <input
          type="datetime-local"
          value={logTime}
          onChange={(e) => setLogTime(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Action Log</label>
        <textarea
          className="w-full border p-2 rounded capitalize"
          value={actionLog}
          onChange={(e) => setActionLog(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Notes</label>
        <textarea
          className="w-full border p-2 rounded capitalize"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Guard</label>
        <select
          className="w-full border p-2 rounded "
          value={guardId}
          onChange={(e) => setGuardId(e.target.value)}
          required
        >
          <option value="">Select a guard</option>
          {guards.map((guard) => (
            <option key={guard.id} value={guard.id}>
              {guard.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium">Site</label>
        <select
          className="w-full border p-2 rounded"
          value={siteId}
          onChange={(e) => setSiteId(e.target.value)}
          required
        >
          <option value="">Select a site</option>
          {sites.map((site) => (
            <option key={site.id} value={site.id}>
              {site.name}
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

export default OBLogForm;
