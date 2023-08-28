import React, { cloneElement } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Container from "@mui/material/Container";
import { Stack } from "@mui/system";
import MainHeader from "../layouts/MainHeader";
import HomePage from "./HomePage";
import MainFooter from "../layouts/MainFooter";

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function ElevateAppBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar sx={{ alignItems: { xl: "center", md: "center" } }}>
          <MainHeader />
        </AppBar>
      </ElevationScroll>

      <Stack sx={{ backgroundColor: "primary.light" }}>
        <Container>
          <HomePage />
          <MainFooter />
        </Container>
      </Stack>
    </React.Fragment>
  );
}

export default ElevateAppBar;
