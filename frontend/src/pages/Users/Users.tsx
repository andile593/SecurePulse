import { useUsers } from '@/hooks/useUsers';
import type { User } from '@/types/user';

const Users = () => {
  const { data: users, isLoading, error } = useUsers();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Users</h1>
      <ul className="space-y-4">
        {users?.map((user: User) => (
          <li key={user.id} className="bg-white shadow-md p-4 rounded-md">
            <p className="font-bold">{user.name}</p>
            <p className="text-sm text-gray-600">{user.email}</p>
            {/* <p className="text-sm text-gray-500">Roles: {user.roles.join(', ')}</p> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
