import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-semibold">SecurePulse Admin</h1>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">Welcome, Admin</span>
        <button className="px-3 py-1 rounded bg-red-100 text-red-600 hover:bg-red-200 text-sm">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
