import { Link } from "react-router-dom";
import { menuItems } from "../routes/menu";
import logo from "../assets/logo_full_dark.svg";
import SidebarItem from "./SidebarNavButton";

const Sidebar = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  return (
    <>
      <aside
        className={`z-10 fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white border-r border-gray-200 justify-between flex flex-col p-4 transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:w-72`}
      >
        <nav>
          {menuItems.map((item) => (
            <div
              key={item.path}
              className="block px-2 py-2 rounded-md transition-all"
              onClick={onClose}
            >
              <SidebarItem icon={item.icon} label={item.label} path={item.path}/>
            </div>
          ))}
        </nav>
        <div className="flex justify-center items-center space-x-2">
          <p>powered by</p>
          <Link to="/" aria-label="Resollect Home">
            <img src={logo} alt="Resollect Logo" className="h-8" />
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
