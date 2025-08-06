import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { ObLog } from "@/types";
import { getObLogs, deleteObLog } from "@/lib/api/obLogs";

export default function ObLogList() {
  const [logs, setLogs] = useState<ObLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchLogs = async () => {
    try {
      const response = await getObLogs();
      setLogs(response.data);
    } catch {
      setError("Failed to fetch OB logs.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this log?")) return;
    try {
      await deleteObLog({ id });
      setLogs((prev) => prev.filter((log) => log.id !== id));
    } catch {
      alert("Failed to delete log.");
    }
  };

  if (loading) return <div className="p-4">Loading logs...</div>;
  if (error) return <div className="p-4 text-red-600">{error}</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">OB Logs</h1>
        <Link
          to="/oblogs/new"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + New Log
        </Link>
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
            {logs.map((log) => (
              <tr key={log.id} className="border-t">
                <td className="p-2">{log.message}</td> // ✅ from Prisma
                <td className="p-2">{log.source}</td> // ✅ from Prisma
                <td className="p-2">{log.guard?.name ?? "—"}</td> // optional,
                if guard exists
                <td className="p-2">
                  {log.logTime ? new Date(log.logTime).toLocaleString() : "—"}
                </td>
                <td className="p-2 space-x-2">
                  <Link
                    to={`/oblogs/${log.id}/edit`}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(log.id!)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
