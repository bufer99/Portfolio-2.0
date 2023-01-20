import { Box, Text } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {

    const ref = useRef(null)
    const isInView = useInView(ref, { amount: .5, once: true })

    return (
        <Box
            fontSize={{ base: "lg", sm: "xl", md: "3xl", lg: "4xl" }}
        >
            <Text as="h2">
                About me
            </Text>
            <Box
                ref={ref}
                transform={isInView ? "none" : "translateX(-200px)"}
                opacity={isInView ? 1 : 0}
                transition={"all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}

            >
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure reiciendis fugit provident molestiae quaerat dolorem tempore corrupti odio neque corporis ratione aut quas magnam possimus iste nobis voluptatum, quo at.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure reiciendis fugit provident molestiae quaerat dolorem tempore corrupti odio neque corporis ratione aut quas magnam possimus iste nobis voluptatum, quo at.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure reiciendis fugit provident molestiae quaerat dolorem tempore corrupti odio neque corporis ratione aut quas magnam possimus iste nobis voluptatum, quo at.</p>
            </Box>
        </Box>
    )
}