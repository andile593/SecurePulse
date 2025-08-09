import { useNavigate } from "react-router-dom";
import { useOBLogs, useDeleteOBLog } from "@/hooks/useOBLogs
import type { OBLog } from "@/types";

export default function OBLogList() {
  const { data: logs = [], isLoading, error } = useOBLogs();
  const { mutate: deleteOBLog } = useDeleteOBLog();
  
  const handleDelete = (id: string) => {
    if (!confirm("Are you sure you want to delete this log?")) return;
    deleteOBLog({ id });
  };

  if (loading) return <div className="p-4">Loading logs...</div>;
  if (error) return <div className="p-4 text-red-600">{error}</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">OB Logs</h1>
        <button
          onClick={() => navigate("/oblogs/new"}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + New Log
        </button>
      </div>

      {logs.length === 0 ? (
        <div>No logs found.</div>
      ) : (
        <table className="w-full border text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-2">Title</th>
              <th className="p-2">Content</th>
              <th className="p-2">Created By</th>
              <th className="p-2">Created At</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log: OBLog) => (
              <tr key={log.id} className="border-t" onClick={() => navigate(`/OBlogs/${log.id}`)}>
                <td className="p-2">{log.message}</td>
                <td className="p-2">{log.source}</td> 
                <td className="p-2">{log.guard?.name ?? "—"}</td>
                <td className="p-2">
                  {log.logTime ? new Date(log.logTime).toLocaleString() : "—"}
                </td>
                <td className="p-2 space-x-2">
                  <button
                    onClick={(e) => 
                    e.stopPropagation();
                    handleDelete(log.id)
                    }
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>!
      )}
    </div>
  );
}
