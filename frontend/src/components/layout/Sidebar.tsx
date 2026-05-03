import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import emblem from "@/assets/Emblem.png";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PhoneIcon from "@mui/icons-material/Phone";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth } from "@/context/AuthContext";

const navLinks = [
  { name: "Dashboard",        path: "/",           icon: DashboardIcon },
  { name: "Call Activity",    path: "/ai-calls",   icon: PhoneIcon },
  { name: "OB Feed",          path: "/OBlogs",     icon: MenuBookIcon },
  { name: "Dispatch Manager", path: "/dispatches", icon: LocalShippingIcon },
];

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [collapsed, setCollapsed] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const initials = user?.name
    ? user.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
    : "?";

  return (
    <aside
      className={`bg-primary shadow-lg min-h-screen flex flex-col transition-all duration-300 ease-in-out ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Logo */}
      <div className={`flex items-center justify-center border-b border-white/5 transition-all duration-300 ${
        collapsed ? "h-16 px-3" : "h-24 px-4"
      }`}>
        {collapsed ? (
          <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
            <span className="text-white text-xs font-bold">SP</span>
          </div>
        ) : (
          <img className="object-contain h-14" src={emblem} alt="SecurePulse Logo" />
        )}
      </div>

      {/* Nav links */}
      <nav className="flex flex-col p-3 space-y-1 flex-1">
        {navLinks.map((link) => {
          const Icon = link.icon;
          const isActive =
            location.pathname === link.path ||
            (link.path !== "/" && location.pathname.startsWith(link.path));

          return (
            <Link
              key={link.path}
              to={link.path}
              title={collapsed ? link.name : undefined}
              className={`flex items-center gap-3 p-2.5 rounded-lg transition-all duration-150 ${
                isActive
                  ? "bg-white/15 text-white"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              } ${collapsed ? "justify-center" : ""}`}
            >
              <Icon fontSize="small" className="flex-shrink-0" />
              {!collapsed && (
                <span className="text-sm font-medium truncate">{link.name}</span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom section: user info + collapse toggle */}
      <div className="p-3 border-t border-white/5 space-y-2">

        {/* User info */}
        {collapsed ? (
          <div
            className="flex justify-center py-1"
            title={user?.name ?? "User"}
          >
            <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-xs font-bold text-black flex-shrink-0">
              {initials}
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3 px-1 py-2">
            <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-xs font-bold text-black flex-shrink-0">
              {initials}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium truncate">{user?.name ?? "User"}</p>
              <p className="text-white/40 text-xs truncate">{user?.email ?? ""}</p>
            </div>
            <button
              onClick={handleLogout}
              title="Logout"
              className="text-white/40 hover:text-red-400 transition-colors flex-shrink-0"
            >
              <LogoutIcon fontSize="small" />
            </button>
          </div>
        )}

        {/* Collapse toggle */}
        <button
          onClick={() => setCollapsed((c) => !c)}
          className={`w-full flex items-center gap-2 p-2 rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition-all ${
            collapsed ? "justify-center" : ""
          }`}
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? (
            <ChevronRightIcon fontSize="small" />
          ) : (
            <>
              <ChevronLeftIcon fontSize="small" />
              <span className="text-xs font-medium">Collapse</span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;