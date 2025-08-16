import { useParams, useNavigate } from "react-router-dom";
import { useAlarm, useUpdateAlarm, useDeleteAlarm } from "@/hooks/useAlarms";
import AlarmForm from "@/components/forms/AlarmForm";
import { useState } from "react";
import type { Alarm } from "@/types/alarm";

const AlarmDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  if (!id) return <div className="p-4">Alarm ID not found</div>;

  const { data: alarm, isLoading, error, refetch } = useAlarm(id);
  const { mutate: updateAlarm } = useUpdateAlarm();
  const { mutate: deleteAlarm } = useDeleteAlarm();

  const [editing, setEditing] = useState(false);

  const handleSubmit = (data: Partial<Alarm>) => {
    if (!alarm) return;

    const updatedAlarm = { ...alarm, ...data };
    updateAlarm(
      { id: alarm.id!, alarm: updatedAlarm },
      {
        onSuccess: () => {
          refetch();
          setEditing(false);
        },
      }
    );
  };

  const handleDelete = () => {
    if (!alarm) return;

    if (confirm("Are you sure you want to delete this alarm?")) {
      deleteAlarm(
        { id: alarm.id! },
        {
          onSuccess: () => navigate("/alarms"),
        }
      );
    }
  };

  if (isLoading) return <div className="p-4">Loading alarm details...</div>;
  if (error)
    return <div className="p-4 text-red-600">{(error as Error).message}</div>;
  if (!alarm) return <div className="p-4">Alarm not found.</div>;

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded shadow">
      <h1 className="text-2xl font-semibold mb-6">Alarm Details</h1>

      {editing ? (
        <AlarmForm
          initialData={{ ...alarm }}
          onSubmit={handleSubmit}
          onClose={() => setEditing(false)}
        />
      ) : (
        <>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-4">
            <div>
              <dt className="font-medium text-gray-700">Type</dt>
              <dd>{alarm.eventType}</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-700">Status</dt>
              <dd>{alarm.status}</dd>
            </div>

            <div>
              <dt className="font-medium text-gray-700">Priority</dt>
              <dd>{alarm.priority ?? "—"}</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-700">Triggered At</dt>
              <dd>{new Date(alarm.triggeredAt).toLocaleString()}</dd>
            </div>

            <div>
              <dt className="font-medium text-gray-700">Source</dt>
              <dd>{alarm.source || "—"}</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-700">Site</dt>
              <dd>{alarm.site?.name || alarm.siteId || "—"}</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-700">Client</dt>
              <dd>{alarm.clientId || "—"}</dd>
            </div>

            <div className="col-span-2">
              <dt className="font-medium text-gray-700">Resolution Notes</dt>
              <dd>{alarm.resolutionNotes || "None"}</dd>
            </div>

            <div>
              <dt className="font-medium text-gray-700">Resolved By</dt>
              <dd>{alarm.resolvedBy || "—"}</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-700">Resolved At</dt>
              <dd>
                {alarm.resolvedAt
                  ? new Date(alarm.resolvedAt).toLocaleString()
                  : "—"}
              </dd>
            </div>

            <div>
              <dt className="font-medium text-gray-700">Last AI Check</dt>
              <dd>
                {alarm.lastAICheckAt
                  ? new Date(alarm.lastAICheckAt).toLocaleString()
                  : "—"}
              </dd>
            </div>
            <div>
              <dt className="font-medium text-gray-700">AI Decision</dt>
              <dd>{alarm.aiDecision || "—"}</dd>
            </div>

            {/* You could add more info from aiCall or dispatch here if you want */}
          </dl>

          <div className="flex gap-4 mt-8 justify-end">
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
              onClick={() => navigate("/alarms")}
            >
              Back to Alarms
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AlarmDetail;
