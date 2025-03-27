import { createContext, useContext, useEffect, useState } from "react";
import { Loan } from "../types";

const LoansDataContext = createContext<{
  loans: Loan[];
  filteredLoans: Loan[];
  loading: boolean;
  error: string | null;
  chipTags: string[];
  setFilters: (filters: { [key: string]: any }) => void;
  setSortConfig: (sortConfig: {
    key: string;
    direction: "asc" | "desc";
  }) => void;
  filters: { [key: string]: any };
}>({
  loans: [],
  filteredLoans: [],
  loading: true,
  error: null,
  chipTags: [],
  setFilters: () => {},
  setSortConfig: () => {},
  filters: {},
});

export const LoansDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loans, setLoans] = useState<Loan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filteredLoans, setFilteredLoans] = useState<Loan[]>([]);
  const [filters, setFilters] = useState<{ [key: string]: any }>({});
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "asc" | "desc";
  } | null>(null);
  const [chipTags, setChipTags] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const storedData = sessionStorage.getItem("portfolioData");

      if (storedData) {
        setLoans(JSON.parse(storedData).loans);
        console.log(JSON.parse(storedData).loans);
        setFilteredLoans(JSON.parse(storedData).loans);
        setChipTags(JSON.parse(storedData).chipTags);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          "http://resollect-dummy-backend-production.up.railway.app"
        );
        const result = await response.json();
        sessionStorage.setItem("portfolioData", JSON.stringify(result));
        setLoans(result.loans);
        setFilteredLoans(result.loans);
        setChipTags(result.chipTags);
      } catch (error) {
        setError("Failed to fetch portfolio data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let updatedLoans = [...loans];

    // Apply Filters
    updatedLoans = updatedLoans.filter((loan) =>
      Object.entries(loan).every(([key, value]) => {
        if (filters[key]) {
          if (typeof filters[key] === "function") {
            return filters[key](value) === value;
          }
          return filters[key] === value;
        }
        return true; 
      })
    );

    // Apply Sorting
    if (sortConfig) {
      updatedLoans.sort((a, b) => {
        const aValue = a[sortConfig.key as keyof Loan];
        const bValue = b[sortConfig.key as keyof Loan];

        if (aValue! < bValue!) return sortConfig.direction === "asc" ? -1 : 1;
        if (aValue! > bValue!) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }

    setFilteredLoans(updatedLoans);
  }, [loans, filters, sortConfig]);

  return (
    <LoansDataContext.Provider
      value={{
        loans,
        filteredLoans,
        loading,
        error,
        chipTags,
        setFilters,
        setSortConfig,
        filters
      }}
    >
      {children}
    </LoansDataContext.Provider>
  );
};

export const useLoanData = () => useContext(LoansDataContext);
