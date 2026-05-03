import { useParams, useNavigate } from "react-router-dom";
import { useOBLog, useUpdateOBLog, useDeleteOBLog } from "@/hooks/useOBLogs";
import OBLogForm from "@/components/forms/OBLogForm";
import { useState } from "react";
import type { OBLog } from "@/types/OBLog";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ACTION_COLORS: Record<string, string> = {
  DISPATCH: 'bg-orange-100 text-orange-700',
  RESOLVED: 'bg-green-100 text-green-700',
  ALARM: 'bg-red-100 text-red-700',
  GUARD_PATROL: 'bg-blue-100 text-blue-700',
  CHECK_IN: 'bg-purple-100 text-purple-700',
  INCIDENT: 'bg-yellow-100 text-yellow-700',
  SYSTEM: 'bg-gray-100 text-gray-700',
};

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
    updateOBLog(
      { id: log.id!, log: { ...log, ...data } },
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
        { onSuccess: () => navigate("/OBlogs") }
      );
    }
  };

  if (isLoading) return <div className="p-6">Loading log details...</div>;
  if (error) return <div className="p-6 text-red-600">{(error as Error).message}</div>;
  if (!log) return <div className="p-6">Log not found.</div>;

  const actionColor = ACTION_COLORS[log.actionLog] ?? 'bg-gray-100 text-gray-700';

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Back link */}
      <button
        onClick={() => navigate("/OBlogs")}
        className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800 mb-6 transition"
      >
        <ArrowBackIcon fontSize="small" />
        Back to Occurrence Feed
      </button>

      {editing ? (
        <OBLogForm
          initialData={{ ...log }}
          onSubmit={handleSubmit}
          onClose={() => setEditing(false)}
        />
      ) : (
        <>
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-semibold text-gray-900">
                OB Log #{log.shortId}
              </h1>
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${actionColor}`}>
                {log.actionLog?.replace('_', ' ')}
              </span>
            </div>
            <p className="text-sm text-gray-500">
              {new Date(log.logTime).toLocaleString('en-ZA')}
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-6 space-y-4 mb-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Site</p>
                <p className="font-medium text-gray-900">{log.site?.name ?? '—'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Guard</p>
                <p className="font-medium text-gray-900">{log.guard?.name ?? '—'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Action</p>
                <p className="font-medium text-gray-900">{log.actionLog}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Log Time</p>
                <p className="font-medium text-gray-900">
                  {new Date(log.logTime).toLocaleString('en-ZA')}
                </p>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">Notes</p>
              <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-800 leading-relaxed">
                {log.notes || '—'}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 justify-end">
            <button
              className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              onClick={() => setEditing(true)}
            >
              Edit
            </button>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default OBLogDetail;