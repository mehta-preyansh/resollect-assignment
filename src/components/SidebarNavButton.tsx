import { NavLink } from "react-router-dom";

interface SidebarItemProps {
  icon: (props?: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
  label: string;
  path: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon , label, path }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => `flex items-center gap-3 px-2 py-3 rounded-md transition-all 
      ${isActive ? "bg-linear-to-r from-[#116af5] to-[#558df6] text-white" : "text-gray-300 hover:bg-gray-400"} `}
    >
      {icon()}
      <span className="text-sm font-medium">{label}</span>
    </NavLink>
  );
};

export default SidebarItem;
