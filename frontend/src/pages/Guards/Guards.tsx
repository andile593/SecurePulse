import { useGuards } from '@/hooks/useGuards';
import type { Guard } from '@/types/guard';

const Guards = () => {
  const { data: guards, isLoading, error } = useGuards();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Guards</h1>
      <ul className="space-y-4">
        {guards?.map((guard: Guard) => (
          <li key={guard.id} className="bg-white shadow-md p-4 rounded-md">
            <p className="font-bold">{guard.name}</p>
            <p className="text-sm text-gray-600">{guard.phone}</p>
            <p className="text-sm text-gray-500">Status: {guard.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Guards;
