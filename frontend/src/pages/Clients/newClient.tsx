import ClientForm from "@/components/forms/ClientForm";
import { useCreateClient } from "@/hooks/useClients";
import { useNavigate } from "react-router-dom";

const NewClient = () => {
  const navigate = useNavigate();
  const { mutate: createClient } = useCreateClient();

  const handleSubmit = (data: any) => {
    createClient(data, {
      onSuccess: () => {
        navigate("/clients");
      },
      onError: (error) => {
        console.error("Failed to create clients:", error);
      },
    });
  };
  
  const emptyClientsData = {
    name: '',
    email: '',
    phone: '',
    createdAt: '',
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Create New Vehicle</h1>
      <ClientForm
        initialData={emptyClientsData}
        onSubmit={handleSubmit}
        onClose={() => navigate("/clients")}
      />
    </div>
  );
};

export default NewVehicle;
