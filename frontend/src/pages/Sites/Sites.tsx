import { useSites, useCreateSite, useUpdateSite } from '@/hooks/useSites';
import SiteForm from '@/components/forms/SiteForm';
import type { Site } from '@/types/site';
import { useState } from 'react';

const Sites = () => {
  const { data: sites = [], isLoading, error } = useSites();
  const { mutate: createSite } = useCreateSite();
  const { mutate: updateSite } = useUpdateSite();

  const [showForm, setShowForm] = useState(false);
  const [editingSite, setEditingSite] = useState<Site | null>(null);

  const handleCreate = () => {
    setEditingSite(null);
    setShowForm(true);
  };

  const handleEdit = (site: Site) => {
    setEditingSite(site);
    setShowForm(true);
  };

  const handleSubmit = (data: Partial<Site>) => {
    if (editingSite?.id) {
      updateSite({ id: editingSite.id, site: data });
    } else {
      createSite(data as Site);
    }
    setShowForm(false);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Sites</h1>
        <button
          onClick={handleCreate}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          New Site
        </button>
      </div>

      {showForm && (
        <SiteForm
          initialData={editingSite ?? {}}
          onSubmit={handleSubmit}
          onClose={() => setShowForm(false)}
        />
      )}

      <ul className="space-y-4 mt-6">
        {sites.map((site: Site) => (
          <li key={site.id} className="bg-white shadow-md p-4 rounded-md">
            <p className="font-bold">{site.name}</p>
            <p className="text-sm text-gray-600">{site.address}</p>
            {/* {site.description && (
              <p className="text-sm text-gray-500">{site.description}</p>
            )} */}
            <button
              className="text-blue-600 hover:underline mt-2"
              onClick={() => handleEdit(site)}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sites;
