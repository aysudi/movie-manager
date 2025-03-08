import LoginCard from "../components/login/LoginCard";
import Navbar from "../Header/Navbar";
import AddMovie from "../components/AddMovie";
import SearchMovie from "../components/SearchMovie";
import SortMovie from "../components/SortMovie";
import FilterMovie from "../components/FilterMovie";
import MoviesList from "../components/MoviesList";
import MovieItem from "../components/MovieItem";
import React, { useEffect, useState } from "react";
import controller from "../services/request";
import styles from "./style.module.css";

const MovieDashboard = () => {
  const [isLogged, setIslogged] = useState(
    JSON.parse(localStorage.getItem("isLogged"))
  );
  if (!JSON.parse(localStorage.getItem("isLogged"))) {
    localStorage.setItem("isLogged", JSON.stringify("false"));
  }

  const [mode, setMode] = useState(JSON.parse(localStorage.getItem("mode")));
  if (!JSON.parse(localStorage.getItem("mode"))) {
    localStorage.setItem("mode", JSON.stringify("light"));
  }

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [updateMovie, setUpdateMovie] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [newMovie, setNewMovie] = useState(null);

  const genres = [
    "Action",
    "Adventure",
    "Animation",
    "Biography",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Fantasy",
    "Horror",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Thriller",
    "War",
    "Western",
    "Cyberpunk",
    "Steampunk",
    "Post-Apocalyptic",
    "Supernatural",
    "Musical",
    "Psychological Thriller",
    "Film Noir",
    "Dark Comedy",
    "Political Drama",
    "Espionage",
    "Sports",
    "Legal Drama",
    "Historical",
    "Family",
    "Slasher",
    "Found Footage",
    "Gothic Horror",
    "Science Fantasy",
    "Satire",
    "Heist",
  ];
  const [selectedGenre, setSelectedGenre] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiResponse = await controller.getAll();
        setData([...apiResponse.data]);
        setFilteredData([...apiResponse.data]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setFilteredData(() => {
      return data.filter((x) =>
        x?.title.trim().toLowerCase().includes(searchQuery)
      );
    });
  }, [searchQuery, data]);

  return (
    <>
      <Navbar
        isLogged={isLogged}
        setIsLogged={setIslogged}
        mode={mode}
        setMode={setMode}
      />
      {isLogged == "false" ? (
        <LoginCard mode={mode} setMode={setMode} setIsLogged={setIslogged} />
      ) : (
        <main className={mode == "light" ? styles.light : styles.dark}>
          <AddMovie
            setSelectedGenre={setSelectedGenre}
            genres={genres}
            selectedGenre={selectedGenre}
            newMovie={newMovie}
            setNewMovie={setNewMovie}
            setData={setData}
          />
          <section className="mt-4 p-1 xs:p-8 flex items-center justify-center mt-16">
            <div className="movies-box bg-white w-5/6 rounded-lg p-8 rounded-lg">
              <h2 className="sm:text-xl text-[12px] font-bold mb-6">
                Your Movies
              </h2>
              <form className="space-y-2 grid sm:grid-cols-3 grid-cols-1 gap-6">
                <SearchMovie setSearchQuery={setSearchQuery} />
                <SortMovie setFilteredData={setFilteredData} data={data} />
                <FilterMovie
                  setSearchQuery={setSearchQuery}
                  data={data}
                  genres={genres}
                  selectedGenre={selectedGenre}
                  setSelectedGenre={setSelectedGenre}
                  setFilteredData={setFilteredData}
                />
              </form>
              <MoviesList>
                {filteredData &&
                  filteredData.map((movie) => {
                    return (
                      <MovieItem
                        selectedGenre={selectedGenre}
                        setSelectedGenre={setSelectedGenre}
                        movie={movie}
                        data={data}
                        setData={setData}
                        setUpdateMovie={setUpdateMovie}
                        key={movie.id}
                        updateMovie={updateMovie}
                        genres={genres}
                      />
                    );
                  })}
              </MoviesList>
            </div>
          </section>
        </main>
      )}
    </>
  );
};

export default MovieDashboard;
