import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Client } from "@/types";
import { getClients, deleteClient } from "@/lib/api/clients";

export default function ClientList() {
  const navigate = useNavigate();
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchClients = async () => {
    try {
      const response = await getClients();
      setClients(response.data);
    } catch {
      setError("Failed to load clients.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this client?")) return;
    try {
      await deleteClient({ id });
      setClients((prev) => prev.filter((c) => c.id !== id));
    } catch {
      alert("Delete failed.");
    }
  };

  if (loading) return <div className="p-4">Loading clients...</div>;
  if (error) return <div className="p-4 text-red-600">{error}</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Clients</h1>
        <button
          onClick={() => navigate("/clients/new")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + New Client
        </button>
      </div>

      {clients.length === 0 ? (
        <div className="p-4 text-gray-500">No clients found.</div>
      ) : (
        <ul className="space-y-4 mt-6">
          {clients.map((client) => (
            <li
              key={client.id}
              className="bg-white shadow-md p-4 rounded-md cursor-pointer hover:bg-gray-50"
              onClick={() => navigate(`/clients/${client.id}`)}
            >
              <p className="font-bold">{client.name}</p>
              <p className="text-sm text-gray-600">
                Email: {client.email || "—"}
              </p>
              <p className="text-sm text-gray-600">
                Phone: {client.phone || "—"}
              </p>

              <div className="flex gap-4 mt-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(client.id!);
                  }}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
