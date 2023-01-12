import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Box, Container, Link, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import { Navigation } from './Navigation'
import { SectionLayout } from './Section.Layout'
import { ScrollButton } from './ScrollButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>
      <Box
        as='main'
        mx='auto'
        maxW={{ base: '100%', '2xl': '1400px' }}
      >
        <Navigation />
        <Box>
          <SectionLayout id="about">
            About me
          </SectionLayout>
          <SectionLayout id="skills">
            SKILLS
          </SectionLayout>
          <SectionLayout id="works">
            WORKS
          </SectionLayout>
        </Box>
      </Box>

      <ScrollButton
        position={0}
        href="#about"
      >
        About
      </ScrollButton>
      <ScrollButton
        position={1}
        href="#skills"
      >
        Skills
      </ScrollButton>
      <ScrollButton
        position={2}
        href="#works"
      >
        Works
      </ScrollButton>
    </React.Fragment>
  )
}

export default App
