import { Box } from "@chakra-ui/react"
import React, { useContext } from "react"
import { useInView } from "react-intersection-observer";
import { ScrollButton } from "./ScrollButton";
import { SectionContext } from "./SectionContext";


export const SectionLayout = ({ children, id, position }:
    { children: React.ReactNode, id: string, position: number }) => {

    const { ref, inView, entry } = useInView({
        threshold: 0.5,
        onChange(inView, entry) {
            if (inView) changeSectionInViewPort(id);
        },
    });

    const { changeSectionInViewPort } = useContext(SectionContext);

    return (
        <Box
            my={12}
            //borderY="5px white solid"
        >
            <Box
                className="section-layout"
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
        </Box>
    )
}