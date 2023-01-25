import { Box, Link } from "@chakra-ui/react"
import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import { useInView } from "react-intersection-observer";
import { SectionContext } from "./SectionContext";

const NavItem = ({ children, id }: { children: React.ReactNode, id: string }) => {

    const { sectionInViewPort } = useContext(SectionContext);

    return (
        <Box
            className={id === sectionInViewPort ? 'nav-item active' : 'nav-item'}
            textTransform="uppercase"
            fontSize="30px"
            //py={3}
            //px={4}
            cursor="pointer"
            fontWeight="bold"
            position="relative"
            textAlign="center"
            //bg={id === sectionInViewPort ? `white` : `inherit`}
            width="150px"
            zIndex="200"
            color={id !== sectionInViewPort ? `white` : `inherit`}


        >
            {children}

        </Box>
    )
}

const MobileNavItem = ({ children }: { children: React.ReactNode }) => {
    return (
        <Box
            as={motion.div}
            color="white"
            fontSize="30px"
            textTransform="uppercase"

            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -150, opacity: 0 }}
        >
            {children}
        </Box>
    )
}

export const Navigation = () => {

    const context = useContext(SectionContext);


    const { ref, inView, entry } = useInView({
        threshold: 0.8,
        onChange(inView, entry) {
            context.setNavVisible(inView)
        },
    });

    return (
        <Box
            as="nav"
            w="100%"
            h="69px"
            ref={ref}
            boxShadow="0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);"
        >
            <Box
                display="flex"
                justifyContent="center"
                h="100%"
            >
                <Box
                    display={{ base: 'flex', sm: "none" }}

                    gap={5}

                    alignItems="center"
                >
                    <AnimatePresence exitBeforeEnter={true}>
                        {context.sectionInViewPort === "about" && <MobileNavItem key="about">About Me</MobileNavItem>}
                        {context.sectionInViewPort === "skills" && <MobileNavItem key="stack">Stack</MobileNavItem>}
                        {context.sectionInViewPort === "works" && <MobileNavItem key="works">Works</MobileNavItem>}
                    </AnimatePresence>
                </Box>
                <Box

                    display={{ base: 'none', sm: "flex" }}
                    flexDirection="row"
                    justifyContent="center"
                    position="relative"
                    w="max-content"
                    h="100%"
                >
                    <NavItem id="about">
                        <Link href="#about">
                            About
                        </Link>
                    </NavItem>
                    <NavItem id="skills">
                        <Link href="#skills">
                            Skills
                        </Link>
                    </NavItem>
                    <NavItem id="works">
                        <Link href="#works">
                            Works
                        </Link>
                    </NavItem>

                    <Box
                        opacity={context.sectionInViewPort !== "" ? "1" : "0"}
                        position="absolute"
                        bg="white"
                        w="150px"
                        h="100%"
                        transition="left 300ms ease, opacity 200ms"
                        left={`${context.sectionInViewPort === "works" ? "300px" : context.sectionInViewPort === "skills" ? "150px" : "0"}`}
                    />
                </Box>
            </Box >
        </Box >
    )
}