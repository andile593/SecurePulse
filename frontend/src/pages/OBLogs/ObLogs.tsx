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
        <h1 className="text-2xl font-semibold">OB Logs</h1>
        <button
          onClick={() => navigate("/oblogs/new")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + New Log
        </button>
      </div>

      {logs.length === 0 ? (
        <div className="p-4 text-gray-500">No logs found.</div>
      ) : (
        <ul className="space-y-4 mt-6">
          {logs.map((log: OBLog) => (
            <li
              key={log.id}
              className="bg-white shadow-md p-4 rounded-md cursor-pointer hover:bg-gray-50"
              onClick={() => navigate(`/oblogs/${log.id}`)}
            >
              <p className="font-bold">{log.message || "Untitled Log"}</p>
              <p className="text-sm text-gray-600">Source: {log.source || "—"}</p>
              <p className="text-sm text-gray-600">
                Created By: {log.guard?.name ?? "—"}
              </p>
              <p className="text-sm text-gray-600">
                Created At:{" "}
                {log.logTime
                  ? new Date(log.logTime).toLocaleString()
                  : "—"}
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
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
