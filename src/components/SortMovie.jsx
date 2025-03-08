import React from "react";

const SortMovie = ({ setFilteredData }) => {
  return (
    <div>
      <label
        htmlFor="country"
        className="text-md font-semibold xs:text-sm text-gray-700 mb-1"
      >
        Sort By Year
      </label>
      <select
        onChange={(e) => {
          console.log(e.target.value);
          if (e.target.value == "newest") {
            setFilteredData((currentData) => {
              return [...currentData].sort(
                (a, b) => a.release_year - b.release_year
              );
            });
          } else {
            setFilteredData((currentData) => {
              return [...currentData].sort(
                (a, b) => b.release_year - a.release_year
              );
            });
          }
        }}
        name="country"
        id="country"
        className="h-[50px] rounded-[5px] text-md xs:text-sm border border-[#D1D5DB] w-full px-2 mt-2"
      >
        <option value="newest" defaultValue="">
          Newest First
        </option>
        <option value="oldest">Oldest First</option>
      </select>
    </div>
  );
};

export default SortMovie;
