import { useObLogs } from '@/hooks/useOBLogs';
import type { ObLog } from '@/types/obLog';

const ObLogs = () => {
  const { data: logs, isLoading, error } = useObLogs();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Observation Logs</h1>
      <ul className="space-y-4">
        {logs?.map((log: ObLog) => (
          <li key={log.id} className="bg-white shadow-md p-4 rounded-md">
            <p className="font-bold">Guard: {log.guardId}</p>
            {/* <p className="text-sm text-gray-600">Site: {log.siteId}</p> */}
            <p className="text-sm text-gray-700">Log: {log.message}</p>
            <p className="text-sm text-gray-500">At: {new Date(log.logTime).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ObLogs;
