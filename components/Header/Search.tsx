import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";

const Search = () => {
  return (
    <form className="relative w-1/3 hidden md:block">
      <input
        type="text"
        className="border py-2 px-2 rounded-3xl w-full pl-7"
        placeholder="Andriod"
      />
      <FaSearch className="absolute top-0 left-0 text-lightGray mt-3 ml-1" />
      <button className="absolute top-0 right-0 bottom-0 px-10 bg-lightGray rounded-r-3xl gap-1 flex justify-center items-center text-dark">
        All <FaChevronDown className="inline" />
      </button>
    </form>
  );
};

export default Search;
