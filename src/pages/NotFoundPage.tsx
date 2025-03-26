import SidebarItem from "../components/SidebarNavButton";
import { ArrowLeft } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <div className="flex justify-center items-center">
        <SidebarItem label="Go Back" icon={()=> <ArrowLeft/>} path="/portfolio" />
      </div>
    </div>
  );
};

export default NotFoundPage;
