import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from "@mui/material";
import { ChannelDetail, Feed, Navbar, SearchFeed, VideoDetail } from "./components/Exports";

const App = () => {
  return (
    <BrowserRouter>
      <Box>
        <Navbar />
        <Routes>
          <Route path="/thetubefather/" exact element={<Feed />} />
          <Route path="/thetubefather/video/:id" element={<VideoDetail />} />
          <Route path="/thetubefather/channel/:id" element={<ChannelDetail />} />
          <Route path="/thetubefather/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;