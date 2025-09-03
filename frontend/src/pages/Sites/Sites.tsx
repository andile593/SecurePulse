import { useNavigate } from "react-router-dom";
import { useSites, useDeleteSite } from "@/hooks/useSites";
import type { Site } from "@/types";

const Sites = () => {
  const navigate = useNavigate();
  const { data: sites = [], isLoading, error } = useSites();
  const { mutate: deleteSite } = useDeleteSite();

  const handleDelete = (id: string) => {
    if (!confirm("Are you sure you want to delete this site?")) return;
    deleteSite({ id });
  };

  if (isLoading) return <div className="p-4">Loading sites...</div>;
  if (error) return <div className="p-4 text-red-600">{(error as Error).message}</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Sites</h1>
        <button
          onClick={() => navigate("/sites/new")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + New Site
        </button>
      </div>

      {sites.length === 0 ? (
        <div className="p-4 text-gray-500">No sites found.</div>
      ) : (
        <ul className="space-y-4 mt-6">
          {sites.map((site: Site) => (
            <li
              key={site.id}
              className="bg-white shadow-md p-4 rounded-md cursor-pointer hover:bg-gray-50"
              onClick={() => navigate(`/sites/${site.id}`)}
            >
              <p className="font-bold">{site.name}</p>
              <p className="text-sm text-gray-600">Client ID: {site.clientId || "—"}</p>
              <p className="text-sm text-gray-600">Address: {site.address || "—"}</p>
              <p className="text-sm text-gray-600 mt-1">
                Transmitters: {site.transmitters?.map(t => t.referenceCode).join(", ") || "—"}
              </p>


              <div className="flex gap-4 mt-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(site.id!);
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

export default Sites