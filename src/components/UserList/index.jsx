import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

import "./styles.css";
import models from "../../modelData/models";
import { Link } from "react-router-dom";

/**
 * Define UserList, a React component of Project 4.
 */
function UserList () {
    const users = models.userListModel();
    return (
      <div>
        <h2>User List</h2>
        <List>

        </List>
        <List component="nav">
          {users.map((item) => (
            <ListItem>
                <Link to={`/users/${item._id}`} style={{textDecoration:"none"}}>
                  <ListItemText primary={`${item.first_name} ${item.last_name}`}/>
                </Link>
            </ListItem>
          ))}
        </List>
      </div>
    );
}



export default UserList;
