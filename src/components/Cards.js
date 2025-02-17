import { Box, Typography } from "@mui/material";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import React from "react";

function Cards() {
  // Define an array of card data
  const cardData = [
    { title: "Total Revenue", trade:<TrendingUpIcon /> ,value: "$82,260", percentage: "11%", icon: <VolunteerActivismIcon /> },
    { title: "Total Order", trade:<TrendingUpIcon /> ,value: "1645", percentage: "11%", icon: <LocalGroceryStoreIcon /> },
    { title: "Total Customer", trade:<TrendingDownIcon/> ,value: "1,462", percentage: "11%", icon: <PersonOutlineOutlinedIcon /> },
    { title: "Pending Delivery", trade:<TrendingUpIcon /> ,value: "117", percentage: "11%", icon: <WorkHistoryOutlinedIcon /> },
  ];

  return (
    <Box width="100%" sx={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent:"space-evenly"}}>
      {cardData.map((card, index) => (
        <Box
          key={index}
          sx={{
            width: "320px",
            height: "150px",
            bgcolor: "white",
            padding: "20px",
            borderRadius:"10px",
            boxShadow: 2, // Optional: Adding shadow for better card visibility
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Typography variant="h5">{card.title}</Typography>
              <Typography variant="body2">last 30 days</Typography>
            </Box>
            <Box sx={{display:"flex", border: "none", borderRadius: "50px", bgcolor: "#DEF1EC", width:"40px", height:"40px", alignItems:"center", justifyContent:"center"}}>
              {card.icon}
            </Box>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "50px", alignItems: "center" }}>
            <Typography variant="p" fontSize="40px" fontWeight="500">{card.value}</Typography>

            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap:'10px' }}>
              <Box color="red">
                {card.trade}
              </Box>
              <Typography variant="body2" color="red">
                {card.percentage}
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default Cards;
