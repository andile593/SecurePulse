import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGuard, useUpdateGuard, useDeleteGuard } from "@/hooks/useGuards";
import GuardForm from "@/components/forms/GuardForm";

const GuardDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  if (!id) return <div className="p-4">Guard ID not found</div>;

  const { data: guard, isLoading, error, refetch } = useGuard(id);
  const { mutate: updateGuard } = useUpdateGuard();
  const { mutate: deleteGuard } = useDeleteGuard();

  const [editing, setEditing] = useState(false);

  const handleSubmit = (data: Partial<typeof guard>) => {
    if (!guard) return;

    const updatedGuard = { ...guard, ...data };
    updateGuard(
      { id: guard.id!, guard: updatedGuard },
      {
        onSuccess: () => {
          refetch();
          setEditing(false);
        },
      }
    );
  };

  const handleDelete = () => {
    if (!guard) return;

    if (confirm("Are you sure you want to delete this guard?")) {
      deleteGuard(
        { id: guard.id! },
        {
          onSuccess: () => navigate("/guards"),
        }
      );
    }
  };

  if (isLoading) return <div className="p-4">Loading guard details...</div>;
  if (error)
    return <div className="p-4 text-red-600">{(error as Error).message}</div>;
  if (!guard) return <div className="p-4">Guard not found.</div>;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Guard Details</h1>

      {editing ? (
        <GuardForm
          initialData={{ ...guard }}
          onSubmit={handleSubmit}
          onClose={() => setEditing(false)}
        />
      ) : (
        <>
          <p>
            <strong>Name:</strong> {guard.name}
          </p>
          <p>
            <strong>Assigned Vehicle:</strong>{" "}
            {guard.assignedVehicle
              ? `${guard.assignedVehicle.name} (${guard.assignedVehicle.plate})`
              : "—"}
          </p>
          <p>
            <strong>Status:</strong> {guard.status}
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
              onClick={() => navigate("/guards")}
            >
              Back to Guards
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default GuardDetail;
