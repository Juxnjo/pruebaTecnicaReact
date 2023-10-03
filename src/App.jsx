import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage"
import { SeriesPage } from "./pages/SeriesPage";
import { MoviesPage } from "./pages/MoviesPage";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/series" element={<SeriesPage/>}></Route>
          <Route path="/movies" element={<MoviesPage/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>

    </>
  )
}