import React from "react";

interface ModalButtonProps {
  onClick: () => void;
  text: string;
  danger?: boolean;
}

export const ModalButton: React.FC<ModalButtonProps> = ({
  onClick,
  text,
  danger,
}) => {
  return (
    <button
      type="button"
      className={`inline-flex justify-center px-4 py-2 text-sm font-medium  border border-transparent rounded-md  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2  m-2 ${
        danger
          ? "focus-visible:ring-red-500 hover:bg-red-200 text-red-900 bg-red-100"
          : "focus-visible:ring-blue-500 hover:bg-blue-200 text-blue-900 bg-blue-100"
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
