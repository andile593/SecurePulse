import { useClients, useDeleteClient } from '@/hooks/useClients';
import type { Client } from '@/types/client';

const Clients = () => {
  const { data: clients = [], isLoading, error } = useClients();
  const { mutate: deleteClient } = useDeleteClient(); 

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Clients</h1>
      <table className="min-w-full bg-white shadow rounded">
        <thead>
          <tr className="bg-gray-100 text-left text-sm font-medium">
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Phone</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client: Client) => (
            <tr key={client.id} className="border-t text-sm">
              <td className="p-2">{client.name}</td>
              <td className="p-2">{client.email}</td>
              <td className="p-2">{client.phone}</td>
              <td className="p-2">
                <button
                  className="text-red-600 hover:underline"
                  onClick={() => deleteClient({ id: client.id! })} 
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Clients;
