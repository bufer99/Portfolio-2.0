import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { DiReact, DiJsBadge } from "react-icons/di";
import { SiTypescript, SiLaravel, SiJava, SiRedux } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

import { useInView } from "react-intersection-observer";


const IconWrapper = ({ children, label }: { children: React.ReactNode, label: string }) => {

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            boxShadow="0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)"
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

    const { ref, inView, entry } = useInView({
        triggerOnce: true,
        threshold: 0,
    });

    return (
        <Box
            className="skills-content"
            ref={ref}
            position="relative"
        >
            <Text as="h2">
                Stack
            </Text>
            <Flex
                direction="column"
                gap={8}
                ml={{ base: 0, md: 5 }}

                transform={inView ? "none" : "translateX(-200px)"}
                opacity={inView ? 1 : 0}
                transition={"all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}
            >
                <Box>
                    <Text as="h3">Frontend</Text>

                    <SkillFlex>
                        <IconWrapper label="React">
                            <DiReact />
                        </IconWrapper>
                        <IconWrapper label="JS ES6">
                            <DiJsBadge />
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