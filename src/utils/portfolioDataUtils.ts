export const formatLoanData = (loanKey: any) => (
  typeof loanKey === "number"
    ? loanKey.toLocaleString()
    : typeof loanKey === "boolean"
      ? loanKey
        ? "Yes"
        : "No"
      : loanKey
)

const isRecent = (date: string) => {
  const today = new Date();
  const appliedDate = new Date(date);
  const diffInDays = (today.getTime() - appliedDate.getTime()) / (1000 * 3600 * 24);
  return diffInDays <= 30;
};

export const setupFiltersArray = (selectedTags: string[]) => {
  const filterConditions: Record<string, any> = {};

  selectedTags.forEach((tag) => {
    switch (tag) {
      case "NPA":
        filterConditions["currentDPO"] = (score: number) => score > 90;
        break;
      case "DM Order issued":
        filterConditions["dmOrderIssued"] = true;
        break;
      case "Auction Scheduled":
        filterConditions["auctionScheduled"] = true;
        break;
      case "High risk":
        filterConditions["creditScore"] = (score: number) => score < 600;
        break;
      case "Recent":
        filterConditions["appliedDate"] = (date: string) => isRecent(date);
        break;
      case "Pending":
        filterConditions["status"] = "Pending";
        break;
      default:
        break;
    }
  });

  return filterConditions;
}