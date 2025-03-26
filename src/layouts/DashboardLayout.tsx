import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { menuItems } from "../routes/menu";
// import "./DashboardLayout.css";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  const handleTabSelect = (label: string) => {
    const selectedItem = menuItems.find((item) => item.label === label);
    if (selectedItem) {
      setActiveTab(selectedItem.path);
      navigate(selectedItem.path);
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar onSelectTab={handleTabSelect} />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
