import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatches, useDeleteDispatch } from "@/hooks/useDispatches";
import { useAlarms } from "@/hooks/useAlarms";
import { useGuards } from "@/hooks/useGuards";
import { useVehicles } from "@/hooks/useVehicles";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { Dispatch } from "@/types/dispatch";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import SecurityIcon from "@mui/icons-material/Security";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PendingIcon from "@mui/icons-material/Pending";

// Fix Leaflet default marker icon broken in Vite
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Custom red marker for active dispatches
const activeIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const resolvedIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

type FilterTab = "Overview" | "Active" | "New";

function DispatchCard({
  dispatch,
  alarm,
  guard,
  vehicle,
  onClick,
  onDelete,
}: {
  dispatch: Dispatch;
  alarm?: any;
  guard?: any;
  vehicle?: any;
  onClick: () => void;
  onDelete: (e: React.MouseEvent) => void;
}) {
  const isResolved = !!dispatch.resolvedAt;

  return (
    <div
      onClick={onClick}
      className="bg-white border border-gray-100 rounded-xl p-4 cursor-pointer hover:shadow-md transition space-y-3"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-gray-800">
            #{dispatch.shortId}
          </span>
          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
            isResolved
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}>
            {isResolved ? "Resolved" : "Active"}
          </span>
        </div>
        <span className="text-xs text-gray-400">
          {new Date(dispatch.dispatchedAt).toLocaleTimeString("en-ZA", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>

      {/* Alarm */}
      {alarm && (
        <p className="text-sm font-semibold text-gray-900">
          {alarm.eventType} — {alarm.transmitter?.site?.name ?? "Unknown Site"}
        </p>
      )}

      {/* Guard & Vehicle */}
      <div className="flex items-center gap-4 text-xs text-gray-500">
        <span className="flex items-center gap-1">
          <SecurityIcon fontSize="inherit" />
          {guard?.name ?? "—"}
        </span>
        <span className="flex items-center gap-1">
          <DirectionsCarIcon fontSize="inherit" />
          {vehicle?.plate ?? "—"}
        </span>
      </div>

      {/* Times */}
      <div className="flex items-center gap-4 text-xs text-gray-400">
        <span className="flex items-center gap-1">
          <AccessTimeIcon fontSize="inherit" />
          Dispatched: {new Date(dispatch.dispatchedAt).toLocaleString("en-ZA")}
        </span>
      </div>

      {dispatch.resolvedAt && (
        <div className="flex items-center gap-1 text-xs text-green-600">
          <CheckCircleIcon fontSize="inherit" />
          Resolved: {new Date(dispatch.resolvedAt).toLocaleString("en-ZA")}
        </div>
      )}

      {/* Delete */}
      <button
        onClick={onDelete}
        className="text-xs text-red-500 hover:underline"
      >
        Delete
      </button>
    </div>
  );
}

export default function DispatchList() {
  const navigate = useNavigate();
  const { data: dispatches = [], isLoading, error } = useDispatches();
  const { mutate: deleteDispatch } = useDeleteDispatch();
  const { data: alarms = [] } = useAlarms();
  const { data: guards = [] } = useGuards();
  const { data: vehicles = [] } = useVehicles();

  const [activeTab, setActiveTab] = useState<FilterTab>("Overview");
  const [selectedDispatch, setSelectedDispatch] = useState<Dispatch | null>(null);

  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!confirm("Are you sure you want to delete this dispatch?")) return;
    deleteDispatch({ id });
  };

  if (isLoading) return <div className="p-6">Loading dispatches...</div>;
  if (error) return <div className="p-6 text-red-600">{(error as Error).message}</div>;

  const activeDispatches = dispatches.filter((d) => !d.resolvedAt);
  const newDispatches = dispatches.filter((d) => {
    const age = Date.now() - new Date(d.dispatchedAt).getTime();
    return age < 60 * 60 * 1000; // less than 1 hour old
  });

  const tabCounts = {
    Overview: dispatches.length,
    Active: activeDispatches.length,
    New: newDispatches.length,
  };

  const displayed =
    activeTab === "Active"
      ? activeDispatches
      : activeTab === "New"
      ? newDispatches
      : dispatches;

  // Default map center — Johannesburg
  const mapCenter: [number, number] = [-26.2041, 28.0473];

  return (
    <div className="flex h-full">
      {/* Left sidebar */}
      <div className="w-72 flex-shrink-0 border-r border-gray-200 bg-white flex flex-col">

        {/* Header */}
        <div className="p-5 border-b border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-lg font-bold text-gray-900">Dispatch Center</h1>
            <button
              onClick={() => navigate("/dispatches/new")}
              className="text-xs bg-primary text-white px-3 py-1.5 rounded-lg hover:bg-blue-700 transition"
            >
              + New
            </button>
          </div>

          {/* Tabs */}
          <div className="space-y-1">
            {(["Overview", "Active", "New"] as FilterTab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition ${
                  activeTab === tab
                    ? "bg-gray-100 text-gray-900 font-semibold"
                    : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                <span className="flex items-center gap-2">
                  {tab === "New" && <AccessTimeIcon fontSize="small" className="text-gray-400" />}
                  {tab === "Active" && <PendingIcon fontSize="small" className="text-yellow-500" />}
                  {tab === "Overview" && <CheckCircleIcon fontSize="small" className="text-gray-400" />}
                  {tab}
                </span>
                <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full font-medium">
                  {tabCounts[tab]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Dispatch cards */}
        <div className="flex-1 overflow-auto p-4 space-y-3">
          {displayed.length === 0 ? (
            <p className="text-sm text-gray-400 text-center py-8">
              No dispatches to display.
            </p>
          ) : (
            displayed.map((dispatch) => {
              const alarm = alarms.find((a) => a.id === dispatch.alarmId);
              const guard = guards.find((g) => g.id === dispatch.guardId);
              const vehicle = vehicles.find((v) => v.id === dispatch.vehicleId);

              return (
                <DispatchCard
                  key={dispatch.id}
                  dispatch={dispatch}
                  alarm={alarm}
                  guard={guard}
                  vehicle={vehicle}
                  onClick={() => {
                    setSelectedDispatch(dispatch);
                    navigate(`/dispatches/${dispatch.id}`);
                  }}
                  onDelete={(e) => handleDelete(dispatch.id!, e)}
                />
              );
            })
          )}
        </div>
      </div>

      {/* Map */}
      <div className="flex-1 relative">
        <MapContainer
          center={mapCenter}
          zoom={12}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {dispatches.map((dispatch) => {
            const alarm = alarms.find((a) => a.id === dispatch.alarmId);
            const guard = guards.find((g) => g.id === dispatch.guardId);
            const vehicle = vehicles.find((v) => v.id === dispatch.vehicleId);
            const isResolved = !!dispatch.resolvedAt;

            // Use site coordinates if available, otherwise use default Joburg coords
            // with slight offset per dispatch so markers don't stack
            const idx = dispatches.indexOf(dispatch);
            const lat = -26.2041 + idx * 0.01;
            const lng = 28.0473 + idx * 0.01;

            return (
              <Marker
                key={dispatch.id}
                position={[lat, lng]}
                icon={isResolved ? resolvedIcon : activeIcon}
              >
                <Popup>
                  <div className="text-sm space-y-1 min-w-[200px]">
                    <p className="font-bold text-gray-900">
                      Dispatch #{dispatch.shortId}
                    </p>
                    {alarm && (
                      <p className="text-gray-700">
                        {alarm.eventType} — {alarm.transmitter?.site?.name ?? "Unknown"}
                      </p>
                    )}
                    <p className="text-gray-500 flex items-center gap-1">
                      <SecurityIcon fontSize="inherit" />
                      Guard: {guard?.name ?? "—"}
                    </p>
                    <p className="text-gray-500 flex items-center gap-1">
                      <DirectionsCarIcon fontSize="inherit" />
                      Vehicle: {vehicle?.plate ?? "—"}
                    </p>
                    <p className={`font-semibold ${isResolved ? "text-green-600" : "text-yellow-600"}`}>
                      {isResolved ? "Resolved" : "Active"}
                    </p>
                    <button
                      onClick={() => navigate(`/dispatches/${dispatch.id}`)}
                      className="mt-2 w-full bg-gray-900 text-white text-xs py-1.5 rounded hover:bg-gray-700 transition"
                    >
                      View Details
                    </button>
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </div>
  );
}