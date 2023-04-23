import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from "@mui/material";
import { BorderClear, BorderRight } from '@mui/icons-material';
import {Link} from "react-router-dom";
import SideBar from './SideBar';

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, BorderRight: "1px solid #3d3d3d", px: { sx: "0", md: 2 } }}>
        <SideBar />
        <Typography className='copyright' variant='body2' sx={{mt: 1.5, color: "#fff"}}>
          Copyright &copy; 2023 <Link to="https://mostafasaleh1.github.io/myprofile" target='_blank' rel='noreferrer' color='#fff'>The Tubefather.</Link>
        </Typography>
      </Box>
    </Stack>
  )
}

export default Feed;