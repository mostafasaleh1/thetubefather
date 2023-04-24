import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from "@mui/material";
import { BorderClear, BorderRight } from '@mui/icons-material';
import { Link } from "react-router-dom";
import { SideBar, Videos } from "./Exports";
import { FetchFromYoutubeAPI } from '../assets/FetchFromYoutubeAPI';

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    FetchFromYoutubeAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => {
      setVideos(data.items)
    })
  }, [selectedCategory])


  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, BorderRight: "1px solid #3d3d3d", px: { sx: "0", md: 2 } }}>
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: "#fff" }}>
          Copyright &copy; 2023 <Link to="https://mostafasaleh1.github.io/myprofile" target='_blank' rel='noreferrer'>The Tubefather.</Link>
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant='h4' fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "#f31503" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed;