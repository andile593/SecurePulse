import { useState, useEffect } from 'react';
import type { Alarm } from '@/types/alarm';

type AlarmFormProps = {
  initialData?: Partial<Alarm>;
  onSubmit: (data: Partial<Alarm>) => void;
  onClose: () => void;
};

const AlarmForm = ({ initialData = {}, onSubmit, onClose }: AlarmFormProps) => {
  const [alarmType, setAlarmType] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (initialData) {
      setAlarmType(initialData.alarmType ?? '');
      setStatus(initialData.status ?? '');
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ alarmType, status });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded shadow-md">
      <div>
        <label className="block text-sm font-medium">Alarm Type</label>
        <input
          className="w-full border p-2 rounded"
          value={alarmType}
          onChange={(e) => setAlarmType(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Status</label>
        <input
          className="w-full border p-2 rounded"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
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
