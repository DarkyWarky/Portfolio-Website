import React from 'react';
import { motion } from 'framer-motion';
import { Box, Grid, Typography } from '@mui/material';
import { Card, Chip, Divider } from '@mui/joy';
import { styled } from '@mui/system';
import { School, Code, Work, Person} from '@mui/icons-material';

const Root = styled(Box)({
  height: '100vh',
  maxHeight:'100vh',
  backgroundColor: '#0a192f',
  color: 'cyan',
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
});

const ScrollContainer = styled(Box)({
  overflowY: 'auto',
  flex: 1,
  '&::-webkit-scrollbar': {
    width: '0.4em',
  },
  '&::-webkit-scrollbar-track': {
    boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'rgba(0,0,0,.1)',
    outline: '1px solid slategrey',
  },
});

const StyledCard = styled(Card)({
  backgroundColor: '#112240',
  color: '#e6f1ff',
  padding: '1rem',
  height: '100%',
  border: 'none',
  borderRadius: 0,
  boxShadow: '0 10px 30px -15px rgba(2,12,27,0.7)',
});

const StyledChip = styled(Chip)({
  backgroundColor: '#172a45',
  color: '#64ffda',
  margin: '0.25rem',
  borderRadius: 0,
});

const AboutMe = () => {
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

  const summary = [
    "Passionate software engineer with experience in full-stack development.",
    "Specialized in creating scalable web applications.",
    "Strong advocate for clean code and agile methodologies.",
    "Constantly learning and adapting to new technologies and industry trends especially in AI/ML."
  ];

  const skills = [
    'JavaScript', 'React', 'Node.js', 'Python',
    'Flask', 'Git', 'MongoDB',"Express"
  ];

  const experiences = [
    {
      title: "N/A",
      company: "N/A",
      period: "N/A",
      description: "N/A"
    },
    {
      title: "N/A",
      company: "N/A",
      period: "N/A",
      description: "N/A"
    },
    {
      title: "N/A",
      company: "N/A",
      period: "N/A",
      description: "N/A"
    },
  ];


  return (
    <Root>
      <Typography variant="h2" className="text-center">
        About Me
      </Typography>
      <ScrollContainer>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <motion.div variants={itemVariants}>
                <StyledCard>
                  
                  <Typography sx={{fontSize:'20px'}} level="h3" className="mb-2">
                  <Person className="text-2xl mb-1 mr-2 text-cyan-400" />
                    Summary
                  </Typography>
                  <ul className="list-disc pl-6 text-sm">
                    {summary.map((item, index) => (
                      <li key={index} className="mb-1 text-base">{item}</li>
                    ))}
                  </ul>
                </StyledCard>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6} >
              <motion.div variants={itemVariants}>
                <StyledCard >
                  <Typography sx={{fontSize:'20px'}} level="h3" className="mb-2">
                  <Code className="text-2xl mr-2  text-cyan-400" />
                    Skills
                  </Typography>
                  <Box className="grid grid-cols-2 gap-3 md:grid-cols-4">
                    {skills.map((skill) => (
                      <StyledChip size="lg" >
                        {skill}</StyledChip>
                    ))}
                  </Box>
                </StyledCard>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <StyledCard>
                  <Typography sx={{fontSize:'20px'}} level="h5" className="mb-2">
                  <School className="text-2xl mr-2 mb-1 text-cyan-400" />
                    Education
                  </Typography>
                  <Typography className="text-sm mb-1">
                    B.E in Artificial Intelligence and Data Science
                  </Typography>
                  <Typography className="text-xs text-gray-400 mb-2">
                    Mumbai University, 2022 - 2026 (Pursuing)
                  </Typography>
                </StyledCard>
              </motion.div>
            </Grid>

            <Grid item xs={12} >
              <motion.div variants={itemVariants}>
                <StyledCard>
                  <Typography sx={{fontSize:'20px'}} level="h5" className="mb-2">
                  <Work className="text-2xl mb-1 mr-2 text-cyan-400" />
                    Experience
                  </Typography>
                  <Box className='grid gap-2 md:grid-cols-2'>
                  {experiences.map((exp, index) => (
                    <Box key={index} className="mb-2">
                      <Typography sx={{fontWeight:'700',color:'cyan'}} className="text-lg">{exp.title}</Typography>
                      <Typography className="text-xs text-gray-400">{exp.company}, {exp.period}</Typography>
                      <Typography className="text-xs mt-1 text-gray-200">{exp.description}</Typography>
                    </Box>
                  ))}
                  </Box>
                </StyledCard>
              </motion.div>
            </Grid>
          </Grid>

          <motion.div variants={itemVariants}>
            <Divider className="my-4" />
          </motion.div>
        </motion.div>
      </ScrollContainer>
    </Root>
  );
};

export default AboutMe;