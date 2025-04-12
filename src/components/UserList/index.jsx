import React from "react";
import { 
  List, 
  ListItem, 
  Typography, 
  Card, 
  CardContent, 
  CardActions, 
  Avatar, 
  Grid,
  Box
} from "@mui/material";
import { Link } from "react-router-dom";
import models from "../../modelData/models";

function UserList() {
  const users = models.userListModel();

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        User List
      </Typography>

      <List sx={{ width: "100%" }}>
        {users.map((item) => (
          <ListItem key={item._id} >
            <Link 
              to={`/users/${item._id}`} 
              style={{ 
                textDecoration: "none", 
                color: "inherit", 
                width: "100%" 
              }}
            >
              <Card sx={{ width: "100%" }}>
                <Grid container alignItems="center">
                  {/* Avatar */}
                  <Grid item xs={2}>
                    <Box sx={{ p: 1 }}>
                      {item.profilePicture ? (
                        <Avatar 
                          src={item.profilePicture} 
                          alt={item.first_name} 
                          sx={{ width: 56, height: 56 }} 
                        />
                      ) : (
                        <Avatar sx={{ width: 56, height: 56, bgcolor: 'primary.main' }}>
                          
                        </Avatar>
                      )}
                    </Box>
                  </Grid>

                  {/* User Info */}
                  <Grid item xs={6} margin="5px">
                    <CardContent>
                      <Typography variant="h6">
                        {item.first_name} {item.last_name}
                      </Typography>
                    </CardContent>
                  </Grid>

                  {/* Action */}
                  <Grid item xs={2}>
                    <CardActions>
                      <Typography variant="body2" color="primary">
                        View Profile
                      </Typography>
                    </CardActions>
                  </Grid>
                </Grid>
              </Card>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default UserList; 