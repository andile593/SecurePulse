import OBLogForm from "@/components/forms/OBLogForm";
import { useOBLogs } from "@/hooks/useOBLogs";
import { useNavigate } from "react-router-dom";

const NewOBLog = () => {
  const navigate = useNavigate();
  const { mutate: createOBLog } = useOBLogs();

const handleSubmit = (data: any) => {
  createOBLog(data, {
    onSuccess: () => {
      navigate("/OBlogs");
    },
    onError: (error) => {
      console.error("Failed to create log:", error);
    }
  });
};

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Create New Log</h1>
      <OBLogForm
        onSubmit={handleSubmit}
        onClose={() => navigate("/OBlogs")}
      />
    </div>
  );
};

export default NewOBLog;