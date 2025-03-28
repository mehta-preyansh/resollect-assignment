import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useState } from "react";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const closeSidebar = () => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  };
  return (
    <div className="dashboard-layout flex flex-col h-screen">
      <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} crossIcon={isSidebarOpen}/>
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar}/>
      <main className="content flex flex-col p-4 overflow-hidden lg:ml-72 flex-1" onClick={closeSidebar}>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
