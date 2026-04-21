import { useParams, useNavigate } from "react-router-dom";
import { useAlarm, useUpdateAlarm, useDeleteAlarm, useUpdateAlarmStatus } from "@/hooks/useAlarms";
import { useCreateOBLog } from "@/hooks/useOBLogs";
import { useSites } from "@/hooks/useSites";
import { useClients } from "@/hooks/useClients";
import AlarmForm from "@/components/forms/AlarmForm";
import { useState } from "react";
import type { Alarm } from "@/types/alarm";
import CallIcon from '@mui/icons-material/Call';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const STATUS_COLORS: Record<string, string> = {
  active: 'bg-red-100 text-red-700',
  dispatched: 'bg-yellow-100 text-yellow-700',
  resolved: 'bg-green-100 text-green-700',
};

const AlarmDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  if (!id) return <div className="p-4">Alarm ID not found</div>;

  const { data: alarm, isLoading, error, refetch } = useAlarm(id);
  const { mutate: updateAlarm } = useUpdateAlarm();
  const { mutate: deleteAlarm } = useDeleteAlarm();
  const { mutate: updateAlarmStatus } = useUpdateAlarmStatus();
  const { mutate: createOBLog } = useCreateOBLog();
  const { data: sites = [] } = useSites();
  const { data: clients = [] } = useClients();

  const [editing, setEditing] = useState(false);
  const [dispatching, setDispatching] = useState(false);
  const [resolving, setResolving] = useState(false);

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
        { onSuccess: () => navigate("/alarms") }
      );
    }
  };

  const handleDispatch = () => {
    if (!alarm) return;
    if (!confirm("Dispatch a response unit to this alarm?")) return;

    setDispatching(true);
    updateAlarmStatus(
      { id: alarm.id!, status: 'dispatched' },
      {
        onSuccess: () => {
          createOBLog(
            {
              logTime: new Date().toISOString(),
              actionLog: 'DISPATCH',
              notes: `Response unit dispatched for alarm #${alarm.shortId} — ${alarm.eventType} at ${alarm.transmitter?.site?.name ?? 'Unknown Site'}`,
              siteId: alarm.transmitter?.siteId ?? undefined,
            },
            {
              onSuccess: () => {
                refetch();
                setDispatching(false);
              },
              onError: () => setDispatching(false),
            }
          );
        },
        onError: () => setDispatching(false),
      }
    );
  };
  
  const handleResolve = () => {
    if (!alarm) return;
    if (!confirm("Mark this alarm as resolved and close the incident?")) return;

    setResolving(true);
    updateAlarmStatus(
      { id: alarm.id!, status: 'resolved' },
      {
        onSuccess: () => {
          createOBLog(
            {
              logTime: new Date().toISOString(),
              actionLog: 'RESOLVED',
              notes: `Incident closed for alarm #${alarm.shortId} — ${alarm.eventType} at ${alarm.transmitter?.site?.name ?? 'Unknown Site'}. Alarm resolved and archived.`,
              siteId: alarm.transmitter?.siteId ?? undefined,
            },
            {
              onSuccess: () => {
                refetch();
                setResolving(false);
              },
              onError: () => setResolving(false),
            }
          );
        },
        onError: () => setResolving(false),
      }
    );
  };

  if (isLoading) return <div className="p-4">Loading alarm details...</div>;
  if (error) return <div className="p-4 text-red-600">{(error as Error).message}</div>;
  if (!alarm) return <div className="p-4">Alarm not found.</div>;

  const transmitter = sites
    .flatMap((site) => site.transmitters?.map(t => ({ ...t, site })) ?? [])
    .find((t) => t.id === alarm.transmitterId);

  const site = transmitter?.site;
  const client = clients.find((c) => c.id === site?.clientId);
  const currentStatus = alarm.status ?? 'active';
  const isActive = currentStatus === 'active';
  const isDispatched = currentStatus === 'dispatched';
  const isResolved = currentStatus === 'resolved';

  return (
    <div className="p-6 h-fit">
      {editing ? (
        <AlarmForm
          initialData={{ ...alarm }}
          onSubmit={handleSubmit}
          onClose={() => setEditing(false)}
        />
      ) : (
        <>
          <div className="flex justify-between items-center w-full flex-wrap">
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-3xl font-semibold">
                Event - {alarm.transmitter?.site?.name}
              </h2>
              <span className={`px-3 py-1 rounded-full text-sm font-semibold capitalize ${STATUS_COLORS[currentStatus] ?? 'bg-gray-100 text-gray-700'}`}>
                {currentStatus}
              </span>
            </div>
            <p className="text-base pr-45">Source Code: {alarm.transmitter?.referenceCode}</p>
            <div className="w-full bg-gray h-px mb-4"></div>
          </div>

          <div className="grid grid-cols-4 gap-5">
            <div className="grid grid-cols-2 col-start-1 col-end-3 gap-2">
              <p className="text-base">Alarm ID</p>
              <p className="text-base font-medium">#{alarm.shortId}</p>

              <p className="text-base">Type</p>
              <p className="text-base font-medium">{alarm.eventType}</p>

              <p className="text-base">Status</p>
              <p className="text-base font-medium capitalize">{currentStatus}</p>

              <p className="text-base">Site Number</p>
              <p className="text-base font-medium">{site?.shortId ?? "N/A"}</p>

              <p className="text-base">Site Name</p>
              <p className="text-base font-medium">{site?.name ?? "Unknown"}</p>

              <p className="text-base">Site Address</p>
              <p className="text-base font-medium">{site?.address ?? "N/A"}</p>

              <p className="text-base">Transmitter Code</p>
              <p className="text-base font-medium">{transmitter?.referenceCode ?? "N/A"}</p>

              <p className="text-base">Time & Date</p>
              <p className="text-base font-medium">
                {new Date(alarm.triggeredAt).toLocaleString()}
              </p>
            </div>

            {/* Decision Log */}
            <div className="col-start-3 col-end-5 gap-2">
              <h3 className="text-lg font-semibold mb-4">Decision log</h3>
              <div className="p-7 bg-primary rounded-xl text-base leading-7 text-light_gray">
                The client was reached within 1 ring. The cancellation code was valid and
                matched the system. No signs of duress or distress detected in tone. Alarm
                was cancelled based on standard auto-handling protocol for intrusion alarm.
              </div>
            </div>

            {/* AI Call Transcript */}
            <div className="col-start-1 col-end-5">
              <h2 className="text-gray-700 font-semibold flex items-center gap-2 mb-4">
                <CallIcon className="text-gray-600" />
                AI Call Transcript
              </h2>
              <div className="bg-light_gray rounded-lg border border-gray p-4">
                <div className="space-y-3 text-sm leading-relaxed text-gray-800">
                  <p>
                    <span className="font-semibold text-gray-600">AI:</span> Hello, This is
                    Sam Calling From SecureOps Security. We Have Received An Intrusion Alarm
                    At Your Premises: Springs Fire Station – Main Entrance. Can You Please
                    Confirm If Everything Is Okay?
                  </p>
                  <p>
                    <span className="font-semibold text-gray-600">Client:</span> Yes,
                    Everything Is Okay. Sorry, It Was A False Alarm.
                  </p>
                  <p>
                    <span className="font-semibold text-gray-600">AI:</span> Thank You. For
                    Security Verification, Can You Please Provide Your Cancellation Code?
                  </p>
                  <p>
                    <span className="font-semibold text-gray-600">Client:</span> Sure, It's 4912.
                  </p>
                  <p>
                    <span className="font-semibold text-gray-600">AI:</span> Thank You. Code 4912
                    Has Been Verified. Your Alarm Has Been Cancelled And No Dispatch Will Occur.
                    Have A Safe Evening.
                  </p>
                  <p>
                    <span className="font-semibold text-gray-600">Client:</span> Thanks. Appreciate The Call.
                  </p>
                  <p>
                    <span className="font-semibold text-gray-600">AI:</span> You're Welcome. This Call Has Been Logged For Audit Purposes. Goodbye.
                  </p>
                </div>

                <div className="flex items-center justify-between mt-4 border-t pt-3 text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <PlayCircleOutlineIcon className="text-gray-600" />
                    <span>Audio Playback</span>
                  </div>
                  <div className="flex gap-4">
                    <span><strong>Duration:</strong> 0:46s</span>
                    <span><strong>Time:</strong> 03:17 AM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 mt-8 justify-end">
            {/* Dispatch — only when active */}
            {isActive && (
              <button
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 disabled:opacity-50"
                onClick={handleDispatch}
                disabled={dispatching}
              >
                {dispatching ? 'Dispatching...' : 'Dispatch Unit'}
              </button>
            )}

            {/* Resolve — only when dispatched */}
            {isDispatched && (
              <button
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
                onClick={handleResolve}
                disabled={resolving}
              >
                {resolving ? 'Resolving...' : 'Close Incident'}
              </button>
            )}

            <button
              className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700"
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