import controller from "../services/request";

const AddMovie = ({
  newMovie,
  setNewMovie,
  setData,
  selectedGenre,
  genres,
  setSelectedGenre,
}) => {
  return (
    <section className="p-1 xs:p-8 flex items-center justify-center flex-col gap-[0.8rem]">
      <div className="text-center">
        <h1 className="text-slate-600 font-bold text-4xl mb-2">
          Welcome to My App
        </h1>
        <p className="text-slate-400 mb-10 text-[18px]">
          Manage your movie collection
        </p>
      </div>
      <div className="add-box w-5/6 rounded-lg p-8 bg-white">
        <h2 className="sm:text-xl text-[12px] font-bold mb-6">Add New Movie</h2>
        <form
          onSubmit={async () => {
            const apiResponse = await controller.post(newMovie);
            apiResponse.data.forEach((x) => {
              setData([...data, x]);
              setNewMovie({ title: "", imdb: "", year: "", release_year: "" });
            });
          }}
        >
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
              <div>
                <label
                  htmlFor="subcategory"
                  className="text-md font-semibold xs:text-sm text-gray-700 mb-1"
                >
                  Enter movie title
                </label>
                <input
                  onChange={(e) =>
                    setNewMovie({ ...newMovie, title: e.target.value })
                  }
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
                  htmlFor="subcategory"
                  className="text-md font-semibold xs:text-sm text-gray-700 mb-1"
                >
                  IMDb Rating
                </label>
                <input
                  onChange={(e) =>
                    setNewMovie({ ...newMovie, imdb: e.target.value })
                  }
                  type="text"
                  id="title"
                  className="h-[50px] rounded-[5px] text-md xs:text-sm border border-[#D1D5DB] w-full px-4 mt-2"
                  name="title"
                  placeholder="Enter IMDb rating (0-10)"
                  step="0.1"
                  required
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
              <div>
                <label
                  htmlFor="country"
                  className="text-md font-semibold xs:text-sm text-gray-700 mb-1"
                >
                  Genre
                </label>
                <select
                  value={selectedGenre || "selected"}
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
              </div>
              <div>
                <label
                  htmlFor="subcategory"
                  className="text-md font-semibold xs:text-sm text-gray-700 mb-1"
                >
                  Release Year
                </label>
                <input
                  onChange={(e) =>
                    setNewMovie({ ...newMovie, release_year: e.target.value })
                  }
                  type="text"
                  id="title"
                  className="h-[50px] rounded-[5px] text-md xs:text-sm border border-[#D1D5DB] w-full px-4 mt-2"
                  name="title"
                  placeholder="Enter release year"
                  required
                />
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-200 flex justify-end">
            <button
              type="submit"
              className=" w-full text-sm sm:text-base bg-sky-950 rounded-[5px] p-[15px_25px] gap-[10px] text-white cursor-pointer"
            >
              Add Movie
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddMovie;
