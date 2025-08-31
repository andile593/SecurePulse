import { useNavigate } from "react-router-dom";
import { useOBLogs, useDeleteOBLog } from "@/hooks/useOBLogs";
import type { OBLog } from "@/types";

export default function OBLogList() {
  const navigate = useNavigate();
  const { data: logs = [], isLoading, error } = useOBLogs();
  const { mutate: deleteOBLog } = useDeleteOBLog();

  const handleDelete = (id: string) => {
    if (!confirm("Are you sure you want to delete this log?")) return;
    deleteOBLog({ id });
  };

  if (isLoading) return <div className="p-4">Loading logs...</div>;
  if (error) return <div className="p-4 text-red-600">{(error as Error).message}</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Occurrence Feed</h1>
        <button
          onClick={() => navigate("/OBlogs/new")}
          className="bg-primary text-white px-4 py-2 rounded "
        >
          + New Log
        </button>
      </div>

      {logs.length === 0 ? (
        <div className="p-4 text-gray-500">No logs found.</div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {logs.map((log: OBLog) => (
            <div
              key={log.id}
              className="bg-white shadow-md p-4 rounded-md cursor-pointer hover:bg-gray-50"
              onClick={() => navigate(`/OBlogs/${log.id}`)}
            >
              <div className="flex items-center justify-between mb-2 text-sm text-gray-500">
                <span>{new Date(log.logTime).toLocaleString() || "—"}</span>
                <span>{log.guard?.name || "Alarm"}</span>
              </div>

              <p className="font-bold mb-1 capitalize">{log.notes || "Untitled Log"}</p>
              <p className="text-sm text-gray-600 mb-1">
                Site: {log.site?.name || "—"}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                Action: {log.actionLog || "—"}
              </p>

              <div className="flex gap-4 mt-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(log.id!);
                  }}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

