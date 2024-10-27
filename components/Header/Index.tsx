import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import ButtonGroups from "./Button";

const Header = () => {
  return (
    <header className="shadow-lg py-3">
      <div className="flex justify-between items-center container mx-auto">
        <Logo />
        <Search />
        <ButtonGroups />
      </div>
    </header>
  );
};

export default Header;
