import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../assets/MUIAssets';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => (
    <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0 }}>
        <Link to={videoId ? `/thetubefather/video/${videoId}` : `/thetubefather/video/cV2gBU6hKfY`}>
            <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} sx={{ width: { xs: '100%', sm: '358px' }, height: 180 }} />
        </Link>
        <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
            <Link to={videoId ? `/thetubefather/video/${videoId}` : demoVideoUrl} >
                <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
                    {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                </Typography>
            </Link>
            <Link to={snippet?.channelId ? `/thetubefather/channel/${snippet?.channelId}` : demoChannelUrl} >
                <Typography variant="subtitle2" color="gray">
                    {snippet?.channelTitle || demoChannelTitle}
                    <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
            </Link>
        </CardContent>
    </Card>
);

export default VideoCard;