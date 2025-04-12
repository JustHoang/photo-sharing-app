import React from "react";
import { Typography, Box, Link, Card, CardContent, Avatar, Grid, Divider } from "@mui/material";
import { useParams, Link as RouterLink } from "react-router-dom";
import models from "../../modelData/models";
import { formatDistanceToNow } from "date-fns"; // Thư viện để định dạng thời gian

function UserPhotos() {
  const { userId } = useParams();
  
  const user = models.userListModel().find((u) => u._id === userId); 
  const userPhotos = models.photoOfUserModel(userId); 

  return (
    <Box sx={{ width: '100%', overflow: 'auto' }}>
      <Typography variant="h3"  align="start">{user ? `${user.first_name} ${user.last_name}'s Photos` : "User"}</Typography>
      <Divider sx={{ marginBottom: 3 }} />

      {userPhotos.length > 0 ? (
        <Grid container spacing={3} justifyContent="start">
          {userPhotos.map((photo, index) => (
            <Grid item key={index} sx={{width: '100%'}}>
              <Card sx={{ width: '100%', boxShadow: 3 }}>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item md={4}>
                      <Box sx={{ position: 'relative', width: '100%'  }}>
                        <img 
                          src={`/images/${photo.file_name}`} 
                          alt={photo.file_name} 
                          style={{
                            width: '100%', 
                            height: '100%',
                            borderRadius: '10px 10px 10px 10px'
                          }} 
                        />
                      </Box>
                    </Grid>
                    
                    <Grid item md={7}>
                      <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
                        Date: {formatDistanceToNow(new Date(photo.date_time))} ago
                      </Typography>

                      {photo.comments && photo.comments.length > 0 ? (
                        photo.comments.map((comment, commentIndex) => (
                          <Box key={commentIndex} sx={{ marginBottom: 2 }}>
                            <Grid container spacing={1} alignItems="center">
                              <Grid item>
                                <Avatar src={comment.user.profilePicture} alt={comment.user.first_name} />
                              </Grid>
                              <Grid item xs>
                                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                  <Link component={RouterLink} to={`/users/${comment.user._id}`} color="inherit">
                                    {comment.user.first_name} {comment.user.last_name}
                                  </Link>
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                  {formatDistanceToNow(new Date(comment.date_time))} ago
                                </Typography>
                                <Typography variant="body2">{comment.comment}</Typography>
                              </Grid>
                            </Grid>
                          </Box>
                        ))
                      ) : (
                        <Typography variant="body2" sx={{ color: 'gray' }}>No comments on this photo.</Typography>
                      )}
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="body2" color="text.secondary" align="center">No photos to display.</Typography>
      )}
    </Box>
  );
}

export default UserPhotos;
