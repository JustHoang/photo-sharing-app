import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import models from "../../modelData/models";

function TopBar() {
  const location = useLocation();
  let title = "Nguyễn Việt Hoàng"; 
  let rightText = "";

  if (location.pathname.startsWith("/photos")) {
    const userId = location.pathname.split("/")[2];
    const user = models.userModel(userId)
    if (user) {
      rightText = `${user.first_name} ${user.last_name}'s photos`;
    }
  } else if (location.pathname.startsWith("/user")) {
    const userId = location.pathname.split("/")[2];
    const user = models.userListModel().find((u) => u._id === userId);
    
    if (user) {
      rightText = `${user.first_name} ${user.last_name}`;
    }
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body1">{rightText}</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
