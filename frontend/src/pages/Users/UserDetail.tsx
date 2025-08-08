import { useParams, useNavigate } from "react-router-dom";
import { useUser, useUpdateUser, useDeleteUser } from "@/hooks/useUsers";
import { useRoles } from "@/hooks/useRoles";
import UserForm from "@/components/forms/UserForm";
import { useState } from "react";

const UserDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  if (!id) return <div className="p-4">User ID not found</div>;

  // Fetch user and roles
  const { data: user, isLoading, error, refetch } = useUser(id);
  const {
    data: roles,
    isLoading: rolesLoading,
    error: rolesError,
  } = useRoles();

  // Mutations
  const { mutate: updateUser } = useUpdateUser();
  const { mutate: deleteUser } = useDeleteUser();

  const [editing, setEditing] = useState(false);

  const handleSubmit = (data: Partial<typeof user>) => {
    if (!user) return;

    const updatedUser = { ...user, ...data };
    updateUser(
      { id: user.id!, user: updatedUser },
      {
        onSuccess: () => {
          refetch();
          setEditing(false);
        },
      }
    );
  };

  const handleDelete = () => {
    if (!user) return;

    if (confirm("Are you sure you want to delete this user?")) {
      deleteUser(
        { id: user.id! },
        {
          onSuccess: () => navigate("/users"),
        }
      );
    }
  };

  if (isLoading || rolesLoading)
    return <div className="p-4">Loading user details...</div>;

  if (error)
    return <div className="p-4 text-red-600">{(error as Error).message}</div>;

  if (rolesError)
    return (
      <div className="p-4 text-red-600">{(rolesError as Error).message}</div>
    );

  if (!user || !roles)
    return <div className="p-4">User or roles not found.</div>;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">User Details</h1>

      {editing ? (
        <UserForm
          initialData={{
            ...user,
            roleId: user.role?.id ?? "",
          }}
          onSubmit={handleSubmit}
          onClose={() => setEditing(false)}
          roles={roles || []}
        />
      ) : (
        <>
          <p>
            <strong>Username:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Role:</strong> {user.role?.name ?? "—"}
          </p>
          <p>
            <strong>Created At:</strong>{" "}
            {user.createdAt
              ? new Date(user.createdAt).toLocaleDateString()
              : "—"}
          </p>

          <div className="flex gap-4 mt-6">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={() => setEditing(true)}
            >
              Edit
            </button>

            <button
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              onClick={handleDelete}
            >
              Delete
            </button>

            <button
              className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
              onClick={() => navigate("/users")}
            >
              Back to Users
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default UserDetail;
