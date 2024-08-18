import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Box, Container } from '@mui/joy';
import { keyframes } from '@emotion/react';
import { useTheme, useMediaQuery } from '@mui/material';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateY(50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const Intro = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        pt: 10,
        px: 2,
        backgroundColor: '#0a192f'
      }}
    >
      <Container
        sx={{
          zIndex: 1,
          position: 'relative',
          width: { xs: '100%', md: '50%' },
          pr: { md: 4 },
        }}
        className='bottom-[-100px] md:bottom-0'
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            level="h1"
            sx={{
              fontSize: { sm: '2.5rem', md: '4rem' },
              fontWeight: 'bold',
              mb: 2,
              color: 'cyan',
              animation: `${fadeIn} 1s ease-out`,
            }}
          >
            Welcome to My Portfolio
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Typography
            level="body1"
            sx={{
              fontSize: { xs: '1rem', md: '1.3rem' },
              lineHeight: 1.6,
              color: 'white',
              mb: 4,
              animation: `${slideIn} 1s ease-out 0.5s both`,
            }}
          >
            {isMobile
        ? 'I am a passionate Full-Stack Developer with a growing interest in AI/ML. With a strong foundation in both front-end and back-end development, I bring creativity and technical expertise to every project. My experience extends beyond traditional web and app development, as I\'ve begun exploring the exciting world of artificial intelligence and machine learning, integrating these cutting-edge technologies into my work.'
        : 'I am a passionate Full-Stack Developer with a growing interest in AI/ML. With a strong foundation in both front-end and back-end development, I bring creativity and technical expertise to every project. My experience extends beyond traditional web and app development, as I\'ve begun exploring the exciting world of artificial intelligence and machine learning, integrating these cutting-edge technologies into my work. Whether building responsive web applications or experimenting with AI-driven solutions, I\'m committed to delivering impactful, user-centric experiences.'}
          </Typography>
        </motion.div>
      </Container>

      <Box
        sx={{
          position: { xs: 'absolute', md: 'relative' },
          zIndex: 0,
          top: { xs: '6rem', md: 0 },
          left: { xs: 0, md: 'auto' },
          width: { xs: '100%', md: '50%' },
          height: { xs: '80vh', md: 'auto' },
          opacity: { xs: 0.25, md: 1 },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <motion.img
          src="/image-nobg.png"
          alt="Portfolio Image"
          style={{
            maxWidth: '100%',
            maxHeight: '80vh',
            borderRadius: '0.5rem',
            minHeight: '75vh'
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        />
      </Box>
    </Box>
  );
};

export default Intro;