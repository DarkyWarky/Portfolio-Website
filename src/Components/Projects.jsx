import React, { useRef, useEffect, useState } from 'react';
import { Box, Typography,Button } from '@mui/material';
import { Card, CardContent, CardCover } from '@mui/joy';
import { GitHub, Language, ArrowBack, ArrowForward } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';

const CardBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#0a192f',
  color: 'cyan',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '100vh',
  overflow: 'hidden',
}));

const CarouselContainer = styled(motion.div)({
  display: 'flex',
  width: '100%',
  height: '500px',
  alignItems: 'center',
  position: 'relative',
  justifyContent:'center',
});
const CardWrapper = styled(motion.div)({
  width: '300px',
  height: '400px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  left: '-20%',
  transform: 'translateX(-50%)', 
});

const YellowButton = styled(Button)({
  backgroundColor: 'white',
  color: '#118cd4',
  '&:hover': {
    color:'cyan'
  },
});

const StyledCard = styled(Card)({
  width: '100%',
  height: '100%',
  backgroundColor: '#16213e',
  color: 'cyan',
  transition: 'all 0.3s ease',
});


const allProjects = [
  {
    title: 'Todo-List',
    description: 'This is a Simple Todo-List project Demonstrating Crud operations using React and Django',
    imageUrl: '/django-react-todo.png',
    githubUrl: 'https://github.com/DarkyWarky/Todo-List-Django-MPR',
    demoUrl: 'https://example.com',
  },
  {
    title: 'Personal Portfolio',
    description: 'My own Portfolio Made using react and its libraries such as Framer-Motion and MUI',
    imageUrl: '/personal-portfolio.png',
    githubUrl: 'https://github.com',
    demoUrl: 'https://example.com',
  },
  {
    title: 'Sms-Spam Classifier',
    description: 'A basic SMS classifier to identify and categorize text messages as spam or not spam. This project demonstrates fundamental concepts in NLP and classification.',
    imageUrl: '/sms-classifier.png',
    githubUrl: 'https://github.com/DarkyWarky/Sms_spam-Classifier',
    demoUrl: 'https://example.com',
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(Math.floor(allProjects.length/2));
  const controls = useAnimation();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], ['20%', '-20%']);

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.5,delay:0.3 } });
  }, [controls]);

  const moveCarousel = (direction) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + direction + allProjects.length) % allProjects.length;
      return newIndex;
    });
  };

  const renderCard = (project, index) => {
    const distance = Math.abs(index - currentIndex);
    const isActive = distance === 0;
    const offset = (index - currentIndex) * 320;

    return (
      <CardWrapper
        key={index}
        animate={{ x: offset }}
        transition={{ duration: 0.5 }}
        style={{
          filter: isActive ? 'blur(0px)' : 'blur(2px)',
          scale: isActive ? 1.1 : 0.9,
          zIndex: isActive ? 1 : 0,
        }}
      >
        <StyledCard>
  <CardCover sx={{ position: 'relative', height: '200px' }}>
    <img 
      src={project.imageUrl} 
      alt={project.title} 
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    />
  </CardCover>
  <CardContent sx={{ justifyContent: 'flex-end' }}>
    <Typography level="h2" fontSize="xl" sx={{fontSize:'20px',fontWeight:'bold'}}>
      {project.title}
    </Typography>
    <Typography textColor="neutral.300" >
      {project.description}
    </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
      <YellowButton
        variant="contained"
        startIcon={<GitHub />}
        href={project.githubUrl}
        target="_blank"
        size="small"
      >
        GitHub
      </YellowButton>
      <YellowButton
        variant="contained"
        startIcon={<Language />}
        href={project.demoUrl}
        target="_blank"
        size="small"
      >
        Demo
      </YellowButton>
    </Box>
  </CardContent>
</StyledCard>
      </CardWrapper>
    );
  };

  return (
    <CardBox ref={containerRef} className='projects'>
      <motion.div style={{ opacity, scale, y }} initial={{ opacity: 0, y: 20 }} animate={controls}>
        <Typography variant="h2" align="center" gutterBottom>
          Projects
        </Typography>
        <CarouselContainer >
          {allProjects.map(renderCard)}
        </CarouselContainer>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button
            startIcon={<ArrowBack />}
            onClick={() => moveCarousel(-1)}
            sx={{ color:'cyan' }}
          >
            Previous
          </Button>
          <Button
            endIcon={<ArrowForward />}
            onClick={() => moveCarousel(1)}
            sx={{ ml: 2, color:'cyan' }}
          >
            Next
          </Button>
        </Box>
      </motion.div>
    </CardBox>
  );
};

export default Projects;
