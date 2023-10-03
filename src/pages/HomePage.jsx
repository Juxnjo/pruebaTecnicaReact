import { Link } from "react-router-dom";
import { HeaderBar } from "../components/HeaderBar";
import { Card } from "../components/Card";

export const HomePage = () =>
{
  return (
    <>
      <HeaderBar title="Popular Titles" />
      <div className=" flex gap-4 justify-center items-center  sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 p-16">
        <Link to="/series"><Card imageUrl="placeholder.png" title="Popular Series" /></Link>
        <Link to="/movies"><Card imageUrl="placeholder.png" title="Popular Movies" /></Link>
      </div>

    </>

  )
}
