import { Box, Text } from "@chakra-ui/react";

export default function About() {
    return (
        <Box
            fontSize={{ base: "lg", sm: "xl", md: "3xl", lg: "4xl" }}
        >
            <Text as="h2">
                About me
            </Text>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure reiciendis fugit provident molestiae quaerat dolorem tempore corrupti odio neque corporis ratione aut quas magnam possimus iste nobis voluptatum, quo at.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure reiciendis fugit provident molestiae quaerat dolorem tempore corrupti odio neque corporis ratione aut quas magnam possimus iste nobis voluptatum, quo at.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure reiciendis fugit provident molestiae quaerat dolorem tempore corrupti odio neque corporis ratione aut quas magnam possimus iste nobis voluptatum, quo at.</p>
        </Box>
    )
}