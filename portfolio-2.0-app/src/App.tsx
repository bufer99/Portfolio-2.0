import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Box, Container, Flex, Link, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import { Navigation } from './Navigation'
import { SectionLayout } from './Section.Layout'
import { ScrollButton } from './ScrollButton'
import { useInView } from 'react-intersection-observer';
import { motion, useScroll } from "framer-motion"
import About from './Sections/About'
import Skills from './Sections/Skills'
import Works from './Sections/Works'
import Footer from './Footer'

function App() {

  const [scrollY, setScrollY] = useState(0);
  const throttle = (fn: Function, wait: number = 300) => {
    let inThrottle: boolean,
      lastFn: ReturnType<typeof setTimeout>,
      lastTime: number;
    return function (this: any) {
      const context = this,
        args = arguments;
      if (!inThrottle) {
        fn.apply(context, args);
        lastTime = Date.now();
        inThrottle = true;
      } else {
        clearTimeout(lastFn);
        lastFn = setTimeout(() => {
          if (Date.now() - lastTime >= wait) {
            fn.apply(context, args);
            lastTime = Date.now();
          }
        }, Math.max(wait - (Date.now() - lastTime), 0));
      }
    };
  };

  window.addEventListener('scroll', throttle(() => requestAnimationFrame(() => setScrollY(window.scrollY / 10))))
  //window.addEventListener('scroll', () => setScrollY(window.scrollY / 10))


  return (
    <React.Fragment>
      <Box
        className='parallax'
        position="relative"
        h="100vh"
      >
        <Box
          position="fixed"
          top={0}
          left={0}
          right={0}
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          bgImage="/windows.png"
          bgAttachment="fixed"
          w="100%"
          filter={`blur(${scrollY / 10}px)`}
          transform={`translate3d(0, -${scrollY}px, 0)`}
          backgroundPosition={`0 ${scrollY * (3 / 5)}px`}
          h="100%"
        />
        

      </Box>
      <Box
        className='main-container'
        position="relative"
        zIndex={1000}
      >
        <Flex
          justifyContent="space-evenly"
        >
          <Box as="aside" className='left'></Box>
          <Box as='main'
            //mx='auto'
            maxW={{ base: '100%', '2xl': '1400px' }}
          >

            <Navigation />
            <Box
              mx={{base: "1rem"}}
            >
              <SectionLayout position={0} href="about">
                <About />
              </SectionLayout>
              <SectionLayout position={1} href="skills">
                <Skills />
              </SectionLayout>
              <SectionLayout position={2} href="works">
                <Works />
              </SectionLayout>
            </Box >
          </Box >
          <Box as="aside" className='right'></Box>
        </Flex>
        <Footer />
      </Box>
    </React.Fragment>

  )
}

export default App
