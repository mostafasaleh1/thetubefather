import React from 'react';
import { Paper, IconButton } from "@mui/material";
import { Search } from '@mui/icons-material';

const SearchBar = () => {
    return (
        <Paper component="form"
            sx={{ borderRadius: "25px", pl: 2, boxShadow: "none", mr: "3%" }}
            onSubmit={() => { }}
        >
            <input className='search-bar'
                placeholder='Search...'
                value=""
                onChange={() => { }} />
            <IconButton type='submit' sx={{ p: "10px", mr: ".3rem", color: "red" }}>
                <Search />
            </IconButton>
        </Paper>
    )
}

export default SearchBar;