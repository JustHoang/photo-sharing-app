import React from "react";
import { CardContent, Typography, Button, Card, Box } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import models from "../../modelData/models";

/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail() {
  const { userId } = useParams();
  const user = models.userModel(userId);
  const navigate = useNavigate();

  if (!user) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
        <Typography variant="h4" color="error">
          Người dùng không tồn tại
        </Typography>
      </Box>
    );
  }

  const handleShowPhotos = () => {
    navigate(`/photos/${user._id}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Card Container */}
      <Card sx={{ maxWidth: 600, margin: "auto", boxShadow: 3 }}>
        <CardContent>
          {/* User Info */}
          <Typography variant="h4" gutterBottom>
            {user.first_name} {user.last_name}
          </Typography>
          <Typography variant="h6" color="textSecondary" paragraph>
            <b>Address:</b> {user.location}
          </Typography>
          <Typography variant="body1" paragraph>
            <b>Information:</b> {user.description}
          </Typography>
          <Typography variant="body1" paragraph>
            <b>Occupation:</b> {user.occupation}
          </Typography>

          {/* Button to view photos */}
          <Button
            variant="contained"
            color="primary"
            onClick={handleShowPhotos}
            fullWidth
            sx={{ mt: 2 }}
          >
            Xem ảnh của {user.first_name}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default UserDetail;
