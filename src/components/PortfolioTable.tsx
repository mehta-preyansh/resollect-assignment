import { ArrowDownUp } from "lucide-react";
import { useLoanData } from "../hooks/useLoanData";
import { formatLoanData } from "../utils/portfolioDataUtils";
import { LoanHeaders } from "../constants";
import { Loan } from "../types";
import { useEffect } from "react";

const LoanTable = () => {
  const { filteredLoans, loading, filters } = useLoanData();

  if (loading)
    return <p className="text-center text-gray-600">Loading loans...</p>;
  if (filteredLoans.length === 0)
    return <p className="text-center text-gray-600">No data available</p>;

  const headers = LoanHeaders;
  return (
    <div className="flex-grow overflow-auto border border-gray-300 rounded-md">
      <table className="w-auto whitespace-nowrap">
        {/* Table Head */}
        <thead className="border-b border-gray-300">
          <tr className="text-left text-[14px] text-gray-400">
            {headers.map((header) => (
              <th
                key={header}
                className="px-4 py-2 capitalize font-semibold whitespace-nowrap"
              >
                <div className="flex items-center gap-2">
                  {/* Format CamelCase */}
                  {header.replace(/([A-Z])/g, " $1").trim()}{" "}
                  <ArrowDownUp size={16} />
                </div>
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {filteredLoans.map((loan, index) => (
            <tr
              key={loan.loanNumber}
              className={`border-b border-gray-300 ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
            >
              {headers.map((key) => (
                <td key={key} className="px-4 py-2 break-words">
                  {formatLoanData(loan[key as keyof Loan])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoanTable;
