import React, { useState, useEffect } from "react";
import Menu from "@mui/material/Menu";
import apiService from "../api/apiService";
import { Grid } from "@mui/material";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";

const api_key = "7d0315a5ea461b10e1abdde3c5ae1a40";

function GenresList() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [genreList, setGenreList] = useState([]);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const getMovieGenres = async () => {
      try {
        const res = await apiService.get(
          `/genre/movie/list?api_key=${api_key}&language=en-US`
        );

        setGenreList(res.data.genres);
        return res;
      } catch (error) {
        console.log(error);
      }
    };
    getMovieGenres();
  }, []);
  return (
    <>
      <Button
        aria-describedby={id}
        variant="text"
        onClick={handleClick}
        sx={{ mr: 2, color: "red" }}
      >
        Genres
        <ArrowDropDownIcon />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 200, left: 400 }}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <Grid container spacing={4}>
            {genreList.map((genre) => (
              <Grid
                sx={{ display: "flex", justifyContent: "space-around" }}
                key={genre.id}
                item
                xs={12}
                md={4}
                lg={2}
              >
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={`/genre/${genre.id}`}
                  onClick={() => setAnchorEl(null)}
                >
                  {genre.name}
                </Link>
              </Grid>
            ))}
          </Grid>
        </Menu>
      </Popover>
    </>
  );
}

export default GenresList;
