import React, { useState } from "react";
import { Avatar, Badge, Divider, styled, Typography, Box, Menu, MenuItem, InputBase, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";

const Search = styled("div")(({ theme }) => ({
  border: "1px solid #ccc", // Adding border for better visibility
  background: "white",
  padding: "0 10px",
  width: "40%",
  display: "flex",
  alignItems: "center",
  borderRadius: "5px", // Vertically align the content in the center
}));

const Icons = styled("Box")(({ theme }) => ({
  display: "flex",
  gap: "20px",
}));

function Navbar() {
  // State for managing the menu open and anchor element
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // State for managing the current profile (Admin/User)
  const [profile, setProfile] = useState("Admin");

  // Handle opening the menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle closing the menu and updating the profile
  const handleClose = (profileType) => {
    setProfile(profileType); // Update the profile state
    setAnchorEl(null); // Close the menu after selection
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "50px",
        }}
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography variant="p" sx={{ display: { xs: "none", md: "block" }, fontSize: "40px", fontWeight: "500" }}>
            Overcome
          </Typography>
        </Box>

        <Search>
          <InputBase
            inputProps={{ "aria-label": "search" }}
            placeholder=""
            sx={{ flex: 1 }} // Ensure input takes most of the space
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </Search>

        <Icons>
          <Box bgcolor="white" padding="10px" alignItems="center" sx={{ display: { xs: "none", md: "block" }, borderRadius: "5px" , display:"flex" , alignItems:"center"}}>
            <CalendarTodayIcon />
            <Typography variant="p" sx={{ marginLeft: "10px" }}>
              30 May
            </Typography>
          </Box>
          <Box bgcolor="white" padding="10px" sx={{ display: { xs: "none", md: "block" }, borderRadius: "5px" , display:"flex" , alignItems:"center"}}>
            <Badge color="error">
              <NotificationsNoneIcon />
            </Badge>
          </Box>
          <Box bgcolor="white" padding="10px" sx={{ display: { xs: "none", md: "block" }, borderRadius: "5px" , display:"flex" , alignItems:"center"}}>
            <Badge color="error">
              <MapsUgcIcon />
            </Badge>
          </Box>
         <Divider orientation="vertical" variant="middle" flexItem />

          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", bgcolor:"white", padding:"0 10px" }}>
            <Avatar
              src="./images/login.jpg"
              alt="Remy Sharp"
              onClick={handleClick} // Add onClick handler to open the menu
              sx={{ cursor: "pointer" }} // Change cursor to pointer
            />
            <Box sx={{ marginLeft: "10px" }}>
              <Typography variant="body2">{profile}</Typography> {/* Display selected profile */}
            </Box>
          </Box>
        </Icons>

        {/* Menu */}
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={() => setAnchorEl(null)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={() => handleClose("Admin")}>Admin</MenuItem>
          <MenuItem onClick={() => handleClose("User")}>User</MenuItem>
        </Menu>
      </Box>
    </>
  );
}

export default Navbar;
