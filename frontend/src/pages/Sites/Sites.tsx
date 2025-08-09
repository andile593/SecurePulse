import { useNavigate } from "react-router-dom";
import { useSites, useDeleteSite } from "@/hooks/useSites
import type { Site } from "@/types";


export default function SiteList() {
  const { data: sites = [], isLoading, error } = useSites();
  const { mutate: deleteSite } = useDeleteSite();

  const handleDelete = (id?: string) => {
    if (!id || !confirm("Are you sure you want to delete this site?"))
      return;
    deleteSite({ id });
  };

  if (loading) return <div className="p-4">Loading sites...</div>;
  if (error) return <div className="p-4 text-red-600">{error}</div>;

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
        <div>No sites found.</div>
      ) : (
        <table className="w-full border text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-2">Name</th>
              <th className="p-2">Client ID</th>
              <th className="p-2">Contact Person</th>
              <th className="p-2">Contact Phone</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sites.map((site: Site) => (
              <tr key={site.id} className="border-t" onClick={() => navigate(`/sites/${site.id}`)}>
                <td className="p-2">{site.name}</td>
                <td className="p-2">{site.clientId || "—"}</td>
                <td className="p_2">{site.address}</td>
                <td className="p-2 space-x-2">
                  <button
                    className="text-red-600 hover:underline"
                    onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(site.id)
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
