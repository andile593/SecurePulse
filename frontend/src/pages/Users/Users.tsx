import { useUsers, useDeleteUser } from "@/hooks/useUsers";
import type { User } from "@/types/user";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();
  const { data: users = [], isLoading, error } = useUsers();
  const { mutate: deleteUser } = useDeleteUser();

  const handleDelete = (id?: string) => {
    if (!id || !confirm("Are you sure you want to delete this user?")) return;
    deleteUser({ id });
  };

  if (isLoading) return <div className="p-4">Loading users...</div>;
  if (error)
    return <div className="p-4 text-red-600">{(error as Error).message}</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Users</h1>
        <button
          onClick={() => navigate("/users/new")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + New User
        </button>
      </div>

      <ul className="space-y-4 mt-6">
        {users.map((user: User) => (
          <li
            key={user.id}
            className="bg-white shadow-md p-4 rounded-md cursor-pointer hover:bg-gray-50"
            onClick={() => navigate(`/users/${user.id}`)}
          >
            <p className="font-bold">{user.name}</p>
            <p className="text-sm text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-600 capitalize">
              {user.role?.name ?? "—"}
            </p>
            <p className="text-sm text-gray-600">
              Created:{" "}
              {user.createdAt
                ? new Date(user.createdAt).toLocaleDateString()
                : "—"}
            </p>
            <div className="flex gap-4 mt-2">
              <button
                onClick={(e) => {
                  e.stopPropagation(); // prevent triggering the li click
                  handleDelete(user.id);
                }}
                className="text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
