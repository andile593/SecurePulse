import { useClients } from '@/hooks/useClients';
import type { Client } from '@/types/client'

const Clients = () => {
  const { data: clients, isLoading, error } = useClients();
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;
  
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Clients</h1>
      <ul className="space-y-4">
        {clients?.map((client: Client) => (
          <li key={client.id} className="bg-white shadow-md p-4 rounded-md">
            <p className="font-bold">{client.name}</p>
            <p className="text-sm text-gray-600">{client.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Clients
