import { useEffect, useState } from "react";
import Header from "./components/Header";
import MoviesList from "./components/MoviesList";
import { MoviesContainer } from "./styles/MoviesContainer";
import { MoviesService } from "./api/MoviesService";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
