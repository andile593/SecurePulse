import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full min-h-screen">
      {/* Sidebar stays sticky on the left */}
      <div className="w-64 h-screen sticky top-0">
        <Sidebar />
      </div>

      {/* Main area */}
      <div className="flex-1 flex flex-col">
        {/* Header sticky at top */}
        <div className="sticky top-0 z-20">
          <Header />
        </div>

        {/* Scrollable content */}
        <main className="flex-1 overflow-auto p-4 bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
