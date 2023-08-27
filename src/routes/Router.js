import * as React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Homepage from "../pages/HomePage";
import Discovery from "../pages/Discovery";
import FormPage from "../pages/Form";
import MovieDetail from "../pages/MovieDetail";
import FavoritePage from "../pages/Favorite";
import NotFoundPage from "../pages/NotFoundPage";
import { useAuth } from "../contexts/AuthContext";

function Router() {
  let location = useLocation();
  let state = location.state;
  function RequireAuth({ children }) {
    let auth = useAuth();
    console.log("user status:", auth.user);
    if (!auth.user) {
      // chuyển về lại trang đăng nhập nhưng vẫn lưu vị trí hiện tại

      return <Navigate to="/form" state={{ from: location }} replace />;
    }
    return children;
  }
  return (
    <>
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Homepage />} />
          <Route path="discovery/:pageId" element={<Discovery />} />
          <Route path="/movie/:movieId" element={<MovieDetail />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route
            path="/favorite"
            element={
              <RequireAuth>
                <FavoritePage />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
      {state?.backgroundLocation && (
        <Routes>
          <Route path="/form" element={<FormPage />} />
        </Routes>
      )}
    </>
  );
}

export default Router;
