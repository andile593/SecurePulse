import { useState, useEffect } from 'react';
import type { AiCall } from '@/types/aiCall';

type AiCallFormProps = {
  initialData?: Partial<AiCall>;
  onSubmit: (data: Partial<AiCall>) => void;
  onClose: () => void;
};

const AiCallForm = ({ initialData = {}, onSubmit, onClose }: AiCallFormProps) => {
  const [caller, setCaller] = useState('');
  const [topic, setTopic] = useState('');
  const [timestamp, setTimestamp] = useState('');

  useEffect(() => {
    setCaller(initialData.caller ?? '');
    setTopic(initialData.topic ?? '');
    setTimestamp(initialData.timestamp ?? '');
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ caller, topic, timestamp });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white shadow p-4 rounded max-w-md">
      <div>
        <label className="block text-sm font-medium mb-1">Caller</label>
        <input
          className="w-full border p-2 rounded"
          value={caller}
          onChange={(e) => setCaller(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Topic</label>
        <input
          className="w-full border p-2 rounded"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Timestamp</label>
        <input
          type="datetime-local"
          className="w-full border p-2 rounded"
          value={timestamp}
          onChange={(e) => setTimestamp(e.target.value)}
          required
        />
      </div>

      <div className="flex gap-2">
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
        <button type="button" onClick={onClose} className="text-gray-600 hover:underline">Cancel</button>
      </div>
    </form>
  );
};

export default AiCallForm;
