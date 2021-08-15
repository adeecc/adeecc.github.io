import React from 'react';
import Container from '../components/Container';
import About from './sections/About';
import Hero from './sections/Hero';

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Hero />
        <About />
      </Container>
    </>
  );
};

export default Home;
