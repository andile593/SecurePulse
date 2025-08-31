import { useState } from 'react';
import type { Dispatch } from '@/types';
import { useAlarms } from '@/hooks/useAlarms';
import { useVehicles } from '@/hooks/useVehicles';
import { useGuards } from '@/hooks/useGuards';
import { useSites } from "@/hooks/useSites";


type DispatchFormProps = {
  initialData?: Partial<Dispatch>;
  onSubmit: (data: Partial<Dispatch>) => void;
  onClose: () => void;
};

const DispatchForm = ({ initialData = {}, onSubmit, onClose }: DispatchFormProps) => {
  const [dispatchedAt, setDispatchedAt] = useState(initialData.dispatchedAt ?? '');
  const [arrivalTime, setArrivalTime] = useState(initialData.arrivalTime ?? '');
  const [resolvedAt, setResolvedAt] = useState(initialData.resolvedAt ?? '');
  const [responseNotes, setResponseNotes] = useState(initialData.responseNotes ?? '');
  const [alarmId, setAlarmId] = useState(initialData.alarmId ?? '');
  const [guardId, setGuardId] = useState(initialData.guardId ?? '');
  const [vehicleId, setVehicleId] = useState(initialData.vehicleId ?? '');

    const { data: alarms = [] } = useAlarms();
      const { data: sites = [] } = useSites();
    const { data: guards = [] } = useGuards();
    const { data: vehicles = [] } = useVehicles();



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      dispatchedAt,
      arrivalTime,
      resolvedAt,
      responseNotes,
      alarmId,
      guardId,
      vehicleId,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white shadow rounded max-w-md">
      <div>
        <label className="block text-sm font-medium mb-1">Dispatched At</label>
        <input
          type="datetime-local"
          className="w-full border p-2 rounded"
          value={dispatchedAt}
          onChange={(e) => setDispatchedAt(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Arrival Time</label>
        <input
          type="datetime-local"
          className="w-full border p-2 rounded"
          value={arrivalTime}
          onChange={(e) => setArrivalTime(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Resolved At</label>
        <input
          type="datetime-local"
          className="w-full border p-2 rounded"
          value={resolvedAt}
          onChange={(e) => setResolvedAt(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Response Notes</label>
        <textarea
          className="w-full border p-2 rounded"
          value={responseNotes}
          onChange={(e) => setResponseNotes(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Alarm</label>
        <select
          className="w-full border p-2 rounded"
          value={alarmId}
          onChange={(e) => setAlarmId(e.target.value)}
          required
        >
            <option value="">Select a Alarm</option>
          {alarms.map((alarm) => (
            <option key={alarm.id} value={alarm.id}>
              {alarm.eventType} {alarm.site?.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Guard ID</label>
        <input
          className="w-full border p-2 rounded"
          value={guardId}
          onChange={(e) => setGuardId(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Vehicle ID</label>
        <input
          className="w-full border p-2 rounded"
          value={vehicleId}
          onChange={(e) => setVehicleId(e.target.value)}
        />
      </div>

      <div className="flex gap-2">
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Save
        </button>
        <button type="button" onClick={onClose} className="text-gray-600 hover:underline px-4 py-2">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default DispatchForm;
