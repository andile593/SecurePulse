import { useEffect, useState } from 'react';
import type { Dispatch } from '@/types/dispatch';

type DispatchFormProps = {
  initialData?: Partial<Dispatch>;
  onSubmit: (data: Partial<Dispatch>) => void;
  onClose: () => void;
};

const DispatchForm = ({ initialData = {}, onSubmit, onClose }: DispatchFormProps) => {
  const [responseNotes, setResponseNotes ] = useState('');
  const [dispatchedAt, setDispatchedAt] = useState('');
  const [guard, setGuard] = useState('');

  useEffect(() => {
    setResponseNotes(initialData.responseNotes ?? '');
    setDispatchedAt(initialData.dispatchedAt ?? '');
    setGuard(initialData.guard ?? '');
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ responseNotes, dispatchedAt, guard });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white shadow rounded max-w-md">
      <div>
        <label className="block text-sm font-medium mb-1">Unit</label>
        <input
          className="w-full border p-2 rounded"
          value={responseNotes}
          onChange={(e) => setResponseNotes(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Status</label>
        <input
          className="w-full border p-2 rounded"
          value={dispatchedAt}
          onChange={(e) => setDispatchedAt(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Assigned To</label>
        <input
          className="w-full border p-2 rounded"
          value={guard}
          onChange={(e) => setGuard(e.target.value)}
        />
      </div>

      <div className="flex gap-2">
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
        <button type="button" onClick={onClose} className="text-gray-600 hover:underline px-4 py-2">Cancel</button>
      </div>
    </form>
  );
};

export default DispatchForm;
