import { useDispatches, useCreateDispatch, useUpdateDispatch } from '@/hooks/useDispatches';
import DispatchForm from '@/components/forms/DispatchForm';
import type { Dispatch } from '@/types/dispatch';
import { useState } from 'react';

const Dispatches = () => {
  const { data: dispatches = [], isLoading, error } = useDispatches();
  const { mutate: createDispatch } = useCreateDispatch();
  const { mutate: updateDispatch } = useUpdateDispatch();

  const [showForm, setShowForm] = useState(false);
  const [editingDispatch, setEditingDispatch] = useState<Dispatch | null>(null);

  const handleCreate = () => {
    setEditingDispatch(null);
    setShowForm(true);
  };

  const handleEdit = (dispatch: Dispatch) => {
    setEditingDispatch(dispatch);
    setShowForm(true);
  };

  const handleSubmit = (data: Partial<Dispatch>) => {
    if (editingDispatch?.id) {
      updateDispatch({ id: editingDispatch.id, dispatch: data });
    } else {
      createDispatch(data as Dispatch);
    }
    setShowForm(false);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Dispatches</h1>
        <button
          onClick={handleCreate}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          New Dispatch
        </button>
      </div>

      {showForm && (
        <DispatchForm
          initialData={editingDispatch ?? {}}
          onSubmit={handleSubmit}
          onClose={() => setShowForm(false)}
        />
      )}

      <ul className="space-y-4 mt-6">
        {dispatches.map((dispatch: Dispatch) => (
          <li key={dispatch.id} className="bg-white shadow-md p-4 rounded-md">
            <p className="font-bold">{dispatch.guardName}</p>
            <p className="text-sm text-gray-600">Site: {dispatch.site}</p>
            <p className="text-sm text-gray-500">Time: {dispatch.time}</p>
            <button
              className="text-blue-600 hover:underline mt-2"
              onClick={() => handleEdit(dispatch)}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dispatches;
