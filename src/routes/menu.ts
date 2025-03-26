export interface MenuItem {
  label: string;
  path: string;
  component: React.FC;
}

// import PortfolioPage from "../pages/PortfolioPage";
import WorkInProgressPage from "../pages/WorkInProgressPage";

export const menuItems: MenuItem[] = [
  { label: "Dashboard", path: "/dashboard", component: WorkInProgressPage },
  { label: "Portfolio", path: "/portfolio", component: WorkInProgressPage },
  { label: "Notifications", path: "/notifications", component: WorkInProgressPage },
  { label: "Notices", path: "/notices", component: WorkInProgressPage },
  { label: "Auction", path: "/auction", component: WorkInProgressPage },
  { label: "Data Upload", path: "/data-upload", component: WorkInProgressPage },
  { label: "Control Panel", path: "/control-panel", component: WorkInProgressPage },
  { label: "User Management", path: "/user-management", component: WorkInProgressPage },
  { label: "Permissions", path: "/permissions", component: WorkInProgressPage },
];
