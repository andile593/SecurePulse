import OBLogForm from "@/components/forms/OBLogForm";
import { useCreateOBLog } from "@/hooks/useOBLogs";
import { useNavigate } from "react-router-dom";
import type { OBLog } from "@/types/OBLog";

const NewOBLog = () => {
  const navigate = useNavigate();
  const { mutate: createOBLog } = useCreateOBLog();

  const handleSubmit = (data: Partial<OBLog>) => {
    createOBLog({
      logTime: data.logTime ?? new Date().toISOString(),
      actionLog: data.actionLog ?? "",
      notes: data.notes ?? "",
      guardId: data.guardId,
      siteId: data.siteId,
    }, {
      onSuccess: () => navigate("/OBlogs"),
      onError: (error) => console.error(error),
    });
  };


  const emptyOBLogData: OBLog = {
    logTime: new Date().toISOString(),
    actionLog: "",
    notes: "",
    guardId: "",
    siteId: "",
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Create New Log</h1>
      <OBLogForm
        initialData={emptyOBLogData}
        onSubmit={handleSubmit}
        onClose={() => navigate("/OBlogs")}
      />
    </div>
  );
};

export default NewOBLog;
