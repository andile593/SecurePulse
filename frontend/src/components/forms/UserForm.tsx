import { useEffect, useState } from 'react';
import type { User } from '@/types/user';

type Props = {
  initialData?: Partial<User>;
  onSubmit: (data: Partial<User>) => void;
  onClose: () => void;
};

const UserForm = ({ initialData = {}, onSubmit, onClose }: Props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    setName(initialData.name ?? '');
    setEmail(initialData.email ?? '');
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, email });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white shadow p-4 rounded max-w-md">
      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <input
          className="w-full border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          className="w-full border p-2 rounded"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="flex gap-2">
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
        <button type="button" onClick={onClose} className="text-gray-600 hover:underline">Cancel</button>
      </div>
    </form>
  );
};

export default UserForm;
