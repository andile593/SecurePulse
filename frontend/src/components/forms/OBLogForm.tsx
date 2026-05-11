import { useState } from "react";
import type { OBLog } from "@/types/OBLog";
import { useSites } from "@/hooks/useSites";
import { useGuards } from "@/hooks/useGuards";

const ACTION_OPTIONS = [
  'DISPATCH',
  'RESOLVED',
  'ALARM',
  'GUARD_PATROL',
  'CHECK_IN',
  'INCIDENT',
  'SYSTEM',
];

type OBLogFormProps = {
  initialData?: Partial<OBLog>;
  onSubmit: (data: Partial<OBLog>) => void;
  onClose: () => void;
};

// Convert ISO string to datetime-local input format
function toDateTimeLocal(iso: string): string {
  if (!iso) return '';
  const date = new Date(iso);
  const offset = date.getTimezoneOffset();
  const local = new Date(date.getTime() - offset * 60000);
  return local.toISOString().slice(0, 16);
}

const OBLogForm = ({ initialData = {}, onSubmit, onClose }: OBLogFormProps) => {
  const [logTime, setLogTime] = useState(
    initialData.logTime ? toDateTimeLocal(initialData.logTime) : toDateTimeLocal(new Date().toISOString())
  );
  const [actionLog, setActionLog] = useState(initialData.actionLog ?? '');
  const [notes, setNotes] = useState(initialData.notes ?? '');
  const [guardId, setGuardId] = useState(initialData.guardId ?? '');
  const [siteId, setSiteId] = useState(initialData.siteId ?? '');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { data: sites = [] } = useSites();
  const { data: guards = [] } = useGuards();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    onSubmit({
      logTime: new Date(logTime).toISOString(),
      actionLog,
      notes,
      guardId: guardId || undefined,
      siteId: siteId || undefined,
    });

    setTimeout(() => setIsSubmitting(false), 1000);
  };

  const inputClass =
    'w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary text-gray-900';
  const labelClass = 'block text-sm font-medium text-gray-700 mb-1';

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6 max-w-2xl">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">
        {initialData.id ? 'Edit Log Entry' : 'New Log Entry'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Timestamp */}
        <div>
          <label className={labelClass}>Timestamp</label>
          <input
            type="datetime-local"
            value={logTime}
            onChange={(e) => setLogTime(e.target.value)}
            required
            className={inputClass}
          />
        </div>

        {/* Action Type */}
        <div>
          <label className={labelClass}>Action Type</label>
          <select
            value={actionLog}
            onChange={(e) => setActionLog(e.target.value)}
            required
            className={inputClass}
          >
            <option value="">Select action type</option>
            {ACTION_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt.replace('_', ' ')}
              </option>
            ))}
          </select>
        </div>

        {/* Notes */}
        <div>
          <label className={labelClass}>Notes</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
            placeholder="Enter log notes..."
            className={inputClass}
          />
        </div>

        {/* Site */}
        <div>
          <label className={labelClass}>Site</label>
          <select
            value={siteId}
            onChange={(e) => setSiteId(e.target.value)}
            className={inputClass}
          >
            <option value="">Select a site (optional)</option>
            {sites.map((site) => (
              <option key={site.id} value={site.id}>
                {site.name}
              </option>
            ))}
          </select>
        </div>

        {/* Guard */}
        <div>
          <label className={labelClass}>Guard</label>
          <select
            value={guardId}
            onChange={(e) => setGuardId(e.target.value)}
            className={inputClass}
          >
            <option value="">Select a guard (optional)</option>
            {guards.map((guard) => (
              <option key={guard.id} value={guard.id}>
                {guard.name}
              </option>
            ))}
          </select>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 transition"
          >
            {isSubmitting ? 'Saving...' : 'Save'}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-lg font-medium text-gray-600 border border-gray-300 hover:bg-gray-50 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default OBLogForm;