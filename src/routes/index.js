import React from "react";
import { Routes, Route } from "react-router-dom";
import BlankLayout from "../layouts/BlankLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import GenrePage from "../pages/GenrePage";
import RequireAuth from "./RequireAuth";
import SearchPage from "../pages/SearchPage";
import MovieDetail from "../components/MovieDetail";
import MainLayout from "../layouts/MainLayout";

function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth>
            <MainLayout />
          </RequireAuth>
        }
      >
        <Route path="movie/:movieid" element={<MovieDetail />} />
        <Route index element={<HomePage />}></Route>

        <Route path="genre/:genreid" element={<GenrePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      <Route element={<BlankLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default Router;
