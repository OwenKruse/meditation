import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

export default function DenseAppBar() {
    return (
        <Box sx={{ flexGrow: 1, position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1000, // Remove shadow
            boxShadow: 'none', }}>
            <AppBar position="static" sx={
                {
                    background: 'transparent',
                }
            }>
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit" component="div">
                        Meditation Hub
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}