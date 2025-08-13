import ClientForm from "@/components/forms/ClientForm";
import { useCreateClient } from "@/hooks/useClients";
import type { CreateClientInput } from "@/types/client";
import { useNavigate } from "react-router-dom";

const NewClient = () => {
  const navigate = useNavigate();
  const { mutate: createClient } = useCreateClient();

  const handleSubmit = (data: any) => {
    console.log("Creating client with:", data);

     const payload: CreateClientInput = {
    name: data.name,
    surname: data.surname,
    email: data.email,
    phone: data.phone,
    sites: data.sites.map((site: any) => ({
      name: site.name,
      address: site.address,
      latitude: Number(site.latitude),
      longitude: Number(site.longitude),
    })),
  };

  createClient(payload, {
    onSuccess: () => navigate("/clients"),
    onError: (error) => console.error("Failed to create client:", error),
  });
  };

  const emptyClientsData = {
    name: "",
    surname: "",
    email: "",
    phone: "",
    sites: [],
    createdAt: "",
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Create New Client</h1>
      <ClientForm
        initialData={emptyClientsData}
        onSubmit={handleSubmit}
        onClose={() => navigate("/clients")}
      />
    </div>
  );
};

export default NewClient;
