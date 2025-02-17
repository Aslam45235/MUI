import { Box, Divider, styled, Typography } from "@mui/material";
import React from "react";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LineChart } from "@mui/x-charts/LineChart";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

import Datepick from "./Datepick";
import GradientGraph from "./GradientGraph";

const CustomButton = styled("button")(() => ({
  border: "none", // remove border
  padding: "8px 16px",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "14px",
  display:"flex",
  alignItems:"center",
  "&:hover": {
    backgroundColor: "#F2A96C", // Optional: change color on hover
  },
}));
function Rightchart() {
  return (
    <>
      <Box bgcolor="white" flex={6} boxShadow= "1" borderRadius="10px">
        <Box padding="50px" >
          <Box sx={{ display: "flex", justifyContent: "space-between"  }}>
            <Box>
              <Typography
                variant="p"
                sx={{ fontSize: "30px", fontWeight: "500" }}
              >
                Sales and Analytics
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Datepick />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "25px",
            }}
          >
            <Box>
              <Typography variant="p" color="initial">
                Income
              </Typography>
              <Box sx={{ display: "flex", gap: "2rem" ,alignItems:"center" }}>
                <Box>
                  <Typography
                    variant="p"
                    color="initial"
                    sx={{ fontSize: "25px", fontWeight: "500" }}
                  >
                    23,620.00
                  </Typography>
                </Box>
                <Box>
                  <CustomButton sx={{ bgcolor: "#E2E9F9" }}> O.05% <ArrowDropUpIcon /></CustomButton>
                  
                </Box>
              </Box>
            </Box>
            <Divider orientation="vertical" variant="middle" flexItem sx={{height:"50px"}}/>

            <Box>
              <Typography variant="p" color="initial">
                Expense
              </Typography>
              <Box sx={{ display: "flex", gap: "2rem", alignItems:"center"}}>
                <Box>
                  <Typography
                    variant="p"
                    color="initial"
                    sx={{ fontSize: "25px", fontWeight: "500" }}
                  >
                    11,135.00
                  </Typography>
                </Box>
                <Box>
                  <CustomButton sx={{ bgcolor: "#F2CB9C" }} >O.05% <ArrowDropUpIcon /></CustomButton>
                </Box>
              </Box>
            </Box>
            <Divider orientation="vertical" variant="middle" flexItem />

            <Box>
              <Typography variant="p" color="initial">
                Balance
              </Typography>
              <Box sx={{ display: "flex", gap: "2rem",alignItems:"center" }}>
                <Box>
                  <Typography
                    variant="p"
                    color="initial"
                    sx={{ fontSize: "25px", fontWeight: "500" }}
                  >
                    48,135.00
                  </Typography>
                </Box>
                <Box>
                  <CustomButton sx={{ bgcolor: "#F2CB9C" }}>O.05% <ArrowDropUpIcon /></CustomButton>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box sx={{ width: "100%" }}>
            <GradientGraph />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Rightchart;
