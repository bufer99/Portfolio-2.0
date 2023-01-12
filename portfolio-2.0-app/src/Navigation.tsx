import { Box, Link } from "@chakra-ui/react"


const NavItem = ({ children }: { children: React.ReactNode }) => {
    return (
        <Box
            textTransform="uppercase"
            bg="blue"
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
    return (
        <Box
            as="nav"
            w="100%"
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