import { useParams, useNavigate } from "react-router-dom";
import { useAlarm, useUpdateAlarm, useDeleteAlarm } from "@/hooks/useAlarms";
import { useSites } from "@/hooks/useSites";
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
  const { data: sites = [] } = useSites();

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

  const site = sites.find((s) => s.id === alarm.siteId);

  return (
    <div className="p-6 h-fit">
      <h1 className="text-2xl font-semibold mb-6">Alarm Details</h1>

      {editing ? (
        <AlarmForm
          initialData={{ ...alarm }}
          onSubmit={handleSubmit}
          onClose={() => setEditing(false)}
        />
      ) : (
        <>
          <div className="grid grid-cols-4 gap-4">
            <div className="grid grid-cols-2 col-start-1 col-end-3 gap-2">
              <p className="text-base">Alarm ID</p>
              <p className="text-base font-medium">#{alarm.shortId}</p>

              <p className="text-base">Type</p>
              <p className="text-base font-medium">{alarm.eventType}</p>

              <p className="text-base">Site Number</p>
              <p className="text-base ffont-medium">{site?.shortId ?? "N/A"}</p>

              <p className="text-base">Site Name</p>
              <p className="text-base font-medium">{site?.name ?? "Unknown"}</p>

              <p className="text-base">Site Address</p>
              <p className="text-base font-medium">{site?.address ?? "N/A"}</p>

              <p className="text-base">Time & date</p>
              <p className="text-base font-medium">
                {new Date(alarm.triggeredAt).toLocaleString()}
              </p>

              <p className="text-base">Response Code Check</p>
              <p className="text-base font-medium">
                {alarm.resolutionNotes ?? "N/A"}
              </p>
            </div>
            <div className="col-start-3 col-end-5 gap-2">
              <h3 className="text-lg">Decision log</h3>
              <div className="p-4 bg-primary rounded-xl text-base leading-7 text-light_gray">
                The client was reached within 1 ring. The cancellation code was
                valid and matched the system. No signs of duress or distress
                detected in tone. Alarm was cancelled based on standard
                auto-handling protocol for intrusion alarm.
              </div>
            </div>
            <div className="col-start-1 col-end-5"></div>
          </div>

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
