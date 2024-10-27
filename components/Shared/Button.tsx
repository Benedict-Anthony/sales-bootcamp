import React from "react";

const Button = ({ text, className }: { text: string; className?: string }) => {
  return (
    <button className={`btn flex justify-center items-center ${className}`}>
      {text}
    </button>
  );
};

export default Button;
