import { ChevronDown, FilterIcon } from "lucide-react";
import PrimaryButton from "../components/PrimaryButton";
import { useLoanData } from "../hooks/useLoanData";
import { useRef, useState } from "react";

const PortfolioPage = () => {
  const { data, loading, error } = useLoanData();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <h1 className="text-xl sm:text-2xl font-bold py-2">Portfolio</h1>
      <div className="categories-wrapper py-2 flex items-center gap-2 text-[14px] flex-wrap">
        {/* Map across the categories and display them */}
        {Array.from({ length: 6 }).map((_, index) => (
          <PrimaryButton
            label="Hello"
            focusStateStatic={true}
            onClick={() => {}}
          />
        ))}
      </div>
      <div className="search-and-filters-wrapper flex sm:items-center justify-between py-2 sm:flex-row flex-col gap-2">
        <div className="search-wrapper items-center flex border border border-gray-300 rounded-sm px-4 py-[6px] sm:w-[30%] min-w-[200px] w-full">
          <input
            className="text-[14px] placeholder-gray-400 outline-none"
            type="text"
            placeholder="Search Loan Number"
          />
        </div>
        <div className="filters-wrapper flex items-center gap-2 text-xs sm:text-sm text-[14px]">
          <section className="relative z-0" ref={dropdownRef}>
            <button
              className="flex items-center space-x-2 border border-gray-300 rounded-md px-4 py-[6px]"
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
            >
              <span>Select records</span>

              <ChevronDown
                size={14}
                className={`text-gray-600 transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
          </section>
          <PrimaryButton
            icon={<FilterIcon size={16} />}
            label="More Filters"
            onClick={() => {}}
          />
        </div>
      </div>
      <div className="applied-filters-wrapper">
        <div className="flex flex-wrap items-center justify-between gap-2 p-2 mt-4 border border-gray-300 rounded-md bg-white">
          <div className="flex flex-wrap gap-2">
            
          </div>
          <span className="text-gray-500 text-[14px] font-normal">0 loans selected</span>
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;
