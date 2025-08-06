import { useState, useEffect } from 'react';
import type { Vehicle } from '@/types/vehicle';

type VehicleFormProps = {
  initialData: Partial<Vehicle>;
  onSubmit: (data: Partial<Vehicle>) => void;
  onClose: () => void;
};

const VehicleForm = ({ initialData = {}, onSubmit, onClose }: VehicleFormProps) => {
  const [name, setName] = useState('');
  const [model, setModel] = useState('');
  const [plate, setPlate] = useState('');
  const [status, setStatus] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (initialData) {
      setName(initialData.name ?? '');
      setModel(initialData.model ?? '');
      setPlate(initialData.plate ?? '');
      setStatus(initialData.status ?? '');
      setDescription(initialData.description ?? '');
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, model, plate, status, description });
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
        <label className="block text-sm font-medium mb-1">Model</label>
        <input
          type="text"
          className="w-full border p-2 rounded"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Plate</label>
        <input
          type="text"
          className="w-full border p-2 rounded"
          value={plate}
          onChange={(e) => setPlate(e.target.value)}
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
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea
          className="w-full border p-2 rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="flex gap-2">
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
        <button type="button" onClick={onClose} className="text-gray-600 hover:underline px-4 py-2 rounded">Cancel</button>
      </div>
    </form>
  );
};

export default VehicleForm;

