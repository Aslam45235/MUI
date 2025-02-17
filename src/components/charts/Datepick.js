import React, { useState } from "react";
import { TextField, MenuItem, Box, Typography } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const months = [
  { label: "Jan 2023", value: "2023-01" },
  { label: "Feb 2023", value: "2023-02" },
  { label: "Mar 2023", value: "2023-03" },
  { label: "Apr 2023", value: "2023-04" },
  { label: "May 2023", value: "2023-05" },
  { label: "Jun 2023", value: "2023-06" },
  { label: "Jul 2023", value: "2023-07" },
  { label: "Aug 2023", value: "2023-08" },
  { label: "Sep 2023", value: "2023-09" },
  { label: "Oct 2023", value: "2023-10" },
  { label: "Nov 2023", value: "2023-11" },
  { label: "Dec 2023", value: "2023-12" }
];

const Datepick = () => {
  const [selectedDate, setSelectedDate] = useState("2023-07");

  return (
    <Box display="flex" alignItems="center" gap={3}>
      <Typography variant="body2" color="textSecondary">
        Sort by
      </Typography>
      <TextField
        select
        variant="outlined"
        size="small"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        sx={{
          minWidth: 140,
          "& .MuiOutlinedInput-root": {
            borderRadius: 1,
            borderColor: "#ccc",
          }
        }}
        InputProps={{
          startAdornment: <CalendarTodayIcon fontSize="small" sx={{ color: "gray", mr: 1 }} />
        }}
      >
        {months.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};

export default Datepick;
