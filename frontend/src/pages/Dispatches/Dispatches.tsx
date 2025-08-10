import { useNavigate } from "react-router-dom";
import { useDispatches, useDeleteDispatch } from "@/hooks/useDispatches";
import type { Dispatch } from "@/types";

export default function DispatchList() {
  const navigate = useNavigate();
  const { data: dispatches = [], isLoading, error } = useDispatches();
  const { mutate: deleteDispatch } = useDeleteDispatch();

  const handleDelete = (id: string) => {
    if (!confirm("Are you sure you want to delete this dispatch?")) return;
    deleteDispatch({ id });
  };

  if (isLoading) return <div className="p-4">Loading dispatches...</div>;
  if (error) return <div className="p-4 text-red-600">{(error as Error).message}</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Dispatches</h1>
        <button
          onClick={() => navigate("/dispatches/new")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + New Dispatch
        </button>
      </div>

      {dispatches.length === 0 ? (
        <div className="p-4 text-gray-500">No dispatches found.</div>
      ) : (
        <ul className="space-y-4 mt-6">
          {dispatches.map((dispatch: Dispatch) => (
            <li
              key={dispatch.id}
              className="bg-white shadow-md p-4 rounded-md cursor-pointer hover:bg-gray-50"
              onClick={() => navigate(`/dispatches/${dispatch.id}`)}
            >
              <p className="font-bold">
                Alarm: {dispatch.alarm?.description || "—"}
              </p>
              <p className="text-sm text-gray-600">
                Guard: {dispatch.guard?.name || "—"}
              </p>
              <p className="text-sm text-gray-600">
                Vehicle: {dispatch.vehicle?.plate || "—"}
              </p>
              <p className="text-sm text-gray-600">
                Dispatched At:{" "}
                {dispatch.dispatchedAt
                  ? new Date(dispatch.dispatchedAt).toLocaleString()
                  : "—"}
              </p>
              <p className="text-sm text-gray-600">
                Arrival Time:{" "}
                {dispatch.arrivalTime
                  ? new Date(dispatch.arrivalTime).toLocaleString()
                  : "—"}
              </p>
              <p className="text-sm text-gray-600">
                Resolved At:{" "}
                {dispatch.resolvedAt
                  ? new Date(dispatch.resolvedAt).toLocaleString()
                  : "—"}
              </p>
              {dispatch.responseNotes && (
                <p className="text-sm text-gray-600">
                  Notes: {dispatch.responseNotes}
                </p>
              )}

              <div className="flex gap-4 mt-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(dispatch.id!);
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
