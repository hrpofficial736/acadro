"use client";

import React from "react";
import { IoSearch } from "react-icons/io5";

const SearchField = () => {
  return (
    <div className="relative rounded-3xl min-w-[300px] md:min-w-[450px]">
      <input
        type="text"
        className="py-4 pr-2 pl-14 bg-surface rounded-3xl w-full h-full focus:outline-none max-md:text-sm"
        placeholder="Search for tutors and students..."
      />
      <IoSearch className="absolute top-1/2 -translate-y-1/2 left-5 text-primaryText text-xl" />
    </div>
  );
};

export default SearchField;
