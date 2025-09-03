import { useParams, useNavigate } from "react-router-dom";
import { useSite, useUpdateSite, useDeleteSite } from "@/hooks/useSites";
import { useState } from "react";
import SiteForm from "@/components/forms/SiteForm";
import type { Site, SiteCreateInput } from "@/types/site";
import { useClients } from "@/hooks/useClients";

const SiteDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  if (!id) return <div className="p-4">Site ID not found</div>;

  const { data: site, isLoading, error, refetch } = useSite(id);
  const { mutate: updateSite } = useUpdateSite();
  const { mutate: deleteSite } = useDeleteSite();
  const { data: clients = [] } = useClients();

  const [editing, setEditing] = useState(false);


  const handleSubmit = (data: SiteCreateInput) => {
    if (!site) return;


    const updatedSite: Site = {
      ...site,
      name: data.name,
      address: data.address,
      clientId: data.clientId,
      transmitters: data.transmitters?.map(t => ({
        ...t,
        siteId: site.id!, // attach siteId
      })),
    };

    updateSite(
      { id: site.id!, site: updatedSite },
      {
        onSuccess: () => {
          refetch();
          setEditing(false);
        },
      }
    );
  };

  const handleDelete = () => {
    if (!site) return;
    if (confirm("Are you sure you want to delete this site?")) {
      deleteSite(
        { id: site.id! },
        {
          onSuccess: () => navigate("/sites"),
        }
      );
    }
  };

  if (isLoading) return <div className="p-4">Loading site details...</div>;
  if (error) return <div className="p-4 text-red-600">{(error as Error).message}</div>;
  if (!site) return <div className="p-4">Site not found.</div>;

  const client = clients.find((c) => c.id === site.clientId);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold">Site Details</h1>
      {editing ? (
        <SiteForm
          initialData={{ ...site }}
          onSubmit={handleSubmit} // ✅ now matches SiteCreateInput
          onClose={() => setEditing(false)}
        />
      ) : (
        <>
          <p>
            <strong>Site Name:</strong> {site.name}
          </p>
          <p>
            <strong>Address:</strong> {site.address}
          </p>
          <p><strong>Transmitters:</strong></p>
          <ul className="list-disc ml-6">
            {site.transmitters?.map((t) => (
              <li key={t.id || t.referenceCode}>{t.referenceCode}</li>
            )) || <li>None</li>}
          </ul>


          <p>
            <strong>Client:</strong> {client?.name} {client?.surname}
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
              onClick={() => navigate("/sites")}
            >
              Back to Sites
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SiteDetail;
