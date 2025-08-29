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
  const notes = aiCall.notes?.toLowerCase() || "";
  let outcome = "—";

  if (notes.includes("cancellation code")) {
    outcome = "Code matched";
  } else if (notes.includes("did not respond")) {
    outcome = "No answer";
  } else if (notes.includes("false alarm")) {
    outcome = "False alarm";
  } else if (notes.includes("dispatched")) {
    outcome = "Dispatched";
  } else if (aiCall.aiDecision) {
    outcome = aiCall.aiDecision;
  }

  const showCheckmark = notes.includes("cancellation code");

  return (
    <div
      className="flex font-semibold gap-2 mb-3 rounded-sm bg-light_gray hover:bg-gray-50 cursor-pointer"
      onClick={() => navigate(`/ai-calls/${aiCall.id}`)}
    >
      {/* Call ID */}
      <div className="w-[10%] flex justify-center items-center">
        #C-{aiCall.shortId || "—"}
      </div>

      {/* Site Name */}
      <div className="w-[15%] items-center py-2">
        {siteName}
      </div>

      {/* Time */}
      <div className="w-[10%] flex justify-center items-center py-2">
        {aiCall.calledAt
          ? new Date(aiCall.calledAt).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })
          : "—"}
      </div>

      {/* Call Duration */}
      <div className="w-[10%] flex justify-center items-center py-2">
        {aiCall.callDuration ? `${aiCall.callDuration}` : "—"}
      </div>

      {/* Outcome */}
      <div className="w-[20%] flex justify-center items-center py-2">
        {outcome}
      </div>

      {/* Code Provided */}
      <div className="w-[15%] flex justify-center items-center py-2">
        {showCheckmark ? (
          <img
            src="https://i.postimg.cc/Y0n5Wh2n/check-box.png"
            alt="Code matched"
            className="w-6 h-6"
          />
        ) : (
          <img
            src="https://i.postimg.cc/7Lhm5mJk/cancel.png"
            alt="Code invalid"
            className="w-6 h-6"
          />
        )}
      </div>

      {/* AI Decision */}
      <div className="w-[15%] flex justify-center items-center py-2">
        {aiCall.aiDecision || "—"}
      </div>
    </div>
  );
}
