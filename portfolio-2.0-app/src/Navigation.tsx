import { Box, Link } from "@chakra-ui/react"
import { useContext } from "react";
import { useInView } from "react-intersection-observer";
import { SectionContext } from "./SectionContext";

const NavItem = ({ children }: { children: React.ReactNode }) => {
    return (
        <Box
            textTransform="uppercase"
            fontSize="30px"
            py={3}
            px={4}
            cursor="pointer"
            fontWeight="bold"
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
            position="sticky"
            top="0"
        >
            <Box
                display={{ base: 'none', md: "flex" }}
                flexDirection="row"
                justifyContent="center"
            >
                <NavItem>
                    <Link href="#about">
                        About
                    </Link>
                </NavItem>
                <NavItem>
                    <Link href="#skills">
                        Skills
                    </Link>
                </NavItem>
                <NavItem>
                    <Link href="#works">
                        Works
                    </Link>
                </NavItem>
            </Box>
        </Box>
    )
}