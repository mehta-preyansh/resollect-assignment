import { ChevronDown, FilterIcon } from "lucide-react";
import PrimaryButton from "../components/PrimaryButton";
import { useEffect, useRef, useState } from "react";
import PortfolioTable from "../components/PortfolioTable";
import { useLoanData } from "../hooks/useLoanData";
import { setupFiltersArray } from "../utils/portfolioDataUtils";

const PortfolioPage = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [sortingIndex, setSortingIndex] = useState("display");
  const sortingOptions = {
    display: "Display Records",
    select: "Select Records",
  };
  const [selectedTags, setSelectedTags] = useState<string[]>(["All"]);
  const { chipTags, setFilters } = useLoanData();

  const handleSelectTag = (tag: string) => {
    if (tag === "All") {
      setSelectedTags(["All"]);
    } else {
      let updatedTags = selectedTags.includes(tag)
        ? selectedTags.filter((t) => t !== tag)
        : [...selectedTags, tag];

      if (updatedTags.length > 0) {
        updatedTags = updatedTags.filter((t) => t !== "All");
      }
      setSelectedTags((prev) => [...updatedTags]);
    }
  };

  useEffect(() => {
    if (selectedTags.length === 0) {
      setSelectedTags(["All"]);
    }
    const filters = setupFiltersArray(selectedTags);
    setFilters(filters);
  }, [selectedTags]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col h-full gap-4">
      {/* HEADING */}
      <h1 className="text-xl sm:text-2xl font-bold">Portfolio</h1>
      {/* CATEGORIES */}
      <div className="categories-wrapper flex items-center gap-2 text-[14px] flex-wrap">
        {/* Map across the categories and display them */}
        {["All"].concat(chipTags).map((value) => (
          <PrimaryButton
            key={value}
            label={value}
            focused={selectedTags.includes(value)}
            onClick={() => handleSelectTag(value)}
          />
        ))}
      </div>
      {/* SEARCH AND FILTERS */}
      <div className="search-and-filters-wrapper flex sm:items-center justify-between sm:flex-row flex-col gap-2">
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
              className="flex items-center space-x-2 border border-gray-300 rounded-md px-4 py-[6px] cursor-pointer"
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
            >
              <span>
                {sortingOptions[sortingIndex as keyof typeof sortingOptions]}
              </span>

              <ChevronDown
                size={14}
                className={`text-gray-600 transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {isDropdownOpen && (
              <button
                className="absolute right-0 mt-2 w-full bg-white shadow-lg rounded-md p-2 cursor-pointer"
                onClick={() => {
                  setSortingIndex(
                    sortingIndex === "display" ? "select" : "display"
                  );
                  setDropdownOpen(false);
                }}
              >
                {sortingIndex === "display"
                  ? "Select Records"
                  : "Display Records"}
              </button>
            )}
          </section>
          <PrimaryButton
            icon={<FilterIcon size={16} />}
            label="More Filters"
            onClick={() => {}}
          />
        </div>
      </div>
      <div className="applied-filters-wrapper">
        <div className="flex flex-wrap items-center justify-between gap-2 p-2 border border-gray-300 rounded-md bg-white">
          <div className="flex flex-wrap gap-2"></div>
          <span className="text-gray-500 text-[14px] font-normal">
            0 loans selected
          </span>
        </div>
      </div>
      {/* LOAN TABLE */}
      <PortfolioTable />
    </div>
  );
};

export default PortfolioPage;
