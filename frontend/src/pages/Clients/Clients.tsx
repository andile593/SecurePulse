import { useClients, useCreateClient, useUpdateClient } from '@/hooks/useClients';
import ClientForm from '@/components/forms/ClientForm';
import type { Client } from '@/types/client';
import { useState } from 'react';

const Clients = () => {
  const { data: clients = [], isLoading, error } = useClients();
  const { mutate: createClient } = useCreateClient();
  const { mutate: updateClient } = useUpdateClient();

  const [showForm, setShowForm] = useState(false);
  const [editingClient, setEditingClient] = useState<Client | null>(null);

  const handleCreate = () => {
    setEditingClient(null);
    setShowForm(true);
  };

  const handleEdit = (client: Client) => {
    setEditingClient(client);
    setShowForm(true);
  };

  const handleSubmit = (data: Partial<Client>) => {
    if (editingClient?.id) {
      updateClient({ id: editingClient.id, client: data });
    } else {
      createClient(data as Client);
    }
    setShowForm(false);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Clients</h1>
        <button
          onClick={handleCreate}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          New Client
        </button>
      </div>

      {showForm && (
        <ClientForm
          initialData={editingClient ?? {}}
          onSubmit={handleSubmit}
          onClose={() => setShowForm(false)}
        />
      )}

      <ul className="space-y-4 mt-6">
        {clients.map((client: Client) => (
          <li key={client.id} className="bg-white shadow-md p-4 rounded-md">
            <p className="font-bold">{client.name}</p>
            <p className="text-sm text-gray-600">{client.email}</p>
            <p className="text-sm text-gray-600">{client.phone}</p>
            <button
              className="text-blue-600 hover:underline mt-2"
              onClick={() => handleEdit(client)}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Clients;
