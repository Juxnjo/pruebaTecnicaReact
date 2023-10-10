import { useEffect, useState } from "react";
import data from "../data/sample.json";
import { HeaderBar } from "../components/HeaderBar";
import { Card } from "../components/Card";
import { filterAndSortMovies, /* filterWithValidImages */ } from "../utils/entriesUtils";
import { LoadContext } from "../context/loadContext";


export const MoviesPage = () =>
{
  const [ movies, setMovies ] = useState( [] );
  const [ loading, setLoading ] = useState( true );
  
  useEffect( () =>
  {
    const filteredAndSorted = filterAndSortMovies( data.entries );
    /* const validImages = filterWithValidImages( filteredAndSorted ); */
    setMovies( filteredAndSorted );
  }, [] );

  useEffect( () =>
  {
    const timer = setTimeout( () =>
    {
      setLoading( false );
    }, 3000 );

    return () => clearTimeout( timer );
  }, [] );

  return (
    <>
      <HeaderBar title="Popular Movies" />
      <LoadContext loading={ loading } />
      { !loading && <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 p-16">
        { movies.map( ( entry ) => (
          <Card key={ entry.title } title={ entry.title } releaseYear={entry.releaseYear} imageUrl={ entry.images[ "Poster Art" ].url } />
        ) ) }
      </div> }
    </>
  );
};
