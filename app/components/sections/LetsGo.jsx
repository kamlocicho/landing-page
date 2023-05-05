import { Box, Flex, Heading, useBoolean } from '@chakra-ui/react'
import React from 'react'

const GoItem = ({ content, ...props }) => {
    const [hover, setHover] = useBoolean(false)

    return (
        <Box minH='400px' flexGrow={1} position='relative' onMouseEnter={setHover.on} onMouseLeave={setHover.off} {...props}>
            <Box position='absolute' bottom={10} left={10} color='white' fontSize='2em' h='40px' overflow='hidden'>
                <Heading fontWeight='300' transition='.4s ease-in-out' transform={hover ? "translateY(-40px)" : "translateY(0)"}>{content}</Heading>
                <Heading fontWeight='300' transition='.4s ease-in-out' transform={hover ? "translateY(-40px)" : "translateY(0)"}>View</Heading>
            </Box>
        </Box>
    )
}

const LetsGo = () => {
    return (
        <Flex w='100%' borderBottom={'1px solid #878787'} direction={{ base: 'column', sm: 'row' }}>
            <GoItem content={'Cinema'} borderRight={{ base: 'none', sm: '1px solid #878787' }} borderBottom={{ base: '1px solid #878787', sm: 'none' }} />
            <GoItem content={'More work here'} />
        </Flex>
    )
}

export default LetsGo