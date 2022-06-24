import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Boxed from "../Box/Box";
import Navbar from "../NavBar/Navbar";

export default function Home() {
  return (
    <Box sx={{ display: "flex" }} className="background">
      <Navbar />
      <CssBaseline />
      <Boxed />
    </Box>
  );
}
