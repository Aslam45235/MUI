import { Box, Typography } from "@mui/material";
import React from "react";
import RingChart from "./RingChart";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function Leftchart() {
  return (
    <Box flex={5}>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          display: "flex",
          bgcolor: "white",
          justifyContent:"space-around"
          
        }}
        boxShadow= "1" borderRadius="10px"
      >
        <Box sx={{ width: "30%", height: "auto", pb:"4rem"}}>
          <Box sx={{pt:"30px"}}>
          <Typography variant="p" fontSize="35px" fontWeight="500" color="initial">
            Sales Targets
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              mt: "220px",
            }}
          >
            <FiberManualRecordIcon sx={{ color: "#A0A4A3" }} />
            <Typography
              variant="p"
              fontSize="20px"
              fontWeight="400"
              color="#A0A4A3"
            >
              daily Targets
            </Typography>
          </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px", marginY:"10px"}}>
            <ArrowDownwardIcon sx={{ color: "#A0A4A3" }}/>
            <Typography variant="p" fontSize="40px" fontWeight="500" color="initial">
              650
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <FiberManualRecordIcon sx={{ color: "#A0A4A3" }} />
            <Typography
              variant="p"
              fontSize="20px"
              fontWeight="400"
              color="#A0A4A3"
            >
              Montly Targets
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" , marginY:"10px" }}>
            <ArrowUpwardIcon />
            <Typography variant="p" fontSize="40px" fontWeight="500" color="initial ">
              145,000
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: "50%", height: "auto", display:"flex", alignItems:"center"}}>
          <RingChart />
        </Box>
      </Box>
    </Box>
  );
}

export default Leftchart;
