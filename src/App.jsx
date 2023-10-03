import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage"
import { SeriesPage } from "./pages/SeriesPage";
import { MoviesPage } from "./pages/MoviesPage";
import axios from "axios";


export default function App() {

  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/series" element={<SeriesPage/>}></Route>
          <Route path="/movies" element={<MoviesPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}