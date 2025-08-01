import { useSites } from '@/hooks/useSites';
import type { Site } from '@/types/site';

const Sites = () => {
  const { data: sites, isLoading, error } = useSites();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Sites</h1>
      <ul className="space-y-4">
        {sites?.map((site: Site) => (
          <li key={site.id} className="bg-white shadow-md p-4 rounded-md">
            <p className="font-bold">{site.name}</p>
            <p className="text-sm text-gray-600">{site.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sites;
