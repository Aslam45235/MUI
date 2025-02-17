import React, { useRef } from "react";
import { Box, Typography, Card, CardMedia, CardContent, IconButton, useMediaQuery } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useTheme } from "@mui/material/styles";

const products = [
  { id: 1, name: "Air Jordan 8", img: "./images/shoes4.jpg", quantity: "752 Pcs" },
  { id: 2, name: "Air Jordan 5", img: "./images/shoes5.jpg", quantity: "752 Pcs" },
  { id: 3, name: "Air Jordan 13", img: "./images/shoes4.jpg", quantity: "752 Pcs" },
  { id: 4, name: "Nike Air Max", img: "./images/shoes4.jpg", quantity: "752 Pcs" },
  { id: 5, name: "Nike Fly 3", img: "./images/shoes5.jpg", quantity: "752 Pcs" },
  { id: 6, name: "Puma Sneakers", img: "./images/shoes4.jpg", quantity: "752 Pcs" },
  { id: 7, name: "Adidas Boost", img: "https://via.placeholder.com/150", quantity: "752 Pcs" },
  { id: 8, name: "Converse All Star", img: "https://via.placeholder.com/150", quantity: "752 Pcs" },
  { id: 9, name: "Reebok Classic", img: "https://via.placeholder.com/150", quantity: "752 Pcs" },
  { id: 10, name: "Vans Old Skool", img: "https://via.placeholder.com/150", quantity: "752 Pcs" },
];

function Product() {
  const scrollRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  
  // Scroll by 5 cards (each card width is 180px)
  const scrollStep = 5 * 180; // Move 5 cards at a time

  // Scroll Left: Move by 5 cards
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollStep, behavior: "smooth" });
    }
  };

  // Scroll Right: Move by 5 cards
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollStep, behavior: "smooth" });
    }
  };

  return (
    <Box flex={10} bgcolor="white" p={2} borderRadius="10px" boxShadow= "1">
      {/* Title and Navigation Arrows */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2} >
        <Typography variant="h6" color="black">Top Selling Products</Typography>
        {!isMobile && (
          <Box>
            <IconButton onClick={scrollLeft} sx={{ fontSize: "1rem", color: "black" }}>
              <ArrowBackIcon fontSize="small" />
            </IconButton>
            <IconButton onClick={scrollRight} sx={{ fontSize: "1.5rem", color: "black" }}>
              <ArrowForwardIcon fontSize="large" />
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
          width: "100%", // Full width container
          maxWidth: "calc(6 * 180px + 8px)", // Show 5 cards (5 * 180px width per card)
        }}
      >
        {products.map((product) => (
          <Card
            key={product.id}
            sx={{
              width: 180, // Set card width to 180px
              height: 220, // Adjust height for the cards
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
  );
}

export default Product;
