import Main from "./components/Main";
import Sidebar from "./components/Sidebar"; 
import { Box, Divider, Stack } from "@mui/material";

function App() {
  return (
    <Box>
      <Stack direction="row" justifyContent="flex-start" alignItems="stretch">
        <Sidebar />
        <Divider orientation="vertical" flexItem sx={{ color: "black", borderRightWidth: 1 }} />
        <Main />
      </Stack>
    </Box>
  );
}

export default App;
