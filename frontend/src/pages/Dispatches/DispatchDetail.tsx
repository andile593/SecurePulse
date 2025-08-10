import  { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useUpdateDispatch, useDeleteDispatch } from "@/hooks/useDispatches";
import DispatchForm from "@/components/forms/DispatchForm";

const DispatchDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  if (!id) return <div className="p-4">Dispatch ID not found</div>;

  const { data: dispatch, isLoading, error, refetch } = useDispatch(id);
  const { mutate: updateDispatch } = useUpdateDispatch();
  const { mutate: deleteDispatch } = useDeleteDispatch();

  const [editing, setEditing] = useState(false);

  const handleSubmit = (data: Partial<typeof dispatch>) => {
    if (!dispatch) return;

    const updatedDispatch = { ...dispatch, ...data };
    updateDispatch(
      { id: dispatch.id!, dispatch: updatedDispatch },
      {
        onSuccess: () => {
          refetch();
          setEditing(false);
        },
      }
    );
  };

  const handleDelete = () => {
    if (!dispatch) return;

    if (confirm("Are you sure you want to delete this dispatch?")) {
      deleteDispatch(
        { id: dispatch.id! },
        {
          onSuccess: () => navigate("/dispatches"),
        }
      );
    }
  };

  if (isLoading) return <div className="p-4">Loading dispatch details...</div>;
  if (error) return <div className="p-4 text-red-600">{(error as Error).message}</div>;
  if (!dispatch) return <div className="p-4">Dispatch not found.</div>;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Dispatch Details</h1>

      {editing ? (
        <DispatchForm
          initialData={{ ...dispatch }}
          onSubmit={handleSubmit}
          onClose={() => setEditing(false)}
        />
      ) : (
        <><>
  <p><strong>Dispatch ID:</strong> {dispatch.id}</p>
  <p><strong>Dispatched At:</strong> {new Date(dispatch.dispatchedAt).toLocaleString()}</p>
  <p><strong>Arrival Time:</strong> {dispatch.arrivalTime ? new Date(dispatch.arrivalTime).toLocaleString() : "—"}</p>
  <p><strong>Resolved At:</strong> {dispatch.resolvedAt ? new Date(dispatch.resolvedAt).toLocaleString() : "—"}</p>
  <p><strong>Response Notes:</strong> {dispatch.responseNotes ?? "—"}</p>
  <p><strong>Guard:</strong> {dispatch.guard ? dispatch.guard.name : "—"}</p>
  <p><strong>Vehicle:</strong> {dispatch.vehicle ? dispatch.vehicle.name : "—"}</p>
</>


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
              onClick={() => navigate("/dispatches")}
            >
              Back to Dispatches
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default DispatchDetail;
