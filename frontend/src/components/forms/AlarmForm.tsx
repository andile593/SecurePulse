import { useState } from 'react';
import type { Alarm } from '@/types/alarm';

type AlarmFormProps = {
  initialData?: Partial<Alarm>;
  onSubmit: (data: Partial<Alarm>) => void;
  onClose: () => void;
};

const AlarmForm = ({ initialData = {}, onSubmit, onClose }: AlarmFormProps) => {
  const [eventType, setEventType] = useState(initialData.eventType ?? '');
  const [status, setStatus] = useState(initialData.status ?? '');
  const [triggeredAt, setTriggeredAt] = useState(initialData.triggeredAt?.slice(0, 16) ?? '');
  const [priority, setPriority] = useState(initialData.priority ?? 1);
  const [source, setSource] = useState(initialData.source ?? '');
  const [transmitterId, setTransmitterId] = useState(initialData.transmitterId ?? '');
  const [siteId, setSiteId] = useState(initialData.siteId ?? '');
  const [clientId, setClientId] = useState(initialData.clientId ?? '');
  const [resolutionNotes, setResolutionNotes] = useState(initialData.resolutionNotes ?? '');
  const [resolvedBy, setResolvedBy] = useState(initialData.resolvedBy ?? '');
  const [resolvedAt, setResolvedAt] = useState(initialData.resolvedAt?.slice(0, 16) ?? '');
  const [lastAICheckAt, setLastAICheckAt] = useState(initialData.lastAICheckAt?.slice(0, 16) ?? '');
  const [aiDecision, setAiDecision] = useState(initialData.aiDecision ?? '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      eventType,
      status,
      triggeredAt: new Date(triggeredAt).toISOString(), 
      priority,
      source,
      transmitterId: transmitterId || undefined,
      siteId,
      clientId,
      resolutionNotes: resolutionNotes || undefined,
      resolvedBy: resolvedBy || undefined,
      resolvedAt: resolvedAt ? new Date(resolvedAt).toISOString() : undefined,
      lastAICheckAt: lastAICheckAt ? new Date(lastAICheckAt).toISOString() : undefined,
      aiDecision: aiDecision || undefined,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded shadow-md">
      <div>
        <label className="block text-sm font-medium">Event Type</label>
        <input
          className="w-full border p-2 rounded"
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Status</label>
        <input
          className="w-full border p-2 rounded"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Triggered At</label>
        <input
          type="datetime-local"
          className="w-full border p-2 rounded"
          value={triggeredAt}
          onChange={(e) => setTriggeredAt(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Priority</label>
        <input
          type="number"
          min="1"
          max="5"
          className="w-full border p-2 rounded"
          value={priority}
          onChange={(e) => setPriority(parseInt(e.target.value))}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Source</label>
        <input
          className="w-full border p-2 rounded"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Transmitter ID</label>
        <input
          className="w-full border p-2 rounded"
          value={transmitterId}
          onChange={(e) => setTransmitterId(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Site ID</label>
        <input
          className="w-full border p-2 rounded"
          value={siteId}
          onChange={(e) => setSiteId(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Client ID</label>
        <input
          className="w-full border p-2 rounded"
          value={clientId}
          onChange={(e) => setClientId(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Resolution Notes</label>
        <textarea
          className="w-full border p-2 rounded"
          value={resolutionNotes}
          onChange={(e) => setResolutionNotes(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Resolved By</label>
        <input
          className="w-full border p-2 rounded"
          value={resolvedBy}
          onChange={(e) => setResolvedBy(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Resolved At</label>
        <input
          type="datetime-local"
          className="w-full border p-2 rounded"
          value={resolvedAt}
          onChange={(e) => setResolvedAt(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Last AI Check At</label>
        <input
          type="datetime-local"
          className="w-full border p-2 rounded"
          value={lastAICheckAt}
          onChange={(e) => setLastAICheckAt(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium">AI Decision</label>
        <input
          className="w-full border p-2 rounded"
          value={aiDecision}
          onChange={(e) => setAiDecision(e.target.value)}
        />
      </div>

      <div className="flex gap-2">
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Save
        </button>
        <button type="button" onClick={onClose} className="text-gray-600 hover:underline">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AlarmForm;
