import React, { useState } from "react";

const SearchMovie = ({ setSearchQuery }) => {
  return (
    <div>
      <label
        htmlFor="search"
        className="text-md font-semibold xs:text-sm text-gray-700 mb-1"
      >
        Search Movies
      </label>
      <input
        onChange={(e) => {
          setSearchQuery(e.target.value.trim().toLowerCase());
        }}
        type="text"
        id="search"
        className="h-[50px] rounded-[5px] text-md xs:text-sm border border-[#D1D5DB] w-full px-4 mt-2"
        name="search"
        placeholder="Search by title..."
      />
    </div>
  );
};

export default SearchMovie;
