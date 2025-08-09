import SiteForm from "@/components/forms/SiteForm";
import { useSites } from "@/hooks/useSites";
import { useNavigate } from "react-router-dom";

const NewSite = () => {
  const navigate = useNavigate();
  const { mutate: createSite } = useSites();

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

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Create New Sites</h1>
      <SiteForm
        onSubmit={handleSubmit}
        onClose={() => navigate("/sites")}
      />
    </div>
  );
};

export default NewSite