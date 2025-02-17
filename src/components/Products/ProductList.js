import React, { useRef } from "react";
import { Box, Typography, Card, CardMedia, CardContent, IconButton, useMediaQuery } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useTheme } from "@mui/material/styles";

const products = [
  { id: 1, name: "Air Jordan 8", img: "https://via.placeholder.com/150", quantity: "752 Pcs" },
  { id: 2, name: "Air Jordan 5", img: "https://via.placeholder.com/150", quantity: "752 Pcs" },
  { id: 3, name: "Air Jordan 13", img: "https://via.placeholder.com/150", quantity: "752 Pcs" },
  { id: 4, name: "Nike Air Max", img: "https://via.placeholder.com/150", quantity: "752 Pcs" },
  { id: 5, name: "Nike Fly 3", img: "https://via.placeholder.com/150", quantity: "752 Pcs" },
  { id: 6, name: "Puma Sneakers", img: "https://via.placeholder.com/150", quantity: "752 Pcs" },
  { id: 7, name: "Adidas Boost", img: "https://via.placeholder.com/150", quantity: "752 Pcs" },
  { id: 8, name: "Converse All Star", img: "https://via.placeholder.com/150", quantity: "752 Pcs" },
  { id: 9, name: "Reebok Classic", img: "https://via.placeholder.com/150", quantity: "752 Pcs" },
  { id: 10, name: "Vans Old Skool", img: "https://via.placeholder.com/150", quantity: "752 Pcs" },
];

const ProductList = () => {
  const scrollRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Scroll Left
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -250, behavior: "smooth" });
    }
  };

  // Scroll Right
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 250, behavior: "smooth" });
    }
  };

  return (
    <Box flex={6} sx={{ width: "70%", margin: "auto" }}>
      <Box sx={{ p: 2, bgcolor: "white", boxShadow: 1, borderRadius: 2 }}>
        {/* Title and Navigation Arrows */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6">Top Selling Products</Typography>
          {!isMobile && (
            <Box>
              <IconButton onClick={scrollLeft} sx={{ fontSize: "1rem" }}>
                <ArrowBackIosIcon fontSize="small" />
              </IconButton>
              <IconButton onClick={scrollRight} sx={{ fontSize: "1.5rem" }}>
                <ArrowForwardIosIcon fontSize="large" />
              </IconButton>
            </Box>
          )}
        </Box>

        {/* Scrollable Product List */}
        <Box
          ref={scrollRef}
          sx={{
            display: "flex",
            overflowX: "auto",
            gap: 2,
            p: 1,
            scrollBehavior: "smooth",
            whiteSpace: "nowrap",
            "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar
          }}
        >
          {products.map((product) => (
            <Card
              key={product.id}
              sx={{
                width: { xs: 120, sm: 150, md: 180 }, // Responsive card width
                minWidth: { xs: 120, sm: 150, md: 180 },
                height: { xs: 200, sm: 220 }, // Adjust height for responsiveness
                boxShadow: 2,
                borderRadius: 2,
                flexShrink: 0,
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={product.img}
                alt={product.name}
                sx={{ objectFit: "contain" }}
              />
              <CardContent sx={{ textAlign: "center", p: 1 }}>
                <Typography variant="body2" fontWeight="bold">
                  {product.name}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  {product.quantity}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductList;
