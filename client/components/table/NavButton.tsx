import React from "react";

interface NavButtonProps {
  func: () => void;
  show?: boolean;
}

export const NavButton: React.FC<NavButtonProps> = ({
  func,
  show = true,
  children,
}) => {
  return (
    <button
      className={`transition duration-150 ease-out rounded-sm py-2 px-4 bg-gray-800 m-2 focus:outline-none text-gray-500 ${
        show
          ? "focus:text-white focus:bg-gray-700 hover:bg-gray-700 hover:text-white"
          : "cursor-not-allowed"
      } h-12 disabled:bg-opacity-50`}
      onClick={func}
      disabled={!show}
    >
      {children}
    </button>
  );
};
