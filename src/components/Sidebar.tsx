import { useState } from "react";
import { menuItems } from "../routes/menu";
// import "./Sidebar.css";

const Sidebar = ({ onSelectTab }: { onSelectTab: (tab: string) => void }) => {
  const [activeTab, setActiveTab] = useState("Portfolio");

  const handleTabClick = (label: string) => {
    setActiveTab(label);
    onSelectTab(label);
  };

  return (
    <aside className="sidebar">
      <nav>
        <ul>
          {menuItems.map(({ label }) => (
            <li
              key={label}
              className={activeTab === label ? "active" : ""}
              onClick={() => handleTabClick(label)}
            >
              {label}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
