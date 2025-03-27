import React from "react";

interface PrimaryButtonProps {
  icon?: React.ReactNode;
  label: string;
  onClick: () => void;
  focused?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  icon,
  label,
  onClick,
  focused = true,
}) => {
  return (
    <button
      onClick={onClick}
      className={`primary-button flex items-center gap-2 ${
        focused
          ? "bg-[#3761e2] text-white"
          : "text-gray-400 border border-gray-300"
      } rounded-md px-4 py-[6px] cursor-pointer`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

export default PrimaryButton;
