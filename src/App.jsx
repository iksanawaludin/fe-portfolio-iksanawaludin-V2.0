import React from 'react';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import AboutSection from './Components/AboutSection';
import ProjectSection from './Components/ProjectSection';
import BlogSection from './Components/BlogSection';
import ContactSection from './Components/ContactSection';
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
    <Navbar></Navbar>
    <HeroSection></HeroSection>
    <AboutSection></AboutSection>
    <ProjectSection></ProjectSection>
    <BlogSection></BlogSection>
    <ContactSection></ContactSection>
    <Footer></Footer>
    </>
  );
};

export default App;
