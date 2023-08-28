import * as React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import MainPage from "../pages/MainPage";
import GenreGroupPage from "../pages/GenreGroupPage";
import SearchPage from "../pages/SearchPage";

import MovieDetail from "../pages/MovieDetail";
import LoginModal from "../form/LoginModal";
import Favorite from "../pages/Favorite";

function Router() {
  let location = useLocation();
  let state = location.state;

  return (
    <Routes location={state?.backgroundLocation || location}>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/login" element={<LoginModal />}></Route>

      <Route path="/movie/:movieId" element={<MovieDetail />} />

      <Route path="/genre/:genreId" element={<GenreGroupPage />} />

      <Route path="/search" element={<SearchPage />} />
      <Route path="/myfavorite" element={<Favorite />} />
    </Routes>
  );
}

export default Router;
