import React from "react";

const FilterMovie = ({
  genres,
  selectedGenre,
  setSelectedGenre,
  data,
  setFilteredData,
}) => {
  return (
    <div>
      <label
        htmlFor="genre"
        className="text-md font-semibold xs:text-sm text-gray-700 mb-1"
      >
        Filter By Genre
      </label>
      <select
        value={selectedGenre || "selected"}
        onChange={(e) => {
          setSelectedGenre(e.target.value);
          setFilteredData(() => {
            return data.filter((x) => x.genre == e.target.value);
          });
        }}
        className="p-2 h-[50px] rounded-[5px] text-md xs:text-sm border border-[#D1D5DB] w-full px-2 mt-2"
      >
        <option value="selected" disabled>
          Select Genre
        </option>
        {genres.map((genre) => (
          <option key={genre}>{genre}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterMovie;
