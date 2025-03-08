import React, { useState } from "react";
import GenreSelect from "./GenreSelect";
import controller from "../services/request";

const EditMovie = ({
  movie,
  updateMovie,
  setUpdateMovie,
  editMovie,
  setEditMovie,
  setData,
  genres,
  selectedGenre,
  setSelectedGenre,
}) => {
  return (
    <div className="edit-box mb-6 mt-6 border-2 border-sky-400 border-dashed rounded-lg p-8 bg-white">
      <h2 className="sm:text-xl text-[12px] font-bold mb-6">Edit Movie</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const editData = async () => {
            try {
              await controller.updateOne(updateMovie, movie.id);
              setData((currentData) =>
                currentData.map((movie) =>
                  movie.id === updateMovie.id
                    ? { ...movie, ...updateMovie }
                    : movie
                )
              );
              setUpdateMovie(null);
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          };

          editData();
        }}
      >
        <div className="space-y-6">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
            <div>
              <label
                htmlFor="title"
                className="text-md font-semibold xs:text-sm text-gray-700 mb-1"
              >
                Enter movie title
              </label>
              <input
                onChange={(e) => {
                  setUpdateMovie((currentState) => {
                    return { ...currentState, title: e.target.value };
                  });
                }}
                defaultValue={movie.title}
                type="text"
                id="title"
                className="h-[50px] rounded-[5px] text-md xs:text-sm border border-[#D1D5DB] w-full px-4 mt-2"
                name="title"
                placeholder="Enter movie title"
                required
              />
            </div>
            <div>
              <label
                htmlFor="imdb"
                className="text-md font-semibold xs:text-sm text-gray-700 mb-1"
              >
                IMDb Rating
              </label>
              <input
                onChange={(e) => {
                  setUpdateMovie((currentState) => {
                    return { ...currentState, imdb: e.target.value };
                  });
                }}
                defaultValue={movie.imdb}
                type="number"
                id="imdb"
                className="h-[50px] rounded-[5px] text-md xs:text-sm border border-[#D1D5DB] w-full px-4 mt-2"
                name="imdb"
                placeholder="Enter IMDb rating (0-10)"
                step="0.1"
                required
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
            <div>
              <label
                htmlFor="genre"
                className="text-md font-semibold xs:text-sm text-gray-700 mb-1"
              >
                Genre
              </label>
              <GenreSelect
                genres={genres}
                selectedGenre={selectedGenre}
                setSelectedGenre={(genre) => {
                  setSelectedGenre(genre);
                  setUpdateMovie((prev) => ({ ...prev, genre }));
                }}
              />
            </div>
            <div>
              <label
                htmlFor="year"
                className="text-md font-semibold xs:text-sm text-gray-700 mb-1"
              >
                Release Year
              </label>
              <input
                onChange={(e) => {
                  setUpdateMovie((currentState) => {
                    return {
                      ...currentState,
                      release_year: e.target.value,
                    };
                  });
                }}
                defaultValue={movie.release_year}
                type="number"
                id="year"
                className="h-[50px] rounded-[5px] text-md xs:text-sm border border-[#D1D5DB] w-full px-4 mt-2"
                name="year"
                placeholder="Enter release year"
                required
              />
            </div>
          </div>
        </div>
        <div className="update-box mt-8 pt-6 border-t border-gray-200 flex justify-end gap-6">
          <button
            onClick={() => {
              setEditMovie(false);
              setUpdateMovie(null);
            }}
            type="reset"
            className="cancel text-sm sm:text-base p-[10px_25px] rounded-[5px] border border-gray-300 cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="update bg-sky-950 text-sm sm:text-base rounded-[5px] p-[10px_25px] gap-[10px] text-white cursor-pointer"
          >
            Update Movie
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditMovie;
