import React from "react";
import logo from "@/assets/images/logo.png";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa6";

const Logo = () => {
  return (
    <div className="shadow-md rounded-xl flex justify-between items-center px-2 py-3 gap-5">
      <div className="flex justify-center items-center gap-2">
        <Image src={logo} alt="Talent" width={40} height={40} className="w-7" />
        <p>App</p>
      </div>
      <FaChevronDown />
    </div>
  );
};

export default Logo;
