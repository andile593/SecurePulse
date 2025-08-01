import { useDispatches } from '@/hooks/useDispatches';
import type { Dispatch } from '@/types/dispatch';

const Dispatches = () => {
  const { data: dispatches, isLoading, error } = useDispatches();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Dispatches</h1>
      <ul className="space-y-4">
        {dispatches?.map((d: Dispatch) => (
          <li key={d.id} className="bg-white shadow-md p-4 rounded-md">
            {/* <p className="font-bold">Location: {d.location}</p> */}
            <p className="text-sm text-gray-600">Guard ID: {d.guardId}</p>
            <p className="text-sm text-gray-500">Dispatched at: {new Date(d.dispatchedAt).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dispatches;
