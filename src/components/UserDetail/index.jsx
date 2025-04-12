import React from "react";
import {CardContent, Typography, Button} from "@mui/material";

import "./styles.css";
import {useParams, useNavigate} from "react-router-dom";
import models from "../../modelData/models";
import UserPhotos from "../UserPhotos";

/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail() {

  const {userId} = useParams();
  const user = models.userListModel().find((u) => u._id === userId)
  const navigate = useNavigate();
  
  if (!user) {
    return <Typography>Người dùng không tồn tại</Typography>;
  }

  const handleShowPhotos = () => {
    alert( `${user._id}`)
    navigate(`/photos/${user._id}`);
  };

  return (
    <div className="user-detail-container">
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {user.first_name} {user.last_name}
        </Typography>
        <Typography><b>Address:</b> {user.location}</Typography>
        <Typography><b>Information:</b> {user.description}</Typography>
        <Typography><b>Occupation:</b> {user.occupation}</Typography>

        <Button
            variant="contained"
            color="primary"
            onClick={handleShowPhotos}
            style={{ marginTop: "20px" }}
          >
            Xem ảnh của {user.first_name}
          </Button>
      </CardContent>
    </div>
  );
}

export default UserDetail;
