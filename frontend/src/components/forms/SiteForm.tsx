import { useState } from 'react';
import type { Site } from '@/types/site';
import type { SiteCreateInput } from '@/types/site';
import type { TransmitterCreateInput } from '@/types/transmitter';

import { useClients } from '@/hooks/useClients';

type SiteFormProps = {
  initialData?: Partial<Site>;
  onSubmit: (data: SiteCreateInput) => void;
  onClose: () => void;
};

const SiteForm = ({ initialData = {}, onSubmit, onClose }: SiteFormProps) => {
  const [name, setName] = useState(initialData.name ?? '');
  const [address, setAddress] = useState(initialData.address ?? '');
  const [clientId, setClientId] = useState(initialData.clientId ?? '');
  const [transmitters, setTransmitters] = useState<TransmitterCreateInput[]>(
    initialData.transmitters?.map(t => ({ referenceCode: t.referenceCode })) ?? [
      { referenceCode: "" },
    ]
  );


  const handleTransmitterChange = (index: number, value: string) => {
    const updated = [...transmitters];
    updated[index] = { referenceCode: value };
    setTransmitters(updated);
  };

  const addTransmitter = () => {
    setTransmitters([...transmitters, { referenceCode: "" }]);
  };

  const removeTransmitter = (index: number) => {
    setTransmitters(transmitters.filter((_, i) => i !== index));
  };

  const { data: clients = [] } = useClients();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      name,
      address,
      clientId,
      transmitters: transmitters.filter(t => t.referenceCode),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white shadow-md rounded max-w-md">
      <div>
        <label className="block text-sm font-medium mb-1">Site Name</label>
        <input
          className="w-full border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Location</label>
        <input
          className="w-full border p-2 rounded"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Transmitters</label>
        {transmitters.map((t, index) => (
          <div key={index} className="flex items-center gap-2 mb-2">
            <input
              type="text"
              placeholder="Reference Code"
              className="border p-2 rounded flex-1"
              value={t.referenceCode}
              onChange={(e) => handleTransmitterChange(index, e.target.value)}
              required
            />
            {index > 0 && (
              <button type="button" onClick={() => removeTransmitter(index)} className="text-red-600">
                Remove
              </button>
            )}
          </div>
        ))}

        <button type="button" onClick={addTransmitter} className="text-blue-600 hover:underline mt-2">
          + Add Transmitter
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Client</label>
        <select
          className="w-full border p-2 rounded"
          value={clientId}
          onChange={(e) => setClientId(e.target.value)}
          required
        >
          <option value="">Select a Client</option>
          {clients.map((client) => (
            <option key={client.id} value={client.id}>
              {client.name} {client.surname}
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-2">
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
        <button type="button" className="text-gray-600 hover:underline px-4 py-2" onClick={onClose}>Cancel</button>
      </div>
    </form>
  );
};

export default SiteForm;
