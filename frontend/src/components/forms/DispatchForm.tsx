import { useState } from "react";
import type { Dispatch } from "@/types/dispatch";
import { useAlarms } from "@/hooks/useAlarms";
import { useGuards } from "@/hooks/useGuards";
import { useVehicles } from "@/hooks/useVehicles";

function toDateTimeLocal(iso: string): string {
  if (!iso) return "";
  const date = new Date(iso);
  const offset = date.getTimezoneOffset();
  const local = new Date(date.getTime() - offset * 60000);
  return local.toISOString().slice(0, 16);
}

type DispatchFormProps = {
  initialData?: Partial<Dispatch>;
  onSubmit: (data: Partial<Dispatch>) => void;
  onClose: () => void;
};

const DispatchForm = ({ initialData = {}, onSubmit, onClose }: DispatchFormProps) => {
  const [dispatchedAt, setDispatchedAt] = useState(
    initialData.dispatchedAt ? toDateTimeLocal(initialData.dispatchedAt) : toDateTimeLocal(new Date().toISOString())
  );
  const [arrivalTime, setArrivalTime] = useState(
    initialData.arrivalTime ? toDateTimeLocal(initialData.arrivalTime) : ""
  );
  const [resolvedAt, setResolvedAt] = useState(
    initialData.resolvedAt ? toDateTimeLocal(initialData.resolvedAt) : ""
  );
  const [responseNotes, setResponseNotes] = useState(initialData.responseNotes ?? "");
  const [alarmId, setAlarmId] = useState(initialData.alarmId ?? "");
  const [guardId, setGuardId] = useState(initialData.guardId ?? "");
  const [vehicleId, setVehicleId] = useState(initialData.vehicleId ?? "");

  const { data: alarms = [] } = useAlarms();
  const { data: guards = [] } = useGuards();
  const { data: vehicles = [] } = useVehicles();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      dispatchedAt: new Date(dispatchedAt).toISOString(),
      arrivalTime: arrivalTime ? new Date(arrivalTime).toISOString() : undefined,
      resolvedAt: resolvedAt ? new Date(resolvedAt).toISOString() : undefined,
      responseNotes: responseNotes || undefined,
      alarmId,
      guardId: guardId || undefined,
      vehicleId: vehicleId || undefined,
    });
  };

  const inputClass =
    "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary text-gray-900";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6 max-w-2xl">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">
        {initialData.id ? "Edit Dispatch" : "New Dispatch"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className={labelClass}>Alarm</label>
          <select
            value={alarmId}
            onChange={(e) => setAlarmId(e.target.value)}
            required
            className={inputClass}
          >
            <option value="">Select an alarm</option>
            {alarms.map((alarm) => (
              <option key={alarm.id} value={alarm.id}>
                #{alarm.shortId} — {alarm.eventType} — {alarm.transmitter?.site?.name ?? "Unknown"}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass}>Guard</label>
          <select
            value={guardId}
            onChange={(e) => setGuardId(e.target.value)}
            className={inputClass}
          >
            <option value="">Select a guard (optional)</option>
            {guards.map((guard) => (
              <option key={guard.id} value={guard.id}>
                {guard.name} — {guard.status}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass}>Vehicle</label>
          <select
            value={vehicleId}
            onChange={(e) => setVehicleId(e.target.value)}
            className={inputClass}
          >
            <option value="">Select a vehicle (optional)</option>
            {vehicles.map((vehicle) => (
              <option key={vehicle.id} value={vehicle.id}>
                {vehicle.plate} — {vehicle.model}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass}>Dispatched At</label>
          <input
            type="datetime-local"
            value={dispatchedAt}
            onChange={(e) => setDispatchedAt(e.target.value)}
            required
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Arrival Time</label>
          <input
            type="datetime-local"
            value={arrivalTime}
            onChange={(e) => setArrivalTime(e.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Resolved At</label>
          <input
            type="datetime-local"
            value={resolvedAt}
            onChange={(e) => setResolvedAt(e.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Response Notes</label>
          <textarea
            value={responseNotes}
            onChange={(e) => setResponseNotes(e.target.value)}
            rows={3}
            placeholder="Enter response notes..."
            className={inputClass}
          />
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            className="bg-primary text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Save
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-lg font-medium text-gray-600 border border-gray-300 hover:bg-gray-50 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default DispatchForm;