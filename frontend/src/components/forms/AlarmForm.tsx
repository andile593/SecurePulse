import { useState, useEffect } from 'react';
import type { Alarm } from '@/types/alarm';

type AlarmFormProps = {
  initialData?: Partial<Alarm>;
  onSubmit: (data: Partial<Alarm>) => void;
  onClose: () => void;
};

const AlarmForm = ({ initialData = {}, onSubmit, onClose }: AlarmFormProps) => {
  const [alarmType, setAlarmType] = useState(initialData.alarmType ?? '');
  const [status, setStatus] = useState(initialData.status ?? '');
  const [triggeredAt, setTriggeredAt] = useState(initialData.triggeredAt?.slice(0, 16) ?? '');
  const [priority, setPriority] = useState(initialData.priority ?? 1);
  const [siteId, setSiteId] = useState(initialData.siteId ?? '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      alarmType,
      status,
      triggeredAt,
      priority,
      siteId,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded shadow-md">
      <div>
        <label className="block text-sm font-medium">Alarm Type</label>
        <input
          className="w-full border p-2 rounded"
          value={alarmType}
          onChange={(e) => setAlarmType(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Status</label>
        <input
          className="w-full border p-2 rounded"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Triggered At</label>
        <input
          type="datetime-local"
          className="w-full border p-2 rounded"
          value={triggeredAt}
          onChange={(e) => setTriggeredAt(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Priority</label>
        <input
          type="number"
          min="1"
          max="5"
          className="w-full border p-2 rounded"
          value={priority}
          onChange={(e) => setPriority(parseInt(e.target.value))}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Site ID</label>
        <input
          className="w-full border p-2 rounded"
          value={siteId}
          onChange={(e) => setSiteId(e.target.value)}
          required
        />
      </div>

      <div className="flex gap-2">
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Save
        </button>
        <button type="button" onClick={onClose} className="text-gray-600 hover:underline">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AlarmForm;
