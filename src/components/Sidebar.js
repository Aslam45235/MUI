import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
  Drawer,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DonutSmallSharpIcon from "@mui/icons-material/DonutSmallSharp";
import SettingsInputCompositeSharpIcon from "@mui/icons-material/SettingsInputCompositeSharp";
import MenuIcon from "@mui/icons-material/Menu";
import ListItemText from "@mui/material/ListItemText";

// Import specific icons for each section
import LocalMallIcon from "@mui/icons-material/LocalMall"; // Products
import LocalOfferIcon from "@mui/icons-material/LocalOffer"; // Offers
import Inventory2Icon from "@mui/icons-material/Inventory2"; // Inventory
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; // Orders
import BarChartIcon from "@mui/icons-material/BarChart"; // Sales
import PersonIcon from "@mui/icons-material/Person"; // Customer
import MailIcon from "@mui/icons-material/Mail"; // Newsletter

function Sidebar() {
  // State to control Drawer open/close
  const [open, setOpen] = useState(false);

  // Media query to check screen size
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Toggle drawer visibility on mobile
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* Sidebar Drawer */}
      <Drawer
        sx={{
          width: 250,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 250,
            boxSizing: "border-box",
            borderRight: "1px solid #ECF0EF",
            
          },
        }}
        variant="temporary"
        open={open}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true, // Improve performance on mobile
        }}
      >
        <Box sx={{ padding: "20px"  }} >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src="./images/logo.png" alt="logo" />
            <Typography variant="h5">Pixal Commerce</Typography>
          </Box>
          <Divider />
          <Box sx={{ padding: "10px" }}>
            <Button
              variant="contained"
              sx={{
                width: "100%",
                justifyContent: "space-between",
                marginTop: "20px",
                color: "black",
                backgroundColor: "#77E1C9", // Correct way to apply background color
                "&:hover": {
                  backgroundColor: "#66B8A5", // Optional: Hover effect
                },
              }}
              startIcon={<HomeIcon />}
              endIcon={<ArrowForwardIosIcon />}
            >
              Dashboard
            </Button>

            <List>
              {[
                { text: "Analytics", icon: <DonutSmallSharpIcon /> },
                { text: "Products", icon: <LocalMallIcon /> },
                { text: "Offers", icon: <LocalOfferIcon /> },
                { text: "Inventory", icon: <Inventory2Icon /> },
                { text: "Orders", icon: <ShoppingCartIcon /> },
                { text: "Sales", icon: <BarChartIcon /> },
                { text: "Customer", icon: <PersonIcon /> },
                { text: "Newsletter", icon: <MailIcon /> },
              ].map((item, index) => (
                <ListItem key={index}>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <SettingsInputCompositeSharpIcon />
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Drawer>

      {/* Sidebar Toggle Button on Mobile */}
      {isMobile && (
        <IconButton
          sx={{ position: "absolute", top: 40, left: 20, zIndex: 1000 }}
          onClick={toggleDrawer}
        >
          <MenuIcon sx={{ width: "40px", height: "40px" }} />
        </IconButton>
      )}

      {/* Full Sidebar for larger screens */}
      {!isMobile && (
        <Box flex={1} borderRight="1px solid #ECF0EF">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
              gap:"10px"
            }}
          >
            <img src="./images/logo.png" alt="image" width="50px" height="50px"/>
            <Typography variant="h5">Pixal Commerce</Typography>
          </Box>
          <Divider />
          <Box sx={{ padding: "10px" }}>
            <Button
              variant="contained"
              sx={{
                width: "100%",
                justifyContent: "space-between",
                color: "black",
                marginTop: "20px",
                backgroundColor: "#77E1C9", // Correct way to apply background color
                "&:hover": {
                  backgroundColor: "#66B8A5", // Optional: Hover effect
                },
              }}
              startIcon={<HomeIcon />}
              endIcon={<ArrowForwardIosIcon />}
            >
              Dashboard
            </Button>

            <List>
              {[
                { text: "Analytics", icon: <DonutSmallSharpIcon /> },
                { text: "Products", icon: <LocalMallIcon /> },
                { text: "Offers", icon: <LocalOfferIcon /> },
                { text: "Inventory", icon: <Inventory2Icon /> },
                { text: "Orders", icon: <ShoppingCartIcon /> },
                { text: "Sales", icon: <BarChartIcon /> },
                { text: "Customer", icon: <PersonIcon /> },
                { text: "Newsletter", icon: <MailIcon /> },
              ].map((item, index) => (
                <ListItem key={index}>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <SettingsInputCompositeSharpIcon />
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Box>
      )}
    </>
  );
}

export default Sidebar;
