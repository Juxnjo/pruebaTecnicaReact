import { useEffect, useState } from "react";
import data from "../data/sample.json";

export const MoviesPage = () => {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    const readData = data.entries;

    const filterData = readData.filter((entry) =>{
      return entry.programType === 'movie' && entry.releaseYear >= 2010
    })

    const orderBy = filterData.sort((a, b) => {
      return a.title.localeCompare(b.title)
    })

    setMovies(orderBy)
  })

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10">
        {movies.map((entry) => (
          <div key={entry.title}>
            <img src={entry.images["Poster Art"].url} alt="" />
            <p>{entry.title}</p>
            

          </div>
        ))}
      </div>
    </>
  )
}
