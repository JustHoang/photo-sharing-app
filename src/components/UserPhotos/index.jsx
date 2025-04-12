import React from "react";
import { Typography } from "@mui/material";

import "./styles.css";
import {useParams} from "react-router-dom";
import models from "../../modelData/models";

/**
 * Define UserPhotos, a React component of Project 4.
 */
function UserPhotos () {
    const {userId} = useParams();
    const user = models.userListModel().find((u) => u._id === userId)
    const userPhotos = models.photoOfUserModel(userId)
    return (
      <div>
        <Typography variant="h2">
          {user.first_name} {user.last_name}
        </Typography>
        {userPhotos.length > 0 ? (
        userPhotos.map((photo, index) => (
          <div key={index}>
            <img src={`/images/${photo.file_name}`} alt={photo.file_name} width="300" />
            <p>Ngày tạo: {photo.date_time}</p>
          </div>
        ))
      ) : (
        <p>Không có ảnh nào để hiển thị</p>
      )}
      </div>
    );
}

export default UserPhotos;
