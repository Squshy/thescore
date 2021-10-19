import React from "react";

interface NavButtonProps {
  text: string;
  func: () => void;
}

export const NavButton: React.FC<NavButtonProps> = ({ func, text }) => {
  return (
    <button
      className="transition duration-150 ease-out rounded-sm py-2 px-4 bg-gray-800 m-2 focus:outline-none text-gray-500 focus:text-white focus:bg-gray-700"
      onClick={func}
    >
      {text}
    </button>
  );
};
