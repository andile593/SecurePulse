import { useState, useEffect } from 'react';
import type { Guard } from '@/types/guard';
import { useVehicles } from '@/hooks/useVehicles'; // <-- Assuming this hook exists

type GuardFormProps = {
  initialData?: Partial<Guard>;
  onSubmit: (data: Partial<Guard>) => void;
  onClose: () => void;
};

const GuardForm = ({ initialData = {}, onSubmit, onClose }: GuardFormProps) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [phone, setPhone] = useState('');
  const [assignedVehicleId, setAssignedVehicleId] = useState('');

  const { data: vehicles = [] } = useVehicles(); // Hook to fetch vehicles

  useEffect(() => {
    if (initialData) {
      setName(initialData.name ?? '');
      setStatus(initialData.status ?? '');
      setPhone(initialData.phone ?? '');
      setAssignedVehicleId(initialData.assignedVehicleId ?? '');
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, status, phone, assignedVehicleId });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded shadow-md max-w-md">
      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <input
          type="text"
          className="w-full border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Status</label>
        <input
          type="text"
          className="w-full border p-2 rounded"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Phone</label>
        <input
          type="tel"
          className="w-full border p-2 rounded"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Assigned Vehicle</label>
        <select
          className="w-full border p-2 rounded"
          value={assignedVehicleId}
          onChange={(e) => setAssignedVehicleId(e.target.value)}
        >
          <option value="">None</option>
          {vehicles.map((vehicle) => (
            <option key={vehicle.id} value={vehicle.id}>
              {vehicle.plate ?? vehicle.name ?? vehicle.id}
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-2">
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Save
        </button>
        <button type="button" onClick={onClose} className="text-gray-600 hover:underline px-4 py-2 rounded">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default GuardForm;
