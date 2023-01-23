import { Box, Link } from '@chakra-ui/react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

export default function Footer() {
    return (
        <Box
            as="footer"
            bg="rgba(52,53,65,1)"
            color="white"
            p={6}
            display="flex"
            alignItems="center"
            gap={5}
        >
            <Box fontSize={20}>© 2023</Box>
            <Box>
                <Link href='https://www.linkedin.com/in/lang%C3%B3-andr%C3%A1s-688ab4259/' target="_blank">
                    <AiFillLinkedin />
                </Link>
            </Box>
            <Box>
                <Link href='https://github.com/bufer99' target="_blank">
                    <AiFillGithub />
                </Link>
            </Box>
        </Box>
    )
}