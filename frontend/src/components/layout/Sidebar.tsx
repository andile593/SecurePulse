
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Clients", path: "/clients" },
  { name: "Alarms", path: "/alarms" },
  { name: "Guards", path: "/guards" },
  { name: "Sites", path: "/sites" },
  { name: "Dispatches", path: "/dispatches" },
  { name: "Vehicles", path: "/vehicles" },
  { name: "AI Calls", path: "/ai-calls" },
  { name: "Users", path: "/users" },
  { name: "OB Logs", path: "/OBlogs" },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 bg-white shadow-lg min-h-screen">
      <div className="p-4 font-bold text-lg border-b">SecurePulse</div>
      <nav className="flex flex-col p-4 space-y-2">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`p-2 rounded hover:bg-gray-100 ${
              location.pathname.startsWith(link.path) ? "bg-gray-200" : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
