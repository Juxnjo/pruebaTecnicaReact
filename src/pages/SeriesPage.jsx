import { useState, useEffect } from "react";
import data from "../data/sample.json";
import { HeaderBar } from "../components/HeaderBar";
import { Card } from "../components/Card";
import { filterAndSortSeries, /* filterWithValidImages */ } from "../utils/entriesUtils";
import { LoadContext } from "../context/loadContext";

export const SeriesPage = () =>
{
  const [ series, setSeries ] = useState( [] )
  const [ loading, setLoading ] = useState( true );

  useEffect( () =>
  {
    const filteredAndSorted = filterAndSortSeries( data.entries )
    /* const validImages = filterWithValidImages( filteredAndSorted ) */
    setSeries( filteredAndSorted )
  }, [] )

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
      <HeaderBar title="Popular Series" />
      <LoadContext loading={ loading } />
      { !loading && <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 p-16">
        { series.map( ( entry ) => (
          <Card key={ entry.title } title={ entry.title } imageUrl={ entry.images[ "Poster Art" ].url } />
        ) ) }
      </div> }


    </>
  )
}
