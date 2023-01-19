import { Box, Flex, Img, Link, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { DiGithubFull } from "react-icons/di";


const ReferenceItem = ({ children, img, githubURL, liveURL }: { children?: React.ReactNode, img: string, githubURL: string, liveURL?: string }) => {
    return (
        <Box
            boxShadow="0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);"
            className="work-item"
            borderRadius={8}
            overflow="hidden"
            bg="white"
        >
            <Img src={img} />
            <Text
                fontSize={{ base: "sm" }}
                p={5}
            >
                {children}
            </Text>
            <Flex
                //bg="red"
                justifyContent="space-evenly"
                alignItems="center"
                fontSize="4xl"
            >
                <Link target="_blank" href={githubURL}><DiGithubFull /></Link>
                {liveURL && <Link target="_blank" href={liveURL}>Live</Link>}
            </Flex>
        </Box>
    )
}


export default function Works() {

    const container = useRef(null);
    const child = useRef(null);

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
            >

                <ReferenceItem
                    img="/references/cardGame.PNG"
                    githubURL="https://github.com/bufer99/set-game"
                    liveURL="https://bufer99.github.io/set-game/"
                >
                    One of my first work in native Javascript. A very <b>basic card game</b> for University subject.
                </ReferenceItem>

                <ReferenceItem
                    img="/references/tictactoe.PNG"
                    githubURL="https://github.com/bufer99/tictactoe"
                    liveURL="https://bufer99.github.io/tictactoe/"
                >
                    One of my first work in native Javascript. <b>Tic Tac Toe</b> game for Uni.
                </ReferenceItem>

                <ReferenceItem
                    img="/references/form.PNG"
                    githubURL="https://github.com/bufer99/formComponent-react"
                    liveURL="https://bufer99.github.io/formComponent-react/"
                >
                    <b>Form Component</b> My First React project in University
                </ReferenceItem>

                <ReferenceItem
                    img="/references/rating.PNG"
                    githubURL="https://github.com/bufer99/interactive-rating-component-react"
                    liveURL="https://bufer99.github.io/interactive-rating-component-react/"
                >

                </ReferenceItem>
                <ReferenceItem
                    img="/references/portfolio1.PNG"
                    githubURL="https://github.com/bufer99/portfolio-react"
                    liveURL="https://bufer99.com/"
                >
                    My <b>first</b> live website with unique domain
                </ReferenceItem>
                <ReferenceItem
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