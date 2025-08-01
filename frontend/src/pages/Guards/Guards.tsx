import { useGuards, useCreateGuard, useUpdateGuard } from '@/hooks/useGuards';
import GuardForm from '@/components/forms/GuardForm';
import type { Guard } from '@/types/guard';
import { useState } from 'react';

const Guards = () => {
  const { data: guards = [], isLoading, error } = useGuards();
  const { mutate: createGuard } = useCreateGuard();
  const { mutate: updateGuard } = useUpdateGuard();

  const [showForm, setShowForm] = useState(false);
  const [editingGuard, setEditingGuard] = useState<Guard | null>(null);

  const handleCreate = () => {
    setEditingGuard(null);
    setShowForm(true);
  };

  const handleEdit = (guard: Guard) => {
    setEditingGuard(guard);
    setShowForm(true);
  };

  const handleSubmit = (data: Partial<Guard>) => {
    if (editingGuard?.id) {
      updateGuard({ id: editingGuard.id, guard: data });
    } else {
      createGuard(data as Guard);
    }
    setShowForm(false);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Guards</h1>
        <button
          onClick={handleCreate}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          New Guard
        </button>
      </div>

      {showForm && (
        <GuardForm
          initialData={editingGuard ?? {}}
          onSubmit={handleSubmit}
          onClose={() => setShowForm(false)}
        />
      )}

      <ul className="space-y-4 mt-6">
        {guards.map((guard: Guard) => (
          <li key={guard.id} className="bg-white shadow-md p-4 rounded-md">
            <p className="font-bold">{guard.name}</p>
            <p className="text-sm text-gray-600">Badge #: {guard.status}</p>
            <p className="text-sm text-gray-600">{guard.phone}</p>
            <button
              className="text-blue-600 hover:underline mt-2"
              onClick={() => handleEdit(guard)}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Guards;
