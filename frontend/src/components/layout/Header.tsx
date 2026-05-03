import { useLocation, Link } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState, useEffect } from "react";

interface HeaderProps {
  className?: string;
}

function LiveIndicator() {
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [label, setLabel] = useState("Just now");

  // Auto-refresh every 30 seconds
  useEffect(() => {
    const refreshId = setInterval(() => {
      setLastUpdate(new Date());
    }, 30000);
    return () => clearInterval(refreshId);
  }, []);

  // Tick the label every second
  useEffect(() => {
    const tickId = setInterval(() => {
      const secs = Math.floor((Date.now() - lastUpdate.getTime()) / 1000);
      setLabel(secs < 60 ? `${secs}s ago` : `${Math.floor(secs / 60)}m ago`);
    }, 1000);
    return () => clearInterval(tickId);
  }, [lastUpdate]);

  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
      </span>
      <span className="text-green-400 font-semibold">Live</span>
      <span className="text-gray-500">•</span>
      <span className="text-gray-400 text-xs">{label}</span>
    </div>
  );
}

const Header = ({ className }: HeaderProps) => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const formattedSegments = pathSegments.map((segment) =>
    segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
  );

  return (
    <header className={`bg-primary shadow px-6 py-4 flex items-center justify-between overflow-hidden ${className}`}>
      {/* Breadcrumb */}
      <p className="text-text_light text-lg flex items-center gap-1 whitespace-nowrap overflow-hidden">
        <Link to="/" className="hover:underline text-sm text-gray-400">
          Dashboard
        </Link>
        {formattedSegments.map((seg, idx) => {
          const isLast = idx === formattedSegments.length - 1;
          return (
            <span key={idx} className="flex items-center gap-1">
              <span className="text-gray-400">/</span>
              <Link
                to={`/${pathSegments.slice(0, idx + 1).join("/")}`}
                className={`${
                  isLast ? "text-text_light text-base font-semibold" : "text-gray-400 text-sm"
                } hover:underline`}
              >
                {seg}
              </Link>
            </span>
          );
        })}
      </p>

      {/* Right side: Live + Settings */}
      <div className="flex items-center gap-4">
        <LiveIndicator />
        <SettingsIcon className="text-gray-500 cursor-pointer hover:text-gray-300 transition-colors" />
      </div>
    </header>
  );
};

export default Header;