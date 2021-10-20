import React from "react";

interface BodyWrapperProps {}

export const BodyWrapper: React.FC<BodyWrapperProps> = ({ children }) => {
  return <div className="max-w-7xl mx-auto p-12 mb-auto w-full">{children}</div>;
};
