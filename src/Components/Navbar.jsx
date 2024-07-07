import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: 'rgba(29, 29, 29, 0.9)',
        color: 'white',
        position: 'relative',
      }}
    >
      <IconButton
        edge="start"
        color="inherit"
        aria-label="close"
        onClick={toggleDrawer(false)}
        sx={{ position: 'absolute', top: 0, right: 0, margin: '1rem', color: '#FFD700' }}
      >
        <CloseIcon />
      </IconButton>
      <List sx={{ width: '100%', padding: 0, marginTop: '4rem', textAlign: 'center' }}>
        {['Home', 'About', 'Projects', 'Contact'].map((text) => (
          <ListItem button key={text} sx={{ justifyContent: 'center', marginBottom: '2rem' }}>
            <ListItemText primary={text} sx={{ textAlign: 'center' }} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <AppBar position="absolute" sx={{ backgroundColor: '#1D1D1D',width:'50%',top:"7%",left:"50%",transform:'translate(-50%,-50%)','@media (max-width: 768px)': {
          width: '75%',  // Adjusted width for smaller screens
        },}}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ color: '#FFD700', display: { xs: 'block', md: 'none' } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <img
            src="https://via.placeholder.com/40"
            alt="Logo"
            className="mr-2"
            style={{ display: { xs: 'none', md: 'block' } }}
          />
          <Typography variant="h6" sx={{ flexGrow: 1, color: 'white' }}>
            My Portfolio
          </Typography>
          <div className="hidden md:flex space-x-4">
            <Button color="inherit" sx={{ color: '#1E90FF', '&:hover': { color: '#FFD700' } }}>Home</Button>
            <Button color="inherit" sx={{ color: '#1E90FF', '&:hover': { color: '#FFD700' } }}>About</Button>
            <Button color="inherit" sx={{ color: '#1E90FF', '&:hover': { color: '#FFD700' } }}>Projects</Button>
            <Button color="inherit" sx={{ color: '#1E90FF', '&:hover': { color: '#FFD700' } }}>Contact</Button>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(29, 29, 29, 0.9)',
            width: '100%',
            height: '100%',
          },
        }}
      >
        {drawerList()}
      </Drawer>
    </>
  );
};

export default Navbar;
