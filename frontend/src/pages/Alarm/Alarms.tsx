import { useAlarms } from '@/hooks/useAlarms';
import type { Alarm } from '@/types/alarm';

const Alarms = () => {
  const { data: alarms, isLoading, error } = useAlarms();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Alarms</h1>
      <ul className="space-y-4">
        {alarms?.map((alarm: Alarm) => (
          <li key={alarm.id} className="bg-white shadow-md p-4 rounded-md">
            <p className="font-bold">{alarm.alarmType}</p>
            <p className="text-sm text-gray-600">{alarm.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Alarms;
