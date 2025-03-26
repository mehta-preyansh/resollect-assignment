import React from "react";

interface PrimaryButtonProps {
  icon?: React.ReactNode;
  label: string;
  onClick: () => void;
  focusStateStatic?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  icon,
  label,
  onClick,
  focusStateStatic = true,
}) => {
  return (
    <button
      onClick={onClick}
      className={`primary-button flex items-center gap-2 ${
        focusStateStatic
          ? "bg-[#3761e2] text-white"
          : "text-gray-300 hover:bg-gray-400"
      } rounded-md px-4 py-[6px] cursor-pointer`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

export default PrimaryButton;
