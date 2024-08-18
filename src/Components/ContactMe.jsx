import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, IconButton } from '@mui/material';
import { Card, Input, Button, Textarea } from '@mui/joy';
import { styled } from '@mui/system';
import { LinkedIn, GitHub, Instagram, Description } from '@mui/icons-material';

const Root = styled(Box)({
  minHeight: '100vh',
  background: '#0a192f',
  color: '#8892b0',
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
});

const BackgroundAnimation = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 0,
});

const ContentWrapper = styled(Box)({
  position: 'relative',
  zIndex: 1,
  width: '100%',
  maxWidth: '500px',
});

const StyledCard = styled(Card)({
  background: 'linear-gradient(135deg, #020c1b 0%, #0a192f 100%)',
  backdropFilter: 'blur(10px)',
  color: '#8892b0',
  padding: '2rem',
  width: '100%',
  border: 'none',
  borderRadius: 0,
  boxShadow: '0 10px 30px -15px rgba(2,12,27,0.7)',
});

const StyledInput = styled(Input)({
  backgroundColor: 'rgba(17, 34, 64, 0.8)',
  color: '#c9d1d9',
  borderRadius: 0,
  marginBottom: '1rem',
  '&:focus': {
    boxShadow: '0 0 0 2px #64ffda',
  },
});

const StyledTextarea = styled(Textarea)({
  backgroundColor: 'rgba(17, 34, 64, 0.8)',
  color: '#c9d1d9',
  borderRadius: 0,
  marginBottom: '1rem',
  '&:focus': {
    boxShadow: '0 0 0 2px #64ffda',
  },
});

const StyledButton = styled(Button)({
  backgroundColor: '#64ffda',
  color: '#0a192f',
  borderRadius: 0,
  '&:hover': {
    backgroundColor: '#4caf50',
  },
});

const SocialButton = styled(IconButton)({
  color: '#64ffda',
  borderRadius: 0,
  border: '1px solid #64ffda',
  margin: '0 0.5rem',
  '&:hover': {
    backgroundColor: 'rgba(100, 255, 218, 0.1)',
  },
});

const ContactMe = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.3 } },
    blur: { scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <Root>
      <BackgroundAnimation>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              background: '#64ffda',
              borderRadius: '50%',
            }}
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              opacity: [0.1, 0.5, 0.1],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </BackgroundAnimation>
      <ContentWrapper>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Typography variant="h2" className="text-4xl font-bold mb-8 text-center text-cyan-400">
              Contact Me
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <StyledCard>
              <form className="space-y-4">
                <motion.div variants={inputVariants} whileFocus="focus" whileTap="focus">
                  <StyledInput placeholder="Your Name" fullWidth />
                </motion.div>
                <motion.div variants={inputVariants} whileFocus="focus" whileTap="focus">
                  <StyledInput placeholder="Your Email" fullWidth />
                </motion.div>
                <motion.div variants={inputVariants} whileFocus="focus" whileTap="focus">
                  <StyledTextarea
                    placeholder="Your Message"
                    minRows={4}
                    fullWidth
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <StyledButton fullWidth>Send Message</StyledButton>
                </motion.div>
              </form>

              <Box className="mt-4">
                <Box className="flex justify-center mb-4">
                  <motion.div whileHover={{ y: -5 }}>
                    <SocialButton href="https://www.linkedin.com/in/yourprofile" target="_blank">
                      <LinkedIn />
                    </SocialButton>
                  </motion.div>
                  <motion.div whileHover={{ y: -5 }}>
                    <SocialButton href="https://github.com/yourusername" target="_blank">
                      <GitHub />
                    </SocialButton>
                  </motion.div>
                  <motion.div whileHover={{ y: -5 }}>
                    <SocialButton href="https://www.instagram.com/yourusername" target="_blank">
                      <Instagram />
                    </SocialButton>
                  </motion.div>
                </Box>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <StyledButton
                    fullWidth
                    startDecorator={<Description />}
                    href="/path-to-your-resume.pdf"
                    target="_blank"
                  >
                    Download Resume
                  </StyledButton>
                </motion.div>
              </Box>
            </StyledCard>
          </motion.div>
        </motion.div>
      </ContentWrapper>
    </Root>
  );
};

export default ContactMe;