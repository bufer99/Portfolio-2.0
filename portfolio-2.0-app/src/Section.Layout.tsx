import { Box } from "@chakra-ui/react"


export const SectionLayout = ({ children, id }: { children: React.ReactNode, id: string }) => {
    return (
        <Box
            height="100vh"
            
            id={id}
        >
            {children}
        </Box>
    )
}