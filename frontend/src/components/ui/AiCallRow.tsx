import type { AiCall } from "@/types/aiCall";
import type { Alarm } from "@/types/alarm";

export function AiCallRow({
  aiCall,
  alarm,
  siteName,
  navigate,
}: {
  aiCall: AiCall;
  alarm?: Alarm;
  siteName: string;
  navigate: any;
}) {
  return (
    <div
      className="flex gap-3 mb-3 rounded-sm bg-light_gray hover:bg-gray-50 cursor-pointer"
      onClick={() => navigate(`/ai-calls/${aiCall.id}`)}
    >
      {/* Call ID */}
      <div className="w-[8%] flex justify-center items-center">
        #C{aiCall.shortId || "—"}
      </div>

      {/* Site Name */}
      <div className="w-[6%] flex items-center justify-center py-2">
        {siteName}
      </div>

      {/* Example alarm info */}
      <div className="w-[10%] text-center py-2">
        {new Date(aiCall.calledAt).toLocaleTimeString() || "—"}
      </div>

      <div className="w-[10%] text-center py-2">
        {alarm?.eventType || "—"}
      </div>
    </div>
  );
}
