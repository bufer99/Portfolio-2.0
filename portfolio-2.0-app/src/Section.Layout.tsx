import { Box } from "@chakra-ui/react"
import React, { LegacyRef, useContext } from "react"
import { useInView } from "react-intersection-observer";
import { ScrollButton } from "./ScrollButton";
import { SectionContext } from "./SectionContext";


export const SectionLayout = ({ children, id, position }:
    { children: React.ReactNode, id: string, position: number }) => {

    const { ref, inView, entry } = useInView({
        threshold: 0.5,
    });

    const { navVisible } = useContext(SectionContext);

    return (
        <React.Fragment>
            <Box
                height="100vh"
                ref={ref}
                id={id}
                fontSize="xxx-large"
            >
                {children}
            </Box>
            <ScrollButton
                position={position}
                href={`#${id}`}
                active={inView}
            >
                {id}
            </ScrollButton>
        </React.Fragment>
    )
}