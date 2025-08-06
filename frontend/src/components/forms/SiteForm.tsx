import { useState, useEffect } from 'react';
import type { Site } from '@/types/site';

type SiteFormProps = {
  initialData?: Partial<Site>;
  onSubmit: (data: Partial<Site>) => void;
  onClose: () => void;
};

const SiteForm = ({ initialData = {}, onSubmit, onClose }: SiteFormProps) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    setName(initialData.name ?? '');
    setAddress(initialData.address ?? '');
    setLatitude(initialData.latitude?.toString() ?? '');
    setLongitude(initialData.longitude?.toString() ?? '');
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      name,
      address,
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white shadow-md rounded max-w-md">
      <div>
        <label className="block text-sm font-medium mb-1">Site Name</label>
        <input
          className="w-full border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Location</label>
        <input
          className="w-full border p-2 rounded"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Latitude</label>
        <input
          type="number"
          step="any"
          className="w-full border p-2 rounded"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Longitude</label>
        <input
          type="number"
          step="any"
          className="w-full border p-2 rounded"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
          required
        />
      </div>

      <div className="flex gap-2">
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
        <button type="button" className="text-gray-600 hover:underline px-4 py-2" onClick={onClose}>Cancel</button>
      </div>
    </form>
  );
};

export default SiteForm;
