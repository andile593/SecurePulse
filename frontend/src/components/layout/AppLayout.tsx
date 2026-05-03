import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full min-h-screen">
      {/* Sidebar manages its own width internally */}
      <div className="h-screen sticky top-0 flex-shrink-0">
        <Sidebar />
      </div>

      {/* Main area */}
      <div className="flex-1 flex flex-col min-w-0">
        <div className="sticky top-0 z-20">
          <Header />
        </div>
        <main className="flex-1 overflow-auto bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;