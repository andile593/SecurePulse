import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useUpdateDispatch, useDeleteDispatch } from "@/hooks/useDispatches";
import DispatchForm from "@/components/forms/DispatchForm";
import type { Dispatch } from "@/types/dispatch";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SecurityIcon from "@mui/icons-material/Security";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const DispatchDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  if (!id) return <div className="p-4">Dispatch ID not found</div>;

  const { data: dispatch, isLoading, error, refetch } = useDispatch(id);
  const { mutate: updateDispatch } = useUpdateDispatch();
  const { mutate: deleteDispatch } = useDeleteDispatch();
  const [editing, setEditing] = useState(false);

  const handleSubmit = (data: Partial<Dispatch>) => {
    if (!dispatch) return;
    updateDispatch(
      { id: dispatch.id!, dispatch: { ...dispatch, ...data } },
      { onSuccess: () => { refetch(); setEditing(false); } }
    );
  };

  const handleDelete = () => {
    if (!dispatch) return;
    if (confirm("Are you sure you want to delete this dispatch?")) {
      deleteDispatch(
        { id: dispatch.id! },
        { onSuccess: () => navigate("/dispatches") }
      );
    }
  };

  if (isLoading) return <div className="p-6">Loading dispatch details...</div>;
  if (error) return <div className="p-6 text-red-600">{(error as Error).message}</div>;
  if (!dispatch) return <div className="p-6">Dispatch not found.</div>;

  const isResolved = !!dispatch.resolvedAt;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Back */}
      <button
        onClick={() => navigate("/dispatches")}
        className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800 mb-5 transition"
      >
        <ArrowBackIcon fontSize="small" />
        Back to Dispatch Center
      </button>

      {editing ? (
        <DispatchForm
          initialData={{ ...dispatch }}
          onSubmit={handleSubmit}
          onClose={() => setEditing(false)}
        />
      ) : (
        <>
          {/* Header */}
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-semibold text-gray-900">
                Dispatch #{dispatch.shortId}
              </h1>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                isResolved
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}>
                {isResolved ? "Resolved" : "Active"}
              </span>
            </div>
            <p className="text-sm text-gray-500">
              {new Date(dispatch.dispatchedAt).toLocaleString("en-ZA")}
            </p>
          </div>
          <div className="w-full border-b border-gray-200 mb-6" />

          {/* Info grid */}
          <div className="grid grid-cols-2 gap-6 mb-6">

            {/* Left — dispatch info */}
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <div className="grid grid-cols-2 gap-y-4">
                <p className="text-sm text-gray-500">Dispatch ID</p>
                <p className="text-sm font-semibold text-gray-900">#{dispatch.shortId}</p>

                <p className="text-sm text-gray-500">Alarm</p>
                <p className="text-sm font-semibold text-gray-900">
                  {dispatch.alarm
                    ? `#${dispatch.alarm.shortId} — ${dispatch.alarm.eventType}`
                    : "—"}
                </p>

                <p className="text-sm text-gray-500">Dispatched At</p>
                <p className="text-sm font-semibold text-gray-900">
                  {new Date(dispatch.dispatchedAt).toLocaleString("en-ZA")}
                </p>

                <p className="text-sm text-gray-500">Arrival Time</p>
                <p className="text-sm font-semibold text-gray-900">
                  {dispatch.arrivalTime
                    ? new Date(dispatch.arrivalTime).toLocaleString("en-ZA")
                    : "—"}
                </p>

                <p className="text-sm text-gray-500">Resolved At</p>
                <p className="text-sm font-semibold text-gray-900">
                  {dispatch.resolvedAt
                    ? new Date(dispatch.resolvedAt).toLocaleString("en-ZA")
                    : "Pending"}
                </p>
              </div>
            </div>

            {/* Right — personnel */}
            <div className="bg-gray-900 rounded-xl p-6 text-white space-y-4">
              <h3 className="font-semibold text-white mb-2">Response Unit</h3>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                  <SecurityIcon fontSize="small" className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Guard</p>
                  <p className="text-sm font-semibold text-white">
                    {dispatch.guard?.name ?? "—"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                  <DirectionsCarIcon fontSize="small" className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Vehicle</p>
                  <p className="text-sm font-semibold text-white">
                    {dispatch.vehicle?.plate ?? "—"}{" "}
                    {dispatch.vehicle?.model ? `— ${dispatch.vehicle.model}` : ""}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                  {isResolved
                    ? <CheckCircleIcon fontSize="small" className="text-green-400" />
                    : <AccessTimeIcon fontSize="small" className="text-yellow-400" />
                  }
                </div>
                <div>
                  <p className="text-xs text-gray-400">Status</p>
                  <p className={`text-sm font-semibold ${isResolved ? "text-green-400" : "text-yellow-400"}`}>
                    {isResolved ? "Resolved" : "Active — En Route"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Response Notes */}
          {dispatch.responseNotes && (
            <div className="bg-white rounded-xl border border-gray-100 p-6 mb-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Response Notes</h3>
              <p className="text-sm text-gray-800 leading-relaxed">
                {dispatch.responseNotes}
              </p>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3 justify-end">
            <button
              className="bg-primary text-white px-5 py-2 rounded-lg hover:bg-blue-700 font-medium transition"
              onClick={() => setEditing(true)}
            >
              Edit
            </button>
            <button
              className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 font-medium transition"
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

export default DispatchDetail;