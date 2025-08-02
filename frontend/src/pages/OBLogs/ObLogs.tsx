import { useObLogs, useCreateObLog, useUpdateObLog } from '@/hooks/useObLogs';
import ObLogForm from '@/components/forms/ObLogForm';
import type { ObLog } from '@/types/obLog';
import { useState } from 'react';

const ObLogs = () => {
  const { data: obLogs = [], isLoading, error } = useObLogs();
  const { mutate: createObLog } = useCreateObLog();
  const { mutate: updateObLog } = useUpdateObLog();

  const [showForm, setShowForm] = useState(false);
  const [editingObLog, setEditingObLog] = useState<ObLog | null>(null);

  const handleCreate = () => {
    setEditingObLog(null);
    setShowForm(true);
  };

  const handleEdit = (obLog: ObLog) => {
    setEditingObLog(obLog);
    setShowForm(true);
  };

  const handleSubmit = (data: Partial<ObLog>) => {
    if (editingObLog?.id) {
      updateObLog({ id: editingObLog.id, obLog: data });
    } else {
      createObLog(data as ObLog);
    }
    setShowForm(false);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Observation Logs</h1>
        <button
          onClick={handleCreate}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          New Log
        </button>
      </div>

      {showForm && (
        <ObLogForm
          initialData={editingObLog ?? {}}
          onSubmit={handleSubmit}
          onClose={() => setShowForm(false)}
        />
      )}

      <ul className="space-y-4 mt-6">
        {obLogs.map((log: ObLog) => (
          <li key={log.id} className="bg-white shadow-md p-4 rounded-md">
            <p className="font-bold">{log.guardName}</p>
            <p className="text-sm text-gray-600">{log.message}</p>
            <p className="text-sm text-gray-500">Time: {log.timestamp}</p>
            <button
              className="text-blue-600 hover:underline mt-2"
              onClick={() => handleEdit(log)}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ObLogs;
