import SiteForm from "@/components/forms/SiteForm";
import { useCreateSite } from "@/hooks/useSites";
import { useNavigate } from "react-router-dom";

const NewSite = () => {
  const navigate = useNavigate();
  const { mutate: createSite } = useCreateSite();

const handleSubmit = (data: any) => {
  createSite(data, {
    onSuccess: () => {
      navigate("/sites");
    },
    onError: (error) => {
      console.error("Failed to create site:", error);
    }
  });
};

const emptySiteData = {
    name: '',
    address: '',
    latitude: '',
    longitude: '',
    clientId: '',
  };


  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Create New Sites</h1>
      <SiteForm
      initialData={emptySiteData}
        onSubmit={handleSubmit}
        onClose={() => navigate("/sites")}
      />
    </div>
  );
};

export default NewSite