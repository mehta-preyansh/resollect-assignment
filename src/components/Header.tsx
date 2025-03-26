import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import fullLogo from "../assets/logo_full_dark.svg";
import shortLogo from "../assets/logo_circle_dark.png";

interface HeaderProps {
  onMenuClick: () => void;
  crossIcon: boolean;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, crossIcon }) => {
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 1024);

  // Update state on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const user = {
    name: "Preyansh Mehta",
    email: "preyansh.dev@gmail.com",
    avatar: "https://i.pravatar.cc/500", // Placeholder avatar
  };

  return (
    <header className="flex justify-between items-center bg-white border-b border-gray-200 sticky top-0 px-6 py-4 z-40 h-16">
      <div className="flex items-center">
        {isMobile && (
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-md hover:bg-gray-200 transition"
            aria-label="Open Sidebar"
          >
            {crossIcon ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        )}
        <Link to="/" aria-label="Resollect Home">
          <img
            src={isMobile ? shortLogo : fullLogo}
            alt="Resollect Logo"
            className="h-8"
          />
        </Link>
      </div>

      <section className="relative">
        <button
          className="flex items-center space-x-2"
          onClick={() => setDropdownOpen(!isDropdownOpen)}
          aria-haspopup="true"
          aria-expanded={isDropdownOpen}
        >
          <figure className="w-10 h-10">
            <img
              src={user.avatar}
              alt={`${user.name}'s avatar`}
              className="rounded-full border"
            />
          </figure>

          <div className="hidden sm:block text-left">
            <span className="block text-sm font-medium">{user.name}</span>
            <span className="block text-xs text-gray-500">{user.email}</span>
          </div>

          <ChevronDown size={18} className={`text-gray-600 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : "rotate-0"}`} /> 
        </button>

        {isDropdownOpen && (
          <nav className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md p-2">
            <a
              href="/profile"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Profile
            </a>
            <a
              href="/settings"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Settings
            </a>
            <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
              Logout
            </button>
          </nav>
        )}
      </section>
    </header>
  );
};

export default Header;
