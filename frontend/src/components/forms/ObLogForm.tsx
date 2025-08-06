import { useState, useEffect } from "react";
import type { ObLog } from "@/types/obLog";

type ObLogFormProps = {
  initialData?: Partial<ObLog>;
  onSubmit: (data: Partial<ObLog>) => void;
  onClose: () => void;
};

const ObLogForm = ({ initialData = {}, onSubmit, onClose }: ObLogFormProps) => {
  const [source, setSource] = useState("");
  const [logTime, setLogTime] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setSource(initialData.source ?? "");
    setLogTime(initialData.logTime ?? "");
    setMessage(initialData.message ?? "");
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ source, message, logTime });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white shadow p-4 rounded max-w-md"
    >
      <div>
        <label className="block text-sm font-medium mb-1">Source Name</label>
        <input
          value={source}
          onChange={(e) => setSource(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Message</label>
        <textarea
          className="w-full border p-2 rounded"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Timestamp</label>
        <input
          type="datetime-local"
          value={logTime}
          onChange={(e) => setLogTime(e.target.value)}
          required
        />
      </div>

      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onClose}
          className="text-gray-600 hover:underline"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ObLogForm;
