import AlarmForm from "@/components/forms/AlarmForm";
import { useCreateAlarm } from "@/hooks/useAlarms";
import { useNavigate } from "react-router-dom";

const NewAlarm = () => {
  const navigate = useNavigate();
  const { mutate: createAlarm } = useCreateAlarm();

  const handleSubmit = (data: any) => {
    createAlarm(data, {
      onSuccess: () => {
        navigate("/alarms");
      },
      onError: (error) => {
        console.error("Failed to create alarm:", error);
      },
    });
  };
  
  const emptyAlarmData = {
    triggeredAt: '',
    alarmType: '',
    priority: '',
    status: '',
    siteId: '',
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Create New Vehicle</h1>
      <AlarmForm
        initialData={emptyAlarmData}
        onSubmit={handleSubmit}
        onClose={() => navigate("/alarms")}
      />
    </div>
  );
};

export default NewAlarm;
