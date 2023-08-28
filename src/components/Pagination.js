import React, { useEffect } from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function PaginationController({ PageCount, changePage, genreId }) {
  const [page, setPage] = useState(1);
  useEffect(() => {
    setPage(1);
  }, [genreId]);

  const handleChange = (event, value) => {
    setPage(value);
    changePage(value);
  };

  return (
    <Stack
      spacing={2}
      sx={{
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "30px",
      }}
    >
      <Typography>
        <Pagination
          sx={{
            "& .MuiPaginationItem-root": {
              color: "white",
            },
            "& .MuiPaginationItem-root:hover": {
              backgroundColor: "gray",
            },
            "& .MuiPaginationItem-root:active": {
              backgroundColor: "#999",
            },
            "& .MuiPaginationItem-root.Mui-selected": {
              backgroundColor: "gray",
            },
          }}
          count={PageCount}
          page={page}
          onChange={handleChange}
        />
      </Typography>
    </Stack>
  );
}

export default PaginationController;
