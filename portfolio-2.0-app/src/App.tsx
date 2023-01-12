import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Box, Container, Link, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import { Navigation } from './Navigation'
import { SectionLayout } from './Section.Layout'
import { ScrollButton } from './ScrollButton'
import { useInView } from 'react-intersection-observer';

function App() {

  const [activeSection, setActiveSection] = useState(null);


  return (
    <Box
      as='main'
      mx='auto'
      maxW={{ base: '100%', '2xl': '1400px' }}
    >
      <Navigation />
      <Box>
        <SectionLayout position={0} id="about">
          About me
        </SectionLayout>
        <SectionLayout position={1} id="skills">
          SKILLS
        </SectionLayout>
        <SectionLayout position={2} id="works">
          WORKS
        </SectionLayout>
      </Box>
    </Box>
  )
}

export default App
