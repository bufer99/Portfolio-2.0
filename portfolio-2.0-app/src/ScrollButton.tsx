import { Box, Link } from "@chakra-ui/react"
import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import { SectionContext } from "./SectionContext";

export const ScrollButton = ({ children, position, href, active }:
    { children: React.ReactNode, position: number, href: string, active: boolean }) => {

    const context = useContext(SectionContext);

    const container = {
        hidden: { x: 300 },
        show: {
            x: 0,
            transition: {
                type: "tween"
            }
        },
        exit: {
            x: 300,
            transition: {
                ease: "anticipate"
            }
        }
    }

    return (
        <AnimatePresence>

            {!context.navVisible &&
                <Link href={href}>
                    <Box
                        as={motion.div}
                        variants={container}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        className={active ? "scroll-button active" : "scroll-button"}
                        top={`calc(25% + ${position * 60}px)`}
                    >
                        <Box
                            m="auto">
                            {children}
                        </Box>
                    </Box>
                </Link>

            }
        </AnimatePresence >


    )
}