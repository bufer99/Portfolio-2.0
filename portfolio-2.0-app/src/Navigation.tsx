import { Box, Link } from "@chakra-ui/react"
import { motion } from "framer-motion";
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
            py={3}
            px={4}
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

export const Navigation = () => {

    const context = useContext(SectionContext);


    const { ref, inView, entry } = useInView({
        threshold: 0.8,
        onChange(inView, entry) {
            context.changeTheme(inView)
        },
    });

    return (
        <Box
            as="nav"
            w="100%"
            h="69px"
            ref={ref}
        >
            <Box
                display="flex"
                justifyContent="center"
            >
                <Box

                    display={{ base: 'none', md: "flex" }}
                    flexDirection="row"
                    justifyContent="center"
                    position="relative"
                    w="max-content"
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
                        position="absolute"
                        bg="white"
                        w="150px"
                        h="100%"
                        transition="left 300ms ease"
                        left={`${context.sectionInViewPort === "about" ? "0" : context.sectionInViewPort === "skills" ? "150px" : "300px"}`}
                    />
                </Box>
            </Box>
        </Box>
    )
}