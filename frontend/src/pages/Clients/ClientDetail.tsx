import { useParams, useNavigate } from "react-router-dom";
import {
  useClient,
  useUpdateClient,
  useDeleteClient,
} from "@/hooks/useClients";
import ClientForm from "@/components/forms/ClientForm";
import { useState } from "react";
import type { Client } from "@/types";

const ClientDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  if (!id) return <div className="p-4">Client ID not found</div>;

  const { data: client, isLoading, error, refetch } = useClient(id);
  const { mutate: updateClient } = useUpdateClient();
  const { mutate: deleteClient } = useDeleteClient();

  const [editing, setEditing] = useState(false);

  const handleSubmit = (
  data: Partial<Client>, 
  deletedSiteIds: string[] = []
) => {
  if (!client) return;

  // Merge existing client with updated fields
  const updatedClient = { ...client, ...data };
  
  // Call your update mutation passing client data and deletedSiteIds
  updateClient(
    { 
      id: client.id!, 
      client: updatedClient, 
      deletedSiteIds 
    },
    {
      onSuccess: () => {
        refetch();
        setEditing(false);
      },
    }
  );
};


  const handleDelete = () => {
    if (!client) return;

    if (confirm("Are you sure you want to delete this client?")) {
      deleteClient(
        { id: client.id! },
        {
          onSuccess: () => navigate("/clients"),
        }
      );
    }
  };

  if (isLoading) return <div className="p-4">Loading client details...</div>;
  if (error)
    return <div className="p-4 text-red-600">{(error as Error).message}</div>;
  if (!client) return <div className="p-4">Client not found.</div>;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Client Details</h1>

      {editing ? (
        <ClientForm
          initialData={{ ...client }}
          onSubmit={handleSubmit}
          onClose={() => setEditing(false)}
        />
      ) : (
        <>
          <p>
            <strong>Name:</strong> {client.name}
          </p>
          <p>
            <strong>Surname:</strong> {client.surname}
          </p>
          <p>
            <strong>Email:</strong> {client.email ?? "—"}
          </p>
          <p>
            <strong>Phone:</strong> {client.phone ?? "—"}
          </p>
          <p>
            <strong>Sites:</strong>{" "}
            {Array.isArray(client.sites)
              ? client.sites.length > 0
                ? client.sites.map((site) => site.name).join(", ")
                : "No sites linked"
              : client.sites || "No sites linked"}
          </p>

          <div className="flex gap-4 mt-6">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={() => setEditing(true)}
            >
              Edit
            </button>

            <button
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              onClick={handleDelete}
            >
              Delete
            </button>

            <button
              className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
              onClick={() => navigate("/clients")}
            >
              Back to Clients
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ClientDetail;
