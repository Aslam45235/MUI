import { Box, Stack } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";
import Cards from "./Cards";
import Rightchart from "./charts/Rightchart";
import Leftchart from "./charts/Leftchart";
import OfferList from "./Products/OfferList";
import ProductList from "./Products/ProductList";
import Product from "./Products/Product";
function Main() {
  return (
    <>
      <Box flex={6} bgcolor="#ECF0EF">
        <Navbar />
        <Cards />
        <Stack direction="row" gap="30px" p={3} display="flex" flexWrap="wrap" >
          <Rightchart />
          <Leftchart />
        </Stack>
        <Stack direction="row" gap="30px" p={3} display="flex" flexWrap="wrap">
          <Product/>
          <OfferList />
        </Stack>
      </Box>
    </>
  );
}

export default Main;
