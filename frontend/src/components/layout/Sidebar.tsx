import { Link, useLocation } from "react-router-dom";
import emblem from "@/assets/Emblem.png";

const navLinks = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Call Activity", path: "/ai-calls" },
  { name: "OB Feed", path: "/OBlogs" },
  { name: "Dispatch Manager", path: "/dispatches" },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 bg-primary shadow-lg min-h-screen">
      <div className="w-64 h-27 flex justify-center items-center">
        <img
          className="object-cover"
          src={emblem}
          alt="Logo"
        />
      </div>

      <nav className="flex flex-col p-4 space-y-2">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`p-2 rounded text-text_light ${
              location.pathname.startsWith(link.path) ? "bg-primary-200" : ""
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
