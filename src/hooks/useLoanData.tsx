import { createContext, useContext, useEffect, useState } from "react";

const LoansDataContext = createContext<{ data: any[]; loading: boolean; error: string | null }>({
  data: [],
  loading: true,
  error: null,
});

export const LoansDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const storedData = sessionStorage.getItem("portfolioData");

      if (storedData) {
        setData(JSON.parse(storedData));
        setLoading(false);
        return;
      }

      try {
        const response = await fetch("http://resollect-dummy-backend-production.up.railway.app");
        const result = await response.json();
        sessionStorage.setItem("portfolioData", JSON.stringify(result));
        setData(result);
      } catch (error) {
        setError("Failed to fetch portfolio data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <LoansDataContext.Provider value={{ data, loading, error }}>
      {children}
    </LoansDataContext.Provider>
  );
};

export const useLoanData = () => useContext(LoansDataContext);
