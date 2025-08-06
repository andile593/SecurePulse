import { useEffect, useState } from 'react';
import type { User } from '@/types/user';


type Role = {
  id: string;
  name: string;
};

type Props = {
  initialData?: Partial<User>;
  roles: Role[];
  onSubmit: (data: Partial<User>) => void;
  onClose: () => void;
};

const UserForm = ({ initialData = {}, roles, onSubmit, onClose }: Props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [roleId, setRoleId] = useState('');

  useEffect(() => {
    setName(initialData.name ?? '');
    setEmail(initialData.email ?? '');
    setRoleId(initialData.roleId ?? (roles.length > 0 ? roles[0].id : ''));
  }, [initialData, roles]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, email, roleId });
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

      <div>
        <label className="block text-sm font-medium mb-1">Role</label>
        <select
          className="w-full border p-2 rounded"
          value={roleId}
          onChange={(e) => setRoleId(e.target.value)}
          required
        >
          {roles.map(role => (
            <option key={role.id} value={role.id}>{role.name}</option>
          ))}
        </select>
      </div>

      <div className="flex gap-2">
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
        <button type="button" onClick={onClose} className="text-gray-600 hover:underline">Cancel</button>
      </div>
    </form>
  );
};

export default UserForm;
