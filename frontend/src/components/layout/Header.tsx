import { useLocation, Link } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  const formattedSegments = pathSegments.map((segment) =>
    segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
  );

  return (
    <header className={`bg-primary shadow px-6 py-4 flex items-center justify-between overflow-hidden ${className}`}>
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
                  isLast
                    ? "text-text_light text-base font-semibold"
                    : "text-gray-400 text-sm"
                } hover:underline`}
              >
                {seg}
              </Link>
            </span>
          );
        })}
      </p>

      <div className="flex items-center gap-4">
        <SettingsIcon className="text-gray-500" />
      </div>
    </header>
  );
};

export default Header;
