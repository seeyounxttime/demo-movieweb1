import { Outlet } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";
import React, { useState } from "react";

import MovieDetail from "../components/MovieDetail";

function MainLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const [idMovie, setIdMovie] = useState("");

  return (
    <Stack sx={{ minHeight: "100vh" }}>
      <MainHeader />
      <Outlet context={[setIsOpen, setIdMovie]} />
      <Box sx={{ flexGrow: 1 }} />
      <MovieDetail isOpen={isOpen} id={idMovie} setOpen={setIsOpen} />
      <MainFooter />
    </Stack>
  );
}

export default MainLayout;
