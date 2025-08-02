import { useAlarms, useCreateAlarm, useUpdateAlarm } from '@/hooks/useAlarms';
import AlarmForm from '@/components/forms/alarmForm';
import type { Alarm } from '@/types/alarm';
import { useState } from 'react';

const Alarms = () => {
  const { data: alarms = [], isLoading, error } = useAlarms();
  const { mutate: createAlarm } = useCreateAlarm();
  const { mutate: updateAlarm } = useUpdateAlarm();

  const [showForm, setShowForm] = useState(false);
  const [editingAlarm, setEditingAlarm] = useState<Alarm | null>(null);

  const handleCreate = () => {
    setEditingAlarm(null);
    setShowForm(true);
  };

  const handleEdit = (alarm: Alarm) => {
    setEditingAlarm(alarm);
    setShowForm(true);
  };

  const handleSubmit = (data: Partial<Alarm>) => {
    if (editingAlarm?.id) {
      updateAlarm({ id: editingAlarm.id, alarm: data });
    } else {
      createAlarm(data as Alarm);
    }
    setShowForm(false);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Alarms</h1>
        <button
          onClick={handleCreate}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          New Alarm
        </button>
      </div>

      {showForm && (
        <AlarmForm
          initialData={editingAlarm ?? {}}
          onSubmit={handleSubmit}
          onClose={() => setShowForm(false)}
        />
      )}

      <ul className="space-y-4 mt-6">
        {alarms.map((alarm: Alarm) => (
          <li key={alarm.id} className="bg-white shadow-md p-4 rounded-md">
            <p className="font-bold">{alarm.alarmType}</p>
            <p className="text-sm text-gray-600">{alarm.status}</p>
            <button
              className="text-blue-600 hover:underline mt-2"
              onClick={() => handleEdit(alarm)}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Alarms;
