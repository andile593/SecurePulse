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
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (initialData) {
      setName(initialData.name ?? '');
      setAddress(initialData.address ?? '');
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, address });
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
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea
          className="w-full border p-2 rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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
