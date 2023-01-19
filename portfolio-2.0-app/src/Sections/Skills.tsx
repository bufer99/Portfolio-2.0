import { Box, Flex, Grid, Img, Text, Tooltip } from "@chakra-ui/react";
import { DiJava, DiReact, DiPhp, DiLaravel, DiCss3, DiHtml5, DiJsBadge, DiCode, DiTerminal } from "react-icons/di";
import { SiTypescript, SiLaravel, SiJava } from "react-icons/si";
import { useRef, useState } from 'react'
import { useInView } from "framer-motion";


const IconWrapper = ({ children, label }: { children: React.ReactNode, label: string }) => {

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            boxShadow="0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);"
            p={5}
        >
            {children}
            <Text fontSize={"25px"}>{label}</Text>
        </Box >
    )
}


const SkillFlex = ({ children }: { children: React.ReactNode }) => {
    return (
        <Flex
            gap={5}
            flexWrap="wrap"
        >
            {children}
        </Flex>
    )
}


export default function Skills() {

    const ref = useRef(null)
    const isInView = useInView(ref, { amount: .5, once: true })

    console.log(isInView)

    return (
        <Box
            className="skills-content"

        >
            <Text as="h2">
                Skills
            </Text>
            <Box
                ref={ref}
                transform={isInView ? "none" : "translateX(-200px)"}
                opacity={isInView ? 1 : 0}
                transition={"all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}
            >
                < Box
                    display="flex"
                    flexDirection="column"
                    gap={5}
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
                        </SkillFlex>
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}