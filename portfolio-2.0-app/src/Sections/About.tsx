import { Box, Text } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {

    const ref = useRef(null)
    const isInView = useInView(ref, { amount: .2, once: true })

    return (
        <Box
            fontSize={{ base: "lg", sm: "xl", md: "3xl", lg: "3xl" }}
            color="white"
        >
            <Text as="h2">
                About me
            </Text>
            <Box
                ref={ref}
                transform={isInView ? "none" : "translateX(-200px)"}
                opacity={isInView ? 1 : 0}
                transition={"all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}

            >
                Hi there! My name is Andras Lango and I am a university student in my final year of study. I am currently pursuing a degree in Computer Science at ELTE.

                I am a highly motivated and hardworking individual with a passion for frontend development. I have gained a solid foundation in web development through my studies and have been honing my skills through various projects and internships.

                I have experience in HTML, CSS, JavaScript and various frontend frameworks such as React and Angular. I have experience in responsive web design, cross-browser compatibility, and have a good understanding of web accessibility.
            </Box>
        </Box>
    )
}