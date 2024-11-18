import React, { useState } from "react";

const Sidebar: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const title = "Delivery Form";

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-96 bg-blue-900 text-white transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform lg:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-blue-700">
            <h1 className="text-lg font-bold">{title}</h1>
            <button
              className="lg:hidden p-2"
              onClick={() => setSidebarOpen(false)}
            >
              ✖️
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col w-full">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-4 py-4 bg-white border-b lg:hidden">
          <button
            className="p-2 text-blue-900"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>
          <h1 className="text-lg font-bold text-blue-900">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
