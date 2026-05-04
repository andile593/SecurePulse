import type { AiCall } from "@/types/aiCall";
import type { Alarm } from "@/types/alarm";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

function getOutcome(aiCall: AiCall): { label: string; color: string } {
  const notes = aiCall.notes?.toLowerCase() ?? '';
  const decision = aiCall.aiDecision?.toLowerCase() ?? '';

  if (notes.includes('cancellation code') || decision === 'cancelled') {
    return { label: 'Code Matched', color: 'text-gray-800 font-semibold' };
  }
  if (notes.includes('did not respond') || decision === 'unanswered') {
    return { label: 'No Answer', color: 'text-gray-800 font-semibold' };
  }
  if (notes.includes('invalid') || notes.includes('incorrect')) {
    return { label: 'Code Invalid', color: 'text-gray-800 font-semibold' };
  }
  if (decision === 'dispatched') {
    return { label: 'Dispatched', color: 'text-gray-800 font-semibold' };
  }
  return { label: aiCall.aiDecision ?? '—', color: 'text-gray-500' };
}

function getResult(aiCall: AiCall): { label: string; color: string } {
  const decision = aiCall.aiDecision?.toLowerCase() ?? '';
  const notes = aiCall.notes?.toLowerCase() ?? '';

  if (notes.includes('cancellation code') || decision === 'cancelled') {
    return { label: 'Alarm Cancelled', color: 'text-gray-800 font-semibold' };
  }
  if (decision === 'dispatched') {
    return { label: 'Unit Dispatched', color: 'text-gray-800 font-semibold' };
  }
  if (decision === 'unanswered' || notes.includes('did not respond')) {
    return { label: 'Review Required', color: 'text-gray-800 font-semibold' };
  }
  return { label: aiCall.aiDecision ?? '—', color: 'text-gray-500' };
}

function getAccentColor(aiCall: AiCall): string {
  const decision = aiCall.aiDecision?.toLowerCase() ?? '';
  const notes = aiCall.notes?.toLowerCase() ?? '';

  if (notes.includes('cancellation code') || decision === 'cancelled') {
    return 'bg-green-500';
  }
  return 'bg-yellow-400';
}

function codeProvided(aiCall: AiCall): boolean {
  const notes = aiCall.notes?.toLowerCase() ?? '';
  return notes.includes('cancellation code') || notes.includes('code');
}

export function AiCallRow({
  aiCall,
  alarm,
  siteName,
  navigate,
}: {
  aiCall: AiCall;
  alarm?: Alarm;
  siteName: string;
  navigate: (path: string) => void;
}) {
  const outcome = getOutcome(aiCall);
  const result = getResult(aiCall);
  const accent = getAccentColor(aiCall);
  const hasCode = codeProvided(aiCall);

  return (
    <div
      className="relative flex items-center bg-white border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors"
      onClick={() => navigate(`/ai-calls/${aiCall.id}`)}
    >
      {/* Left accent bar */}
      <div className={`absolute left-0 top-2 bottom-2 w-1 rounded-full ${accent}`} />

      {/* Call ID */}
      <div className="w-[12%] pl-5 py-4 text-sm font-semibold text-gray-800">
        #C-{aiCall.shortId ?? '—'}
      </div>

      {/* Site Name */}
      <div className="w-[20%] py-4 text-sm font-semibold text-gray-800 pr-4">
        {siteName}
      </div>

      {/* Time */}
      <div className="w-[10%] py-4 text-sm text-gray-700 font-semibold text-center">
        {aiCall.calledAt
          ? new Date(aiCall.calledAt).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })
          : '—'}
      </div>

      {/* Call Duration */}
      <div className="w-[12%] py-4 text-sm text-gray-700 font-semibold text-center">
        {aiCall.callDuration ?? '—'}
      </div>

      {/* Outcome */}
      <div className={`w-[16%] py-4 text-sm text-center ${outcome.color}`}>
        {outcome.label}
      </div>

      {/* Code Provided */}
      <div className="w-[15%] py-4 flex justify-center items-center">
        {hasCode ? (
          <CheckCircleIcon className="text-green-500" fontSize="small" />
        ) : (
          <CancelIcon className="text-red-500" fontSize="small" />
        )}
      </div>

      {/* Results */}
      <div className={`w-[15%] py-4 text-sm text-center ${result.color}`}>
        {result.label}
      </div>
    </div>
  );
}