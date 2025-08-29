import { useState } from "react";
import type { Client } from "@/types/client";

type ClientFormProps = {
  initialData?: Partial<Client>;
  onSubmit: (data: Partial<Client>, deletedSiteIds: string[]) => void;
  onClose: () => void;
};

type SiteFormData = {
  id?: string;
  name: string;
  address: string;
  location?: string;
  latitude?: number;
  longitude?: number;
};

const ClientForm = ({
  initialData = {},
  onSubmit,
  onClose,
}: ClientFormProps) => {
  const [name, setName] = useState(initialData.name ?? "");
  const [surname, setSurname] = useState(initialData.surname ?? "");
  const [email, setEmail] = useState(initialData.email ?? "");
  const [phone, setPhone] = useState(initialData.phone ?? "");
  const [sites, setSites] = useState<SiteFormData[]>(
    initialData.sites
      ? initialData.sites.map((site) => ({
          id: site.id,
          name: site.name ?? "",
          address: site.address ?? "",
          location: site.location,
          latitude: site.latitude,
          longitude: site.longitude,
        }))
      : []
  );
  const [deletedSiteIds, setDeletedSiteIds] = useState<string[]>([]);

  const addSite = () => {
    setSites([...sites, { name: "", address: "" }]);
  };

  const updateSite = (
    index: number,
    field: keyof SiteFormData,
    value: string | number | undefined
  ) => {
    const updatedSites = [...sites];
    updatedSites[index] = {
      ...updatedSites[index],
      [field]: value,
    };
    setSites(updatedSites);
  };

  const removeSite = (index: number) => {
    const siteToRemove = sites[index];
    if (siteToRemove.id) {
      setDeletedSiteIds([...deletedSiteIds, siteToRemove.id]);
    }
    setSites(sites.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(
      {
        name,
        surname,
        email,
        phone,
        sites,
      },
      deletedSiteIds
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 bg-white rounded shadow-md max-w-md"
    >
      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <input
          type="text"
          className="w-full border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Surname</label>
        <input
          type="text"
          className="w-full border p-2 rounded"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          className="w-full border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Phone</label>
        <input
          type="tel"
          className="w-full border p-2 rounded"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      {/* Sites inputs */}
      <div>
        <h3 className="font-semibold mb-2">Sites</h3>
        {sites.map((site, index) => (
          <div key={index} className="mb-2 p-2 border rounded space-y-1">
            <input
              type="text"
              placeholder="Site name"
              value={site.name}
              onChange={(e) => updateSite(index, "name", e.target.value)}
              required
              className="w-full border p-1 rounded"
            />
            <input
              type="text"
              placeholder="Site address"
              value={site.address}
              onChange={(e) => updateSite(index, "address", e.target.value)}
              required
              className="w-full border p-1 rounded"
            />
            <input
              type="text"
              placeholder="Location (optional)"
              value={site.location ?? ""}
              onChange={(e) => updateSite(index, "location", e.target.value)}
              className="w-full border p-1 rounded"
            />
            {/* Optional latitude and longitude inputs */}
            <input
              type="number"
              step="any"
              placeholder="Latitude (optional)"
              value={site.latitude ?? ""}
              onChange={(e) =>
                updateSite(
                  index,
                  "latitude",
                  e.target.value ? Number(e.target.value) : undefined
                )
              }
              className="w-full border p-1 rounded"
            />
            <input
              type="number"
              step="any"
              placeholder="Longitude (optional)"
              value={site.longitude ?? ""}
              onChange={(e) =>
                updateSite(
                  index,
                  "longitude",
                  e.target.value ? Number(e.target.value) : undefined
                )
              }
              className="w-full border p-1 rounded"
            />
            <button
              type="button"
              onClick={() => removeSite(index)}
              className="text-red-600 text-sm mt-1"
            >
              Remove Site
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addSite}
          className="mt-2 bg-green-500 text-white px-3 py-1 rounded"
        >
          Add Site
        </button>
      </div>

      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onClose}
          className="text-gray-600 hover:underline px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ClientForm;
