import React from "react";
import Button from "../Shared/Button";

const ButtonGroups = () => {
  return (
    <div className="flex justify-between items-center gap-3">
      <Button
        text="Get Started"
        className="bg-none text-blue text-sm btn-link no-underline font-bold"
      />
      <Button
        text="Login"
        className="text-white text-sm font-bold bg-blue rounded-3xl px-10 py-4"
      />
    </div>
  );
};

export default ButtonGroups;
