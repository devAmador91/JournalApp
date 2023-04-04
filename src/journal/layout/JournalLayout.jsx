import { Box } from "@mui/material";
import { NavBar, SideBar } from "../components/";

const drawerWidth = 220;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      {/*NavBar*/}
      <NavBar drawerWidth={drawerWidth} />
      {/*SideBar*/}
      <SideBar drawerWidth={drawerWidth} />
      <Box component="main" sx={{ flexGrow: 1, padding: 5 }}>
        {/*ToolBar*/}

        {children}
      </Box>
    </Box>
  );
};
