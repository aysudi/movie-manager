import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import EditMovie from "./EditMovie";
import controller from "../services/request";
import Swal from "sweetalert2";

const MovieItem = ({
  movie,
  setUpdateMovie,
  updateMovie,
  setData,
  data,
  genres,
  selectedGenre,
  setSelectedGenre,
}) => {
  const [editMovie, setEditMovie] = useState(false);
  return (
    <div className="movie-item">
      <div className="movie-info border border-gray-200 p-8 rounded-lg flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold">{movie.title}</h3>
          <div className="details flex gap-4 text-gray-500">
            <span>Year: {movie.release_year}</span>
            <span>IMDb: {movie.imdb}</span>
            <span>Genre: {movie.genre}</span>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div
            onClick={() => {
              setEditMovie(true);
              setUpdateMovie(movie);
            }}
            className="edit font-semibold flex gap-2 items-center p-[8px_12px] rounded-lg border border-gray-200 cursor-pointer"
          >
            <FaRegEdit className="text-xl" />
            <span>Edit</span>
          </div>
          <div
            onClick={() => {
              Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
              }).then(async (result) => {
                if (result.isConfirmed) {
                  await controller.deleteOne(movie.id);
                  setData((currentData) => {
                    return currentData.filter((x) => x.id != movie.id);
                  });
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                  });
                }
              });
            }}
            className="delete text-white font-semibold bg-red-500 flex gap-2 items-center p-[8px_12px] rounded-lg cursor-pointer"
          >
            <RiDeleteBinLine className="text-xl" />
            <span>Delete</span>
          </div>
        </div>
      </div>
      {editMovie && (
        <EditMovie
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
          genres={genres}
          setEditMovie={setEditMovie}
          editMovie={editMovie}
          movie={movie}
          updateMovie={updateMovie}
          setUpdateMovie={setUpdateMovie}
          setData={setData}
          data={data}
        />
      )}
    </div>
  );
};

export default MovieItem;
