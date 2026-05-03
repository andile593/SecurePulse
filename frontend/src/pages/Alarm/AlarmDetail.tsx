import { useParams, useNavigate } from "react-router-dom";
import { useAlarm, useUpdateAlarm, useDeleteAlarm, useUpdateAlarmStatus } from "@/hooks/useAlarms";
import { useCreateOBLog } from "@/hooks/useOBLogs";
import { useSites } from "@/hooks/useSites";
import { useClients } from "@/hooks/useClients";
import AlarmForm from "@/components/forms/AlarmForm";
import { useState } from "react";
import type { Alarm } from "@/types/alarm";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
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
    updateAlarm(
      { id: alarm.id!, alarm: { ...alarm, ...data } },
      { onSuccess: () => { refetch(); setEditing(false); } }
    );
  };

  const handleDelete = () => {
    if (!alarm) return;
    if (confirm("Are you sure you want to delete this alarm?")) {
      deleteAlarm({ id: alarm.id! }, { onSuccess: () => navigate("/alarms") });
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
              onSuccess: () => { refetch(); setDispatching(false); },
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
              onSuccess: () => { refetch(); setResolving(false); },
              onError: () => setResolving(false),
            }
          );
        },
        onError: () => setResolving(false),
      }
    );
  };

  if (isLoading) return <div className="p-6">Loading alarm details...</div>;
  if (error) return <div className="p-6 text-red-600">{(error as Error).message}</div>;
  if (!alarm) return <div className="p-6">Alarm not found.</div>;

  const transmitter = sites
    .flatMap((site) => site.transmitters?.map(t => ({ ...t, site })) ?? [])
    .find((t) => t.id === alarm.transmitterId);

  const site = transmitter?.site;
  const client = clients.find((c) => c.id === site?.clientId);
  const currentStatus = alarm.status ?? 'active';
  const isActive = currentStatus === 'active';
  const isDispatched = currentStatus === 'dispatched';
  const hasAiCall = alarm.aiCalls && alarm.aiCalls.length > 0;

  return (
    <div className="p-6">
      {editing ? (
        <AlarmForm
          initialData={{ ...alarm }}
          onSubmit={handleSubmit}
          onClose={() => setEditing(false)}
        />
      ) : (
        <>
          {/* Back link */}
          <button
            onClick={() => navigate("/alarms")}
            className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800 mb-5 transition"
          >
            <ArrowBackIcon fontSize="small" />
            Back to Dashboard
          </button>

          {/* Title row */}
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-semibold text-gray-900">
                Event - {alarm.transmitter?.site?.name ?? 'Unknown Site'}
              </h2>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${STATUS_COLORS[currentStatus] ?? 'bg-gray-100 text-gray-700'}`}>
                {currentStatus}
              </span>
            </div>
            <p className="text-sm text-gray-500">
              Source Code: {alarm.transmitter?.referenceCode ?? '—'}
            </p>
          </div>
          <div className="w-full border-b border-gray-200 mb-6" />

          {/* Main grid */}
          <div className="grid grid-cols-2 gap-6 mb-6">

            {/* Left — alarm info */}
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <div className="grid grid-cols-2 gap-y-4">
                <p className="text-sm text-gray-500">Alarm ID</p>
                <p className="text-sm font-semibold text-gray-900">#{alarm.shortId}</p>

                <p className="text-sm text-gray-500">Type</p>
                <p className="text-sm font-semibold text-gray-900">{alarm.eventType}</p>

                <p className="text-sm text-gray-500">Site Number</p>
                <p className="text-sm font-semibold text-gray-900">{site?.shortId ?? 'N/A'}</p>

                <p className="text-sm text-gray-500">Site Name</p>
                <p className="text-sm font-semibold text-gray-900">{site?.name ?? 'Unknown'}</p>

                <p className="text-sm text-gray-500">Site Address</p>
                <p className="text-sm font-semibold text-gray-900">{site?.address ?? 'N/A'}</p>

                <p className="text-sm text-gray-500">Transmitter Code</p>
                <p className="text-sm font-semibold text-gray-900">
                  {transmitter?.referenceCode ?? 'N/A'}
                </p>

                <p className="text-sm text-gray-500">Time & Date</p>
                <p className="text-sm font-semibold text-gray-900">
                  {new Date(alarm.triggeredAt).toLocaleString('en-ZA')}
                </p>

                {client && (
                  <>
                    <p className="text-sm text-gray-500">Client</p>
                    <p className="text-sm font-semibold text-gray-900">
                      {client.name} {client.surname}
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Right — decision log */}
            <div className="bg-gray-900 rounded-xl p-6 text-white">
              <h3 className="font-semibold text-white mb-4">Decision log</h3>
              {hasAiCall ? (
                <div className="space-y-3 text-sm leading-relaxed text-gray-300">
                  <p className="font-medium text-white">
                    {alarm.aiCalls![0].aiDecision ?? 'Pending'}
                  </p>
                  {alarm.aiCalls![0].confidenceScore && (
                    <p>
                      AI Confidence:{' '}
                      <span className="font-semibold text-white">
                        {(alarm.aiCalls![0].confidenceScore * 100).toFixed(0)}%
                      </span>
                    </p>
                  )}
                  {alarm.aiCalls![0].notes && (
                    <div>
                      <p className="text-gray-400 mb-1">Reasoning:</p>
                      <ul className="space-y-1 list-disc list-inside text-gray-300">
                        {alarm.aiCalls![0].notes.split('\n').map((line, i) => (
                          <li key={i}>{line}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <p className="text-xs text-gray-400 mt-4">
                    {alarm.aiCalls![0].evaluatedAt
                      ? new Date(alarm.aiCalls![0].evaluatedAt).toLocaleTimeString('en-ZA')
                      : ''}
                  </p>
                </div>
              ) : (
                <div className="space-y-2 text-sm text-gray-300">
                  <p className="font-medium text-white">No AI Call Made</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-400">
                    <li>No AI verification call was triggered for this event</li>
                    <li>Manual review or immediate dispatch may apply</li>
                    <li>Check event type protocol for this alarm category</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* AI Call Transcript */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 mb-6">
            <h2 className="text-gray-700 font-semibold flex items-center gap-2 mb-4">
              <CallIcon className="text-gray-600" fontSize="small" />
              AI Call Transcript
            </h2>

            {hasAiCall ? (
              <>
                <div className="space-y-3 text-sm leading-relaxed text-gray-800">
                  <p>
                    <span className="font-semibold text-gray-600">AI:</span> Hello, this is
                    Sam calling from SecurePulse Security. We have received an{' '}
                    {alarm.eventType} at your premises:{' '}
                    {alarm.transmitter?.site?.name ?? 'your site'} – Main Entrance. Can you
                    please confirm if everything is okay?
                  </p>
                  <p>
                    <span className="font-semibold text-gray-600">Client:</span> Yes,
                    everything is okay. Sorry, it was a false alarm.
                  </p>
                  <p>
                    <span className="font-semibold text-gray-600">AI:</span> Thank you. For
                    security verification, can you please provide your cancellation code?
                  </p>
                  <p>
                    <span className="font-semibold text-gray-600">Client:</span> Sure, it's 4912.
                  </p>
                  <p>
                    <span className="font-semibold text-gray-600">AI:</span> Thank you. Code
                    4912 has been verified. Your alarm has been cancelled and no dispatch will
                    occur. Have a safe evening.
                  </p>
                  <p>
                    <span className="font-semibold text-gray-600">Client:</span> Thanks.
                    Appreciate the call.
                  </p>
                  <p>
                    <span className="font-semibold text-gray-600">AI:</span> You're welcome.
                    This call has been logged for audit purposes. Goodbye.
                  </p>
                </div>

                <div className="flex items-center justify-between mt-4 border-t pt-3 text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <PlayCircleOutlineIcon fontSize="small" />
                    <span>Audio Playback</span>
                  </div>
                  <div className="flex gap-4">
                    <span>
                      <strong>Duration:</strong>{' '}
                      {alarm.aiCalls![0].callDuration ?? '0:46s'}
                    </span>
                    <span>
                      <strong>Time:</strong>{' '}
                      {alarm.aiCalls![0].calledAt
                        ? new Date(alarm.aiCalls![0].calledAt).toLocaleTimeString('en-ZA')
                        : '—'}
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-gray-50 rounded-lg p-6 text-center text-gray-500 text-sm">
                <p className="font-medium mb-1">No AI call was made for this event</p>
                <p className="text-xs text-gray-400">
                  This event type does not trigger an automatic verification call.
                </p>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-3 justify-end">
            {isActive && (
              <button
                className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 disabled:opacity-50 font-medium transition"
                onClick={handleDispatch}
                disabled={dispatching}
              >
                {dispatching ? 'Dispatching...' : ' Dispatch Unit'}
              </button>
            )}

            {isDispatched && (
              <button
                className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50 font-medium transition"
                onClick={handleResolve}
                disabled={resolving}
              >
                {resolving ? 'Resolving...' : 'Close Incident'}
              </button>
            )}

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

export default AlarmDetail;