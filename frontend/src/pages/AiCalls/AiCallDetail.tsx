import { useParams, useNavigate } from 'react-router-dom';
import { useAiCall, useUpdateAiCall, useDeleteAiCall } from '@/hooks/useAiCalls';
import AiCallForm from '@/components/forms/AiCallForm';
import { useState } from 'react';
import type { AiCall } from '@/types/aiCall';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const AiCallDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);

  const { data: aiCall, isLoading, error, refetch } = useAiCall(id!);
  const { mutate: updateAiCall } = useUpdateAiCall();
  const { mutate: deleteAiCall } = useDeleteAiCall();

  if (isLoading) return <div className="p-6">Loading call details...</div>;
  if (error) return <div className="p-6 text-red-600">{(error as Error).message}</div>;
  if (!aiCall) return <div className="p-6">AI Call not found.</div>;

  const handleSubmit = (data: Partial<AiCall>) => {
    updateAiCall(
      { id: aiCall.id!, aiCall: { ...aiCall, ...data } },
      { onSuccess: () => { refetch(); setEditing(false); } }
    );
  };

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this call record?')) {
      deleteAiCall({ id: aiCall.id! }, { onSuccess: () => navigate('/ai-calls') });
    }
  };

  const notes = aiCall.notes?.toLowerCase() ?? '';
  const hasCode = notes.includes('cancellation code') || notes.includes('code');
  const isResolved = aiCall.aiDecision === 'Cancelled' || aiCall.aiDecision === 'Dispatched';

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Back */}
      <button
        onClick={() => navigate('/ai-calls')}
        className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800 mb-5 transition"
      >
        <ArrowBackIcon fontSize="small" />
        Back to Call Activity
      </button>

      {editing ? (
        <AiCallForm
          initialData={aiCall}
          onSubmit={handleSubmit}
          onClose={() => setEditing(false)}
        />
      ) : (
        <>
          {/* Header */}
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-semibold text-gray-900">
                Call #C-{aiCall.shortId}
              </h1>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                isResolved
                  ? 'bg-green-100 text-green-700'
                  : 'bg-yellow-100 text-yellow-700'
              }`}>
                {isResolved ? 'Resolved' : 'Review Needed'}
              </span>
            </div>
            <p className="text-sm text-gray-500">
              {aiCall.calledAt
                ? new Date(aiCall.calledAt).toLocaleString('en-ZA')
                : '—'}
            </p>
          </div>
          <div className="w-full border-b border-gray-200 mb-6" />

          {/* Info grid */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 mb-6">
            <div className="grid grid-cols-2 gap-y-4">
              <p className="text-sm text-gray-500">Call ID</p>
              <p className="text-sm font-semibold text-gray-900">#C-{aiCall.shortId}</p>

              <p className="text-sm text-gray-500">Called At</p>
              <p className="text-sm font-semibold text-gray-900">
                {aiCall.calledAt
                  ? new Date(aiCall.calledAt).toLocaleString('en-ZA')
                  : '—'}
              </p>

              <p className="text-sm text-gray-500">Call Duration</p>
              <p className="text-sm font-semibold text-gray-900">
                {aiCall.callDuration ?? '—'}
              </p>

              <p className="text-sm text-gray-500">AI Decision</p>
              <p className="text-sm font-semibold text-gray-900">
                {aiCall.aiDecision ?? '—'}
              </p>

              <p className="text-sm text-gray-500">Confidence Score</p>
              <p className="text-sm font-semibold text-gray-900">
                {aiCall.confidenceScore
                  ? `${(aiCall.confidenceScore * 100).toFixed(0)}%`
                  : '—'}
              </p>

              <p className="text-sm text-gray-500">Code Provided</p>
              <div className="flex items-center gap-1">
                {hasCode ? (
                  <>
                    <CheckCircleIcon className="text-green-500" fontSize="small" />
                    <span className="text-sm font-semibold text-green-700">Yes</span>
                  </>
                ) : (
                  <>
                    <CancelIcon className="text-red-500" fontSize="small" />
                    <span className="text-sm font-semibold text-red-700">No</span>
                  </>
                )}
              </div>

              <p className="text-sm text-gray-500">Phone</p>
              <p className="text-sm font-semibold text-gray-900">
                {aiCall.phone ?? '—'}
              </p>
            </div>
          </div>

          {/* Notes / Transcript */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 mb-6">
            <h2 className="text-gray-700 font-semibold flex items-center gap-2 mb-4">
              <PlayCircleOutlineIcon fontSize="small" className="text-gray-500" />
              Call Notes
            </h2>
            <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-800 leading-relaxed">
              {aiCall.notes ?? 'No notes recorded for this call.'}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 justify-end">
            <button
              className="bg-primary text-white px-5 py-2 rounded-lg hover:bg-blue-700 font-medium transition"
              onClick={() => setEditing(true)}
            >
              Edit
            </button>
            <button
              className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 font-medium transition"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AiCallDetail;