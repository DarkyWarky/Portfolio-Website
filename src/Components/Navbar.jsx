import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const navItems = [
    { text: 'Home', icon: <HomeIcon /> },
    { text: 'About', icon: <InfoIcon /> },
    { text: 'Projects', icon: <WorkIcon /> },
    { text: 'Contact', icon: <ContactMailIcon /> },
  ];

  const drawerList = () => (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30,duration:2 }}
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
        sx={{ position: 'absolute', top: 0, right: 0, margin: '1rem', color: 'cyan' }}
      >
        <CloseIcon />
      </IconButton>
      <List sx={{ width: '100%', padding: 0, marginTop: '4rem', textAlign: 'center' }}>
        {navItems.map((item, index) => (
          <motion.div
            key={item.text}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.5 }}
          >
            <ListItem button sx={{ justifyContent: 'center', marginBottom: '2rem' }}>
              <ListItemText primary={item.text} sx={{ textAlign: 'center', marginLeft: '1rem' }} />
            </ListItem>
          </motion.div>
        ))}
      </List>
    </motion.div>
  );

  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30,delay:0.1 }}
      >
        <AppBar position="absolute" sx={{ backgroundColor: '#1D1D1D', width:'50%', top:"7%", left:"50%", transform:'translate(-50%,-50%)', '@media (max-width: 768px)': { width: '75%' }}}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ color: 'cyan', display: { sm: 'block', md: 'none' } }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <motion.img
              src="/logo.png"
              alt="Logo"
              className="mr-2 w-10"
              style={{ display: { sm: 'none', md: 'block' } }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30,duration:2,delay:0.2 }}
            />
            <Typography variant="h6" sx={{ flexGrow: 1, color: 'white' }}>
              Portfolio
            </Typography>
            <div className="hidden md:flex space-x-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.3 }}
                >
                  <Button 
                    color="inherit" 
                    startIcon={item.icon}
                    sx={{ color: 'cyan', '&:hover': { color: '#FFD700' } }}
                  >
                    {item.text}
                  </Button>
                </motion.div>
              ))}
            </div>
          </Toolbar>
        </AppBar>
      </motion.div>
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