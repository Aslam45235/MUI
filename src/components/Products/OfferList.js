import React from "react";
import { Box, Typography, LinearProgress } from "@mui/material";

const offers = [
  { title: "40% Discount Offer", progress: 70, expiry: "Expire on: 05-08-24", color: "grey" },
  { title: "100 Taka Coupon", progress: 50, expiry: "Expire on: 10-09-24", color: "grey" },
  { title: "Stock Out Sell", progress: 10, expiry: "Upcoming on: 14-09-24", color: "teal" },
];

const OfferList = () => {
  return (
    <Box flex={4}>
    <Box sx={{ width: "90%", maxWidth: 400, p: 2, pr: 3, bgcolor: "white", borderRadius: 2, boxShadow: 1 }}>
      <Typography variant="h6" fontWeight="bold" mb={8}>
        Current Offer
      </Typography>

      {offers.map((offer, index) => (
        <Box key={index} mb={2}>
          {/* Offer Title and Expiry */}
          <Box display="flex" justifyContent="space-between">
            <Typography variant="body2" fontWeight="bold">
              {offer.title}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {offer.expiry}
            </Typography>
          </Box>

          {/* Progress Bar */}
          <LinearProgress
            variant="determinate"
            value={offer.progress}
            sx={{
              height: 25,
              borderRadius: 1,
              mt: 1,
              bgcolor: "#E0E0E0",
              "& .MuiLinearProgress-bar": {
                bgcolor: offer.color,
              },
            }}
          />
        </Box>
      ))}
    </Box>
    </Box>
  );
};

export default OfferList;
