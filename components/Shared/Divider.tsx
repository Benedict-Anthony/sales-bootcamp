import React from "react";

export const Divider = ({ className }: { className?: string }) => {
  return <div className={`w-full h-[1px] bg-lightGray ${className}`}></div>;
};
