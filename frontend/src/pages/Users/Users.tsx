import { useUsers, useCreateUser, useUpdateUser } from '@/hooks/useUsers';
import type { User } from '@/types/user';
import { useState } from 'react';
import UserForm from '@/components/forms/UserForm';

const Users = () => {
  const { data: users = [], isLoading, error } = useUsers();
  const { mutate: createUser } = useCreateUser();
  const { mutate: updateUser } = useUpdateUser();

  const [showForm, setShowForm] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const handleCreate = () => {
    setEditingUser(null);
    setShowForm(true);
  };

  const handleEdit = (user: User) => {
    setEditingUser(user);
    setShowForm(true);
  };

  const handleSubmit = (data: Partial<User>) => {
    if (editingUser?.id) {
      updateUser({ id: editingUser.id, user: data });
    } else {
      createUser(data as User);
    }
    setShowForm(false);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Users</h1>
        <button
          onClick={handleCreate}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          New User
        </button>
      </div>

      {showForm && (
        <UserForm
          initialData={editingUser ?? {}}
          onSubmit={handleSubmit}
          onClose={() => setShowForm(false)}
        />
      )}

      <ul className="space-y-4 mt-6">
        {users.map((user) => (
          <li key={user.id} className="bg-white shadow-md p-4 rounded-md">
            <p className="font-bold">{user.name}</p>
            <p className="text-sm text-gray-600">{user.email}</p>
            <button
              className="text-blue-600 hover:underline mt-2"
              onClick={() => handleEdit(user)}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
