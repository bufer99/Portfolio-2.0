import { Box, Link } from "@chakra-ui/react"


export const ScrollButton = ({ children, position, href }: { children: React.ReactNode, position: number, href: string }) => {
    return (
        <Link href={href}>
            <Box
                className="scroll-button"
                top={`calc(25% + ${position * 60}px)`}
            >
                <Box className="scroll-button-triangle" />
                <Box className="scroll-button-body" bg="blue">
                    <Box
                        m="auto">
                        {children}
                    </Box>
                </Box >
            </Box>
        </Link>
    )
}