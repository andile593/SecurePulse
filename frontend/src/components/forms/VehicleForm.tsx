import { useState, useEffect } from 'react';
import type { Vehicle } from '@/types/vehicle';

type VehicleFormProps = {
  initialData?: Partial<Vehicle>;
  onSubmit: (data: Partial<Vehicle>) => void;
  onClose: () => void;
};

const VehicleForm = ({ initialData = {}, onSubmit, onClose }: VehicleFormProps) => {
  const [model, setModel] = useState('');
  const [plateNumber, setPlateNumber] = useState('');

  useEffect(() => {
    if (initialData) {
      setModel(initialData.model ?? '');
      setPlateNumber(initialData.plateNumber ?? '');
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ model, plateNumber,  });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded shadow-md max-w-md">
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
        <label className="block text-sm font-medium mb-1">Plate Number</label>
        <input
          type="text"
          className="w-full border p-2 rounded"
          value={plateNumber}
          onChange={(e) => setPlateNumber(e.target.value)}
          required
        />
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

export default VehicleForm;
