import { Box, Flex, Grid, Img, Text, Tooltip, transition } from "@chakra-ui/react";
import { DiJava, DiReact, DiPhp, DiLaravel, DiCss3, DiHtml5, DiJsBadge, DiCode, DiTerminal } from "react-icons/di";
import { SiTypescript, SiLaravel, SiJava, SiRedux } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { useRef, useState } from 'react'
import { useInView } from "framer-motion";


const IconWrapper = ({ children, label }: { children: React.ReactNode, label: string }) => {

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            boxShadow="0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)"
            //backgroundColor="rgba(0,0,0,.03)"
            _hover={{
                transform: "scale(1.1)",

            }}
            transition="transform 200ms"
            p={5}
            pb={2}
            gap={2}
            color="white"
        >

            {children}
            <Text fontSize={{ base: "1rem", md: "25px" }}>{label}</Text>
        </Box >
    )
}


const SkillFlex = ({ children }: { children: React.ReactNode }) => {
    return (
        <Grid
            gap={5}
            ml={{ base: 0, md: 6 }}
            justifyContent={{ base: "center", sm: "start" }}
            gridTemplateColumns="repeat(auto-fit, minmax(80px, min-content))"
        >
            {children}
        </Grid>
    )
}


export default function Skills() {

    const ref = useRef(null)
    const isInView = useInView(ref, { amount: .5, once: true })

    //console.log(isInView)

    return (
        <Box
            className="skills-content"
        >
            <Text as="h2">
                Stack
            </Text>
            <Flex
                direction="column"
                gap={8}
                mt={3}
                ml={{ base: 0, md: 5 }}
            >
                <Box>
                    <Text as="h3">Frontend</Text>

                    <SkillFlex>
                        <IconWrapper label="JS ES6">
                            <DiJsBadge />
                        </IconWrapper>
                        <IconWrapper label="React">
                            <DiReact />
                        </IconWrapper>
                        <IconWrapper label="CSS">
                            <DiCss3 />
                        </IconWrapper>
                        <IconWrapper label="HTML5">
                            <DiHtml5 />
                        </IconWrapper>
                        <IconWrapper label="TS">
                            <SiTypescript />
                        </IconWrapper>
                        <IconWrapper label="Redux">
                            <SiRedux />
                        </IconWrapper>
                    </SkillFlex>
                </Box>
                <Box>
                    <Text as="h3">Backend</Text>

                    <SkillFlex>
                        <IconWrapper label="Java">
                            <SiJava />
                        </IconWrapper>
                        <IconWrapper label="PHP">
                            <DiPhp />
                        </IconWrapper>
                        <IconWrapper label="Laravel">
                            <SiLaravel />
                        </IconWrapper>
                        <IconWrapper label="MySQL">
                            <FaDatabase />
                        </IconWrapper>
                    </SkillFlex>
                </Box>
            </Flex>
        </Box >
    )
}


/*
<Box
                ref={ref}
                transform={isInView ? "none" : "translateX(-200px)"}
                opacity={isInView ? 1 : 0}
                transition={"all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}
                ml={6}
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    mb={5}
                >
                    <Box>
                        <Text as="h3">
                            Frontend
                        </Text>
                        <SkillFlex>
                            <IconWrapper label="JS ES6">
                                <DiJsBadge />
                            </IconWrapper>
                            <IconWrapper label="React">
                                <DiReact />
                            </IconWrapper>
                            <IconWrapper label="CSS">
                                <DiCss3 />
                            </IconWrapper>
                            <IconWrapper label="HTML5">
                                <DiHtml5 />
                            </IconWrapper>
                            <IconWrapper label="TS">
                                <SiTypescript />
                            </IconWrapper>
                            <IconWrapper label="Redux">
                                <SiRedux />
                            </IconWrapper>
                        </SkillFlex>
                    </Box>
                </Box >
                <Box>
                    <Box>
                        <Text as="h3">
                            Backend
                        </Text>
                        <SkillFlex>
                            <IconWrapper label="Java">
                                <SiJava />
                            </IconWrapper>
                            <IconWrapper label="PHP">
                                <DiPhp />
                            </IconWrapper>
                            <IconWrapper label="Laravel">
                                <SiLaravel />
                            </IconWrapper>
                            <IconWrapper label="MySQL">
                                <FaDatabase />
                            </IconWrapper>
                        </SkillFlex>
                    </Box>
                </Box>
            </Box>
            
            */