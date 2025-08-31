import { useParams, useNavigate } from "react-router-dom";
import { useOBLog, useUpdateOBLog, useDeleteOBLog } from "@/hooks/useOBLogs";
import OBLogForm from "@/components/forms/OBLogForm";
import { useState } from "react";
import type { OBLog } from "@/types/OBLog";


const OBLogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  if (!id) return <div className="p-4">OB ID not found</div>;

  const { data: log, isLoading, error, refetch } = useOBLog(id);
  const { mutate: updateOBLog } = useUpdateOBLog();
  const { mutate: deleteOBLog } = useDeleteOBLog();


  const [editing, setEditing] = useState(false);

  const handleSubmit = (data: Partial<OBLog>) => {
    if (!log) return;

    const updatedOBLog = { ...log, ...data };
    updateOBLog(
      { id: log.id!, log: updatedOBLog },
      {
        onSuccess: () => {
          refetch();
          setEditing(false);
        },
      }
    );

  };

  const handleDelete = () => {
    if (!log) return;

    if (confirm("Are you sure you want to delete this log?")) {
      deleteOBLog(
        { id: log.id! },
        {
          onSuccess: () => navigate("/OBlogs"),
        }
      );
    }
  };

  if (isLoading) return <div className="p-4">Loading OB Log details...</div>;
  if (error) return <div className="p-4 text-red-600">{(error as Error).message}</div>;
  if (!log) return <div className="p-4">Log not found.</div>;

  

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold">OB Log Details</h1>
      {editing ? (
        <OBLogForm
          initialData={{ ...log }}
          onSubmit={handleSubmit}
          onClose={() => setEditing(false)}
        />
      ) : (
        <>
          <p>
            <strong>Log Time:</strong> {new Date(log.logTime).toLocaleString()}
          </p>
          <p className="capitalize">
            <strong>Notes:</strong> {log.notes ?? "—"}
          </p>
          <p>
            <strong>Log action:</strong> {log.actionLog ?? "—"}
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
              onClick={() => navigate("/OBlogs")}
            >
              Back to Logs
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default OBLogDetail;
