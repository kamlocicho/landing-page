import { Box, Flex, Heading, Slide, useBoolean, useMediaQuery } from '@chakra-ui/react'
import React, { useState } from 'react'


const ScreenButton = ({ item }) => {
    const [isHovering, setIsHovering] = useBoolean(false)
    const [isLargeScreen] = useMediaQuery('(min-width: 992px)')

    return (
        <Box
            flexGrow={1}
            position='relative'
            borderLeft={{ base: 'none', sm: '1px solid #878787' }}
            borderBottom={{ base: '1px solid #878787', sm: 'none' }}
            h='100%'
            onMouseEnter={setIsHovering.on}
            onMouseLeave={setIsHovering.off}
            backgroundColor="rgba(15, 15, 15, 1)"
            transition=".4s ease-in-out"
            cursor="pointer"
            _hover={{ backgroundColor: { base: "rgba(15, 15, 15, 1)", lg: "rgba(15, 15, 15, 0)" } }}
        >
            <Box position='absolute' bottom={{ base: 2, sm: 5, lg: 20 }} left={{ base: 2, lg: 10 }} h='40px' overflow='hidden' >
                {
                    isLargeScreen ? (
                        <>
                            <Heading color='white' fontWeight={300} transition='.4s ease-in-out' transform={isHovering ? "translateY(-40px)" : "translateY(0)"}>{item}</Heading>
                            <Heading color='white' fontWeight={300} transition='.4s ease-in-out' transform={isHovering ? "translateY(-40px)" : "translateY(0)"}>View</Heading>
                        </>
                    ) : (
                        <Heading color='white' fontWeight={300}>{item}</Heading>
                    )
                }
            </Box>
        </Box >
    )
}


const ButtonSection = () => {
    return (
        <Flex w='100%' h='100%' backgroundImage='/bg-hover-image.webp' direction={{ base: 'column', sm: 'row' }}>
            <ScreenButton item='Brand' />
            <ScreenButton item='Website' />
            <ScreenButton item='Content' />
        </Flex>
    )
}

export default ButtonSection