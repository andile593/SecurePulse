import { useState, useEffect } from "react";
import type { Alarm } from "@/types/alarm";
import type { Transmitter, Client } from "@/types";

type AlarmFormProps = {
  initialData?: Partial<Alarm>;
  onSubmit: (data: Partial<Alarm>) => void;
  onClose: () => void;
  clientOptions?: Client[];
  transmitterOptions?: (Transmitter & { siteName: string; clientId: string })[];
  selectedClientId?: string;
  setSelectedClientId?: (id: string) => void;
};

const AlarmForm = ({
  initialData = {},
  onSubmit,
  onClose,
  clientOptions = [],
  transmitterOptions = [],
  selectedClientId,
  setSelectedClientId,
}: AlarmFormProps) => {
  const [eventType, setEventType] = useState(initialData.eventType ?? "");
  const [triggeredAt, setTriggeredAt] = useState(
    initialData.triggeredAt?.slice(0, 16) ?? ""
  );
  const [source, setSource] = useState(initialData.source ?? "");
  const [transmitterId, setTransmitterId] = useState(initialData.transmitterId ?? "");

  // Filter transmitters by selected client
  const filteredTransmitters = transmitterOptions.filter(
    (t) => t.clientId === selectedClientId
  );

  
  useEffect(() => {
    setTransmitterId("");
  }, [selectedClientId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      eventType,
      triggeredAt: new Date(triggeredAt).toISOString(),
      source,
      transmitterId,
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
        <label className="block text-sm font-medium">Source</label>
        <input
          className="w-full border p-2 rounded"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Client</label>
        <select
          className="w-full border p-2 rounded"
          value={selectedClientId}
          onChange={(e) => setSelectedClientId?.(e.target.value)}
          required
        >
          <option value="">Select a client</option>
          {clientOptions.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name} {c.surname}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium">Transmitter</label>
        <select
          className="w-full border p-2 rounded"
          value={transmitterId}
          onChange={(e) => setTransmitterId(e.target.value)}
          required
          disabled={!selectedClientId}
        >
          <option value="">Select a transmitter</option>
          {filteredTransmitters.map((t) => (
            <option key={t.id} value={t.id}>
              {t.referenceCode} — {t.siteName}
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-2">
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded">
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
