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
  const [latitude, setLatitude] = useState(initialData.latitude?.toString() ?? '');
  const [longitude, setLongitude] = useState(initialData.longitude?.toString() ?? '');
  const [transmitters, setTransmitters] = useState<TransmitterCreateInput[]>(
    initialData.transmitters?.map(t => ({ referenceCode: t.referenceCode })) ?? [
      { referenceCode: '' },
    ]
  );

  const { data: clients = [] } = useClients();

  const handleTransmitterChange = (index: number, value: string) => {
    const updated = [...transmitters];
    updated[index] = { referenceCode: value };
    setTransmitters(updated);
  };

  const addTransmitter = () => {
    setTransmitters([...transmitters, { referenceCode: '' }]);
  };

  const removeTransmitter = (index: number) => {
    setTransmitters(transmitters.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      name,
      address,
      clientId,
      latitude: latitude ? parseFloat(latitude) : undefined,
      longitude: longitude ? parseFloat(longitude) : undefined,
      transmitters: transmitters.filter(t => t.referenceCode),
    });
  };

  const inputClass = 'w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary text-gray-900';
  const labelClass = 'block text-sm font-medium text-gray-700 mb-1';

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6 max-w-2xl">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">
        {initialData.id ? 'Edit Site' : 'New Site'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className={labelClass}>Site Name</label>
          <input
            className={inputClass}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Greenfield Office Park"
            required
          />
        </div>

        <div>
          <label className={labelClass}>Address</label>
          <input
            className={inputClass}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="e.g. 14 Greenfield Avenue, Sandton"
            required
          />
        </div>

        {/* Coordinates */}
        <div>
          <label className={labelClass}>
            Coordinates
            <span className="text-gray-400 font-normal ml-1 text-xs">
              — used to pin site on dispatch map
            </span>
          </label>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Latitude</label>
              <input
                type="number"
                step="any"
                className={inputClass}
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
                placeholder="-26.2041"
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Longitude</label>
              <input
                type="number"
                step="any"
                className={inputClass}
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
                placeholder="28.0473"
              />
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Find coordinates at{' '}

            <a href="https://www.latlong.net"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              latlong.net
            </a>
          </p>
        </div>

        <div>
          <label className={labelClass}>Client</label>
          <select
            className={inputClass}
            value={clientId}
            onChange={(e) => setClientId(e.target.value)}
            required
          >
            <option value="">Select a client</option>
            {clients.map((client) => (
              <option key={client.id} value={client.id}>
                {client.name} {client.surname}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass}>Transmitters</label>
          <div className="space-y-2">
            {transmitters.map((t, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Reference Code e.g. TXR-00421"
                  className={inputClass}
                  value={t.referenceCode}
                  onChange={(e) => handleTransmitterChange(index, e.target.value)}
                  required
                />
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => removeTransmitter(index)}
                    className="text-red-500 text-sm hover:underline whitespace-nowrap"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addTransmitter}
              className="text-primary text-sm hover:underline"
            >
              + Add Transmitter
            </button>
          </div>
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

export default SiteForm;