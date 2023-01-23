import { Box, Text } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {

    const ref = useRef(null)
    const isInView = useInView(ref, { amount: .5, once: true })

    return (
        <Box
            fontSize={{ base: "lg", sm: "xl", md: "3xl", lg: "4xl" }}
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

                I am also familiar with Git, Agile methodologies and have experience with web development tools such as Webpack and Babel. I am always eager to learn new technologies and stay up-to-date with the latest developments in the frontend development world.

                I am a team player and have experience working in a team environment. I am able to work under pressure and meet tight deadlines. I am also able to work independently, with good time management and problem-solving skills.

                I am excited about the opportunity to apply my skills and knowledge in a professional setting and to continue learning and growing as a frontend developer. I am looking forward to the possibility of joining your team and contributing to the success of your projects.

                Thank you for considering my application.
            </Box>
        </Box>
    )
}