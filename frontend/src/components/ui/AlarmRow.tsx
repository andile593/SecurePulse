import { StatusBadge } from "./StatusBadge";
import type { Alarm } from "@/types/alarm";
import type { AiCall } from "@/types/aiCall";

const eventTypeColors: Record<string, string> = {
  "Panic Alarm": "bg-red",
  "Fire Alarm": "bg-red",
  "Intrusion Alarm": "bg-purple",
  "Open Alarm": "bg-blue",
};

export function AlarmRow({
  alarm,
  aiCalls,
  siteMap,
  navigate,
}: {
  alarm: Alarm;
  aiCalls: AiCall[];
  siteMap: Record<string, string>;
  navigate: any;
}) {
  function getCallStatus() {
    const call = aiCalls.find((c) => c.alarmId === alarm.id);
    const type = alarm.eventType.toLowerCase();

    if (["panic", "fire", "open"].includes(type)) return "No call";
    if (type === "intrusion") {
      if (!call) return "No answer";
      if (call.notes?.toLowerCase().includes("code")) return "Code confirmed";
      return "No answer";
    }
    return "-";
  }

  return (
    <div
      className="flex gap-3 mb-3 rounded-sm bg-light_gray hover:bg-gray-50 cursor-pointer"
      onClick={() => navigate(`/alarms/${alarm.id}`)}
    >
      <div className="w-[8%] py-2 flex items-center justify-center">
        <div
          className={`w-[35px] h-[35px] flex items-center justify-center text-white text-xs font-bold rounded ${
            eventTypeColors[alarm.eventType] || "bg-gray-400"
          }`}
        >
          {alarm.eventType?.split(" ").map((w) => w[0]).join("")}
        </div>
      </div>

      <div className="w-[6%] flex justify-center items-center">#{alarm.shortId || "—"}</div>
      <div className="w-[10%] px-2 py-2 text-center">{new Date(alarm.triggeredAt).toLocaleString()}</div>
      <div className="w-[25%] flex items-center py-2">{alarm.siteId ? siteMap[alarm.siteId] : "—"}</div>

      <div className="w-[20%] flex justify-center items-center">
        <StatusBadge status={getCallStatus()} />
      </div>
      <div className="w-[15%] flex justify-center items-center font-bold">{alarm.source}</div>
      <div className="w-[15%] flex justify-center items-center">
        <StatusBadge status={alarm.aiDecision} />
      </div>
    </div>
  );
}
