import { Box, Flex, Img, Link, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { DiGithubFull } from "react-icons/di";
import { BiLinkExternal } from "react-icons/bi"
import { useInView } from "framer-motion";
import { DiJava, DiReact, DiPhp, DiLaravel, DiCss3, DiHtml5, DiJsBadge, DiCode, DiTerminal } from "react-icons/di";
import { SiTypescript, SiLaravel, SiJava, SiRedux } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";


const Technologies = ({ children }: { children: React.ReactNode }) => {
    return (
        <Box>
            {children}
        </Box>
    )
}

const NewLabel = () => {
    return (
        <Box
            position="absolute"
            color="black"
            bg="white"
            top="-5px"
            left="-5px"
            fontSize="lg"
            borderRadius="10%"
            p={1}
            fontWeight="bold"
            userSelect="none"
            boxShadow="rgb(0 0 0 / 35%) 0px 2px 8px"
        >New</Box>
    )
}

const ReferenceItem = ({ children, img, githubURL, liveURL, opened, setOpened, newItem = false, isInView, delay }:
    {
        children?: React.ReactNode,
        img: string,
        githubURL: string,
        liveURL?: string,
        opened: string,
        setOpened: (v: string) => void,
        newItem?: boolean,
        isInView: boolean,
        delay: number
    }) => {
    return (
        <Box
            position="relative"
            opacity={isInView ? 1 : 0}
            transform={isInView ? "none" : "translateX(-200px)"}
            transition={`all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay * 100}ms`}
        >
            {newItem && <NewLabel />}

            <Box
                boxShadow="0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);"
                className="work-item"
                borderRadius={8}
                overflow="hidden"
                //bg="white"
                color="white"
                display="flex"
                flexDirection="column"
                alignContent="stretch"
                onClick={() => {
                    if (githubURL === opened) setOpened("")
                    else setOpened(githubURL)
                }}
                h="max-content"
            >

                <Img src={img} />
                <Text
                    fontSize={{ base: "sm" }}
                    p={{ base: 2, xl: 5 }}
                    textOverflow="ellipsis"
                    transition="all 200ms"
                    whiteSpace={opened === githubURL ? "normal" : "nowrap"}
                    overflow="hidden"
                    userSelect="none"
                >
                    {children}
                </Text>
                <Flex
                    justifyContent="space-evenly"
                    alignItems="center"
                    className="links"
                >
                    <Link target="_blank" href={githubURL}><DiGithubFull /></Link>
                    {liveURL && <Link target="_blank" href={liveURL}><BiLinkExternal /></Link>}
                </Flex>
            </Box >
        </Box>
    )
}


export default function Works() {

    const [opened, setOpened] = useState<string>("");

    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 1, once: true })

    //console.log(isInView)

    return (
        <Box
            className="work-content"
        >
            <Text as="h2">
                My works
            </Text>
            <Box

                display="flex"
                justifyContent="center"
                flexWrap="wrap"
                gap={5}
                ref={ref}
            >

                <ReferenceItem
                    opened={opened}
                    setOpened={setOpened}
                    img="/references/cardGame.PNG"
                    githubURL="https://github.com/bufer99/set-game"
                    liveURL="https://bufer99.github.io/set-game/"
                    isInView={isInView}
                    delay={0}

                >
                    One of my first work in native Javascript. A very <b>basic card game</b> for University subject.
                </ReferenceItem>

                <ReferenceItem
                    opened={opened}
                    setOpened={setOpened}
                    img="/references/tictactoe.PNG"
                    githubURL="https://github.com/bufer99/tictactoe"
                    liveURL="https://bufer99.github.io/tictactoe/"
                    isInView={isInView}
                    delay={1}
                >
                    One of my first work in native Javascript. <b>Tic Tac Toe</b> game for Uni.
                </ReferenceItem>

                <ReferenceItem
                    opened={opened}
                    setOpened={setOpened}
                    img="/references/form.PNG"
                    githubURL="https://github.com/bufer99/formComponent-react"
                    liveURL="https://bufer99.github.io/formComponent-react/"
                    isInView={isInView}
                    delay={2}
                >
                    <b>Form Component</b> My First React project in University asdasdas d asd
                </ReferenceItem>

                <ReferenceItem
                    opened={opened}
                    setOpened={setOpened}
                    img="/references/rating.PNG"
                    githubURL="https://github.com/bufer99/interactive-rating-component-react"
                    liveURL="https://bufer99.github.io/interactive-rating-component-react/"
                    isInView={isInView}
                    delay={3}
                >

                </ReferenceItem>
                <ReferenceItem
                    opened={opened}
                    setOpened={setOpened}
                    img="/references/portfolio1.PNG"
                    githubURL="https://github.com/bufer99/portfolio-react"
                    liveURL="https://bufer99.com/"
                    isInView={isInView}
                    delay={4}
                >
                    My <b>first</b> live website with unique domain
                </ReferenceItem>
                <ReferenceItem
                    opened={opened}
                    setOpened={setOpened}
                    img="/references/movieRating.PNG"
                    githubURL="https://github.com/bufer99/MovieRatingApp-frontend"
                    liveURL="https://move-rating-app-cc7pg.ondigitalocean.app/"
                    newItem={true}
                    isInView={isInView}
                    delay={5}
                >
                    <b>Movie Rating App</b>. Full stack React+Laravel api website
                </ReferenceItem>
            </Box>
        </Box >
    )
}