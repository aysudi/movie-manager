import React, { useState } from "react";

const GenreSelect = ({ selectedGenre, setSelectedGenre, genres }) => {
  return (
    <select
      value={selectedGenre}
      onChange={(e) => {
        setSelectedGenre(e.target.value);
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
  );
};

export default GenreSelect;
