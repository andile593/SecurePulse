import SiteForm from "@/components/forms/SiteForm";
import { useCreateSite } from "@/hooks/useSites";
import { useNavigate } from "react-router-dom";
import type { Site } from '@/types/site'

const NewSite = () => {
  const navigate = useNavigate();
  const { mutate: createSite } = useCreateSite();

const handleSubmit = (data: any) => {
  console.log("data", data);
  
  createSite(data, {
    onSuccess: () => {
      navigate("/sites");
    },
    onError: (error) => {
      console.error("Failed to create site:", error);
    }
  });
};

const emptySiteData: Partial<Site> = {
    name: '',
    address: '',
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