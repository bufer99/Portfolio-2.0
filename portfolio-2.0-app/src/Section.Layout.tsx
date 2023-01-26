import { Box } from "@chakra-ui/react"
import React, { useContext } from "react"
import { useInView } from "react-intersection-observer";
import { ScrollButton } from "./ScrollButton";
import { SectionContext } from "./SectionContext";


export const SectionLayout = ({ children, href, position }:
    { children: React.ReactNode, href: string, position: number }) => {

    const { ref, inView, entry } = useInView({
        threshold: .5,
        onChange(inView, entry) {
            if (inView) changeSectionInViewPort(position);
            console.log("change:", position)
        },
    });

    const { changeSectionInViewPort } = useContext(SectionContext);

    return (
        <Box
            className="section-wrapper"
        >
            <Box
                className="section-layout"
                //minH="100vh"
                ref={ref}
                id={href}
                fontSize="xxx-large"
            >
                {children}
            </Box>
            <ScrollButton
                position={position}
                href={`#${href}`}
                active={inView}
            >
                {href}
            </ScrollButton>
        </Box>
    )
}