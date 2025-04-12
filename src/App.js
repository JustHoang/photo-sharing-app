import './App.css';

import React from "react";
import { Grid, Typography, Paper, Box } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TopBar from "./components/TopBar";
import UserDetail from "./components/UserDetail";
import UserList from "./components/UserList";
import UserPhotos from "./components/UserPhotos";

const App = (props) => {
  return (
      <Router>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TopBar />
            </Grid>
            <div className="main-topbar-buffer" />
            <Grid item sm={3}>
              <Paper className="main-grid-item" sx={{ width: '100%', overflow: 'auto' }}>
                <UserList />
              </Paper>
            </Grid>
            <Grid item sm={8.5}>
              <Paper className="main-grid-item" sx={{ width: '100%', overflow: 'auto', boxShadow: "3px", marginX:"10px"}}>
                <Routes>
                  <Route
                      path="/users/:userId"
                      element = {<UserDetail />}
                  />
                  <Route
                      path="/photos/:userId"
                      element = {<UserPhotos />}
                  />
                  <Route path="/users" element={<UserList />} />
                </Routes>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Router>
  );
}

export default App;
