import React from "react";

export interface MenuItem {
  label: string;
  path: string;
  component: React.FC;
  icon: (props?: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
}

import {
  LayoutDashboard,
  UserRound,
  Bell,
  Mail,
  MessageSquare,
  FileUp,
  GitMerge,
  Users,
  Lock,
} from "lucide-react";

import PortfolioPage from "../pages/PortfolioPage";
import WorkInProgressPage from "../pages/WorkInProgressPage";

export const menuItems: MenuItem[] = [
  {
    label: "Dashboard",
    icon: (props) => <LayoutDashboard {...props} />,
    path: "/dashboard",
    component: WorkInProgressPage,
  },
  {
    label: "Portfolio",
    icon: (props) => <UserRound {...props} />,
    path: "/portfolio",
    component: PortfolioPage,
  },
  {
    label: "Notifications",
    icon: (props) => <Bell {...props} />,
    path: "/notifications",
    component: WorkInProgressPage,
  },
  {
    label: "Notices",
    icon: (props) => <Mail {...props} />,
    path: "/notices",
    component: WorkInProgressPage,
  },
  {
    label: "Auction",
    icon: (props) => <MessageSquare {...props} />,
    path: "/auction",
    component: WorkInProgressPage,
  },
  {
    label: "Data Upload",
    icon: (props) => <FileUp {...props} />,
    path: "/data-upload",
    component: WorkInProgressPage,
  },
  {
    label: "Control Panel",
    icon: (props) => <GitMerge {...props} />,
    path: "/control-panel",
    component: WorkInProgressPage,
  },
  {
    label: "User Management",
    icon: (props) => <Users {...props} />,
    path: "/user-management",
    component: WorkInProgressPage,
  },
  {
    label: "Permissions",
    icon: (props) => <Lock {...props} />,
    path: "/permissions",
    component: WorkInProgressPage,
  },
];
