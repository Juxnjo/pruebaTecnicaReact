import { useEffect, useState } from "react";
import data from "../data/sample.json";
import { HeaderBar } from "../components/HeaderBar";
import { MovieCard } from "../components/MovieCard";
import { filterAndSortMovies } from "../utils/movieUtils";
import { filterMoviesWithValidImages } from "../utils/movieUtils";

export const MoviesPage = () =>
{
  const [ movies, setMovies ] = useState( [] );

  useEffect( () =>
  {
    const filteredAndSortedMovies = filterAndSortMovies( data.entries );
    const moviesWithValidImages = filterMoviesWithValidImages( filteredAndSortedMovies );
    setMovies( moviesWithValidImages );
  }, [] );

  return (
    <>
      <HeaderBar title="Popular Movies" />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 p-16">
        { movies.map( ( entry ) => (
          <MovieCard key={ entry.title } title={ entry.title } imageUrl={ entry.images[ "Poster Art" ].url }  />
        ) ) }
      </div>
    </>
  );
};
