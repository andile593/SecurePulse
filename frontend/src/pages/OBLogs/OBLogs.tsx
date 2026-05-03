import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useOBLogs, useDeleteOBLog } from "@/hooks/useOBLogs";
import type { OBLog } from "@/types";
import SearchIcon from '@mui/icons-material/Search';
import ListAltIcon from '@mui/icons-material/ListAlt';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const ACTION_TYPES = ['DISPATCH', 'RESOLVED', 'ALARM', 'GUARD_PATROL', 'CHECK_IN', 'INCIDENT', 'SYSTEM'];

const ACTION_COLORS: Record<string, string> = {
  DISPATCH: 'bg-orange-100 text-orange-700',
  RESOLVED: 'bg-green-100 text-green-700',
  ALARM: 'bg-red-100 text-red-700',
  GUARD_PATROL: 'bg-blue-100 text-blue-700',
  CHECK_IN: 'bg-purple-100 text-purple-700',
  INCIDENT: 'bg-yellow-100 text-yellow-700',
  SYSTEM: 'bg-gray-100 text-gray-700',
};

function groupByDate(logs: OBLog[]) {
  const groups: Record<string, OBLog[]> = {};
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  logs.forEach((log) => {
    const date = new Date(log.logTime);
    let label: string;

    if (date.toDateString() === today.toDateString()) {
      label = 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
      label = 'Yesterday';
    } else {
      label = date.toLocaleDateString('en-ZA', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
    }

    if (!groups[label]) groups[label] = [];
    groups[label].push(log);
  });

  return groups;
}

export default function OBLogList() {
  const navigate = useNavigate();
  const { data: logs = [], isLoading, error } = useOBLogs();
  const { mutate: deleteOBLog } = useDeleteOBLog();

  const [search, setSearch] = useState('');
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!confirm("Are you sure you want to delete this log?")) return;
    deleteOBLog({ id });
  };

  const toggleType = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const filtered = useMemo(() => {
    return logs
      .filter((log) => {
        const matchesSearch =
          !search ||
          log.notes?.toLowerCase().includes(search.toLowerCase()) ||
          log.actionLog?.toLowerCase().includes(search.toLowerCase()) ||
          log.site?.name?.toLowerCase().includes(search.toLowerCase());

        const matchesType =
          selectedTypes.length === 0 || selectedTypes.includes(log.actionLog);

        return matchesSearch && matchesType;
      })
      .sort((a, b) => new Date(b.logTime).getTime() - new Date(a.logTime).getTime());
  }, [logs, search, selectedTypes]);

  const grouped = groupByDate(filtered);

  if (isLoading) return <div className="p-6">Loading occurrence feed...</div>;
  if (error) return <div className="p-6 text-red-600">{(error as Error).message}</div>;

  return (
    <div className="flex h-full">
      {/* Filter Sidebar */}
      <div className="w-64 flex-shrink-0 border-r border-gray-200 bg-white p-5 space-y-6">
        <h2 className="font-semibold text-gray-800">Filter & Sort</h2>

        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search here..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm pr-8 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <SearchIcon className="absolute right-2 top-2.5 text-gray-400" fontSize="small" />
        </div>

        {/* Entry Type */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <ListAltIcon fontSize="small" className="text-gray-500" />
              Entry Type
            </h3>
            <span className="text-gray-400 text-xs cursor-pointer">▲</span>
          </div>
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedTypes.length === 0}
                onChange={() => setSelectedTypes([])}
                className="rounded"
              />
              All ({logs.length})
            </label>
            {ACTION_TYPES.map((type) => {
              const count = logs.filter((l) => l.actionLog === type).length;
              if (count === 0) return null;
              return (
                <label key={type} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedTypes.includes(type)}
                    onChange={() => toggleType(type)}
                    className="rounded"
                  />
                  {type.replace('_', ' ')} ({count})
                </label>
              );
            })}
          </div>
        </div>

        {/* Clear filters */}
        <button
          onClick={() => { setSearch(''); setSelectedTypes([]); }}
          className="w-full bg-gray-900 text-white py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition"
        >
          Clear filters
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold text-gray-800">Occurrence Feed</h1>
          <button
            onClick={() => navigate("/OBlogs/new")}
            className="bg-primary text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition"
          >
            + New Log
          </button>
        </div>

        {filtered.length === 0 ? (
          <div className="text-gray-500 text-center py-12">No logs match your filters.</div>
        ) : (
          <div className="space-y-8">
            {Object.entries(grouped).map(([dateLabel, dateLogs]) => (
              <div key={dateLabel}>
                <h2 className="text-lg font-bold text-gray-800 mb-4">{dateLabel}</h2>
                <div className="grid grid-cols-2 gap-4">
                  {dateLogs.map((log) => (
                    <div
                      key={log.id}
                      className="bg-white border border-gray-100 rounded-xl p-4 cursor-pointer hover:shadow-md transition"
                      onClick={() => navigate(`/OBlogs/${log.id}`)}
                    >
                      {/* Card header */}
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500">
                            {new Date(log.logTime).toLocaleTimeString('en-ZA', {
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </span>
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${ACTION_COLORS[log.actionLog] ?? 'bg-gray-100 text-gray-600'}`}>
                            {log.actionLog?.replace('_', ' ')}
                          </span>
                        </div>
                        <button
                          onClick={(e) => navigate(`/OBlogs/${log.id}`)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <OpenInNewIcon fontSize="small" />
                        </button>
                      </div>

                      {/* Site name */}
                      <p className="font-semibold text-gray-900 mb-1">
                        Site - {log.site?.name ?? '—'}
                      </p>

                      {/* Details */}
                      {log.guard && (
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Guard:</span> {log.guard.name}
                        </p>
                      )}
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Note:</span> {log.notes || '—'}
                      </p>

                      {/* Footer actions */}
                      <div className="flex gap-2 mt-3">
                        <button
                          onClick={(e) => handleDelete(log.id!, e)}
                          className="text-xs text-red-500 hover:underline"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}