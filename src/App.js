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
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;