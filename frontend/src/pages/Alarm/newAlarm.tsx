import AlarmForm from "@/components/forms/AlarmForm";
import { useCreateAlarm } from "@/hooks/useAlarms";
import { useClients } from "@/hooks/useClients";
import { useSites } from "@/hooks/useSites";
import type { Alarm } from "@/types/alarm";
import { useNavigate } from "react-router-dom";

const NewAlarm = () => {
  const navigate = useNavigate();
  const { mutate: createAlarm } = useCreateAlarm();
  const { data: clients = [] } = useClients();
  const { data: sites = [] } = useSites();
console.log("Sites", sites);


   const transmitters =
    sites.flatMap((s) =>
      s.transmitters?.map((t) => ({
        ...t,
        siteName: s.name,
        clientId: s.clientId ?? "",
      })) ?? []
    );

  const handleSubmit = (data: any) => {
    console.log("Payload being sent:", data); 
    createAlarm(data, {
      onSuccess: () => {
        navigate("/alarms");
      },
      onError: (error) => {
        console.error("Failed to create alarm:", error);
      },
    });
  };

  const emptyAlarmData: Partial<Alarm> = {
    triggeredAt: '',
    eventType: '',
    source: '',
    transmitterId: '',
  };


  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Create New Alarm</h1>
      <AlarmForm
        initialData={emptyAlarmData}
        onSubmit={handleSubmit}
        onClose={() => navigate("/alarms")}
        clientOptions={clients}
        transmitterOptions={transmitters}
      />
    </div>
  );
};

export default NewAlarm;
