import { Box, Flex, Img, Link, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { DiGithubFull } from "react-icons/di";
import { BiLinkExternal } from "react-icons/bi"
import { useInView } from "framer-motion";


const ReferenceItem = ({ children, img, githubURL, liveURL, opened, setOpened }:
    {
        children?: React.ReactNode,
        img: string,
        githubURL: string,
        liveURL?: string,
        opened: string,
        setOpened: (v: string) => void
    }) => {




    return (
        <Box
            //boxShadow="0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);"
            className="work-item"
            borderRadius={8}
            overflow="hidden"
            bg="white"
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
                p={5}
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
            >
                <Link target="_blank" href={githubURL}><DiGithubFull /></Link>
                {liveURL && <Link target="_blank" href={liveURL}><BiLinkExternal size="30px" /></Link>}
            </Flex>
        </Box >
    )
}


export default function Works() {

    const [opened, setOpened] = useState<string>("");

    const ref = useRef(null)
    const isInView = useInView(ref, { amount: .5, once: true })

    return (
        <Box
            className="work-content"
        >
            <Text as="h2">
                My works
            </Text>
            <Box
                ref={ref}
                display="flex"
                justifyContent="center"
                flexWrap="wrap"
                gap={5}

                opacity={isInView ? 1 : 0}
                transform={isInView ? "none" : "translateX(-200px)"}
                transition={"all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}
            >

                <ReferenceItem
                    opened={opened}
                    setOpened={setOpened}
                    img="/references/cardGame.PNG"
                    githubURL="https://github.com/bufer99/set-game"
                    liveURL="https://bufer99.github.io/set-game/"
                >
                    One of my first work in native Javascript. A very <b>basic card game</b> for University subject.
                </ReferenceItem>

                <ReferenceItem
                    opened={opened}
                    setOpened={setOpened}
                    img="/references/tictactoe.PNG"
                    githubURL="https://github.com/bufer99/tictactoe"
                    liveURL="https://bufer99.github.io/tictactoe/"
                >
                    One of my first work in native Javascript. <b>Tic Tac Toe</b> game for Uni.
                </ReferenceItem>

                <ReferenceItem
                    opened={opened}
                    setOpened={setOpened}
                    img="/references/form.PNG"
                    githubURL="https://github.com/bufer99/formComponent-react"
                    liveURL="https://bufer99.github.io/formComponent-react/"
                >
                    <b>Form Component</b> My First React project in University asdasdas d asd
                </ReferenceItem>

                <ReferenceItem
                    opened={opened}
                    setOpened={setOpened}
                    img="/references/rating.PNG"
                    githubURL="https://github.com/bufer99/interactive-rating-component-react"
                    liveURL="https://bufer99.github.io/interactive-rating-component-react/"
                >

                </ReferenceItem>
                <ReferenceItem
                    opened={opened}
                    setOpened={setOpened}
                    img="/references/portfolio1.PNG"
                    githubURL="https://github.com/bufer99/portfolio-react"
                    liveURL="https://bufer99.com/"
                >
                    My <b>first</b> live website with unique domain
                </ReferenceItem>
                <ReferenceItem
                    opened={opened}
                    setOpened={setOpened}
                    img="/references/movieRating.PNG"
                    githubURL="https://github.com/bufer99/MovieRatingApp-frontend"
                    liveURL="https://move-rating-app-cc7pg.ondigitalocean.app/"
                >
                    <b>Movie Rating App</b>. Full stack React+Laravel api website
                </ReferenceItem>
            </Box>
        </Box >
    )
}