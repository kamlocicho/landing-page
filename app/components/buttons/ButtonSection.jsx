import { Box, Flex, Heading, Slide, useBoolean } from '@chakra-ui/react'
import React, { useState } from 'react'


const ScreenButton = ({ item }) => {
    const [isHovering, setIsHovering] = useBoolean(false)

    return (
        <Box
            flexGrow={1}
            position='relative'
            borderLeft='1px solid #878787'
            h='100%'
            onMouseEnter={setIsHovering.on}
            onMouseLeave={setIsHovering.off}
            backgroundColor="rgba(15, 15, 15, 1)"
            transition=".4s ease-in-out"
            cursor="pointer"
            _hover={{ backgroundColor: "rgba(15, 15, 15, 0)" }}
        >
            <Box position='absolute' bottom={20} left={10} h='40px' overflow='hidden' >
                <Heading color='white' fontWeight={400} transition='.4s ease-in-out' transform={isHovering ? "translateY(-40px)" : "translateY(0)"}>{item}</Heading>
                <Heading color='white' fontWeight={400} transition='.4s ease-in-out' transform={isHovering ? "translateY(-40px)" : "translateY(0)"}>View</Heading>
            </Box>
        </Box >
    )
}


const ButtonSection = () => {
    return (
        <Flex w='100%' h='100%' backgroundImage='/bg-hover-image.webp'>
            <ScreenButton item='Brand' />
            <ScreenButton item='Website' />
            <ScreenButton item='Content' />
        </Flex>
    )
}

export default ButtonSection