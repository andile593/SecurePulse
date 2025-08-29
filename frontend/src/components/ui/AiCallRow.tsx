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
      className="flex gap-2 mb-3 rounded-sm bg-light_gray hover:bg-gray-50 cursor-pointer"
      onClick={() => navigate(`/ai-calls/${aiCall.id}`)}
    >
      {/* Call ID */}
      <div className="w-[10%] flex justify-center items-center">
        #C{aiCall.shortId || "—"}
      </div>

      {/* Site Name */}
      <div className="w-[15%] flex justify-center items-center py-2">
        {siteName}
      </div>

      <div className="w-[10%] flex justify-center items-center py-2">
        {new Date(aiCall.calledAt).toLocaleTimeString() || "—"}
      </div>

      <div className="w-[10%] flex justify-center items-center py-2">
        {aiCall.callDuration || "—"}
      </div>
      <div className="w-[20%] flex justify-center items-center py-2">
        {"—"}
      </div>
      <div className="w-[15%] flex justify-center items-center py-2">
        {"—"}
      </div>
      <div className="w-[15%] flex justify-center items-center py-2">
        {aiCall.aiDecision || "—"}
      </div>
    </div>
  );
}
