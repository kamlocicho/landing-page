import { Box, Fade, Flex, Grid, GridItem, Heading, ScaleFade, Stack, Text, VStack, useBoolean } from '@chakra-ui/react'
import React from 'react'

const MenuLink = ({ children, ...props }) => {
    return (
        <Heading
            fontWeight={300}
            fontSize={{ base: '30px', lg: '58px' }}
            cursor='pointer'
            transition='.3s ease-in-out'
            _hover={{
                letterSpacing: 2
            }}
            {...props}
        >{children}</Heading>
    )
}

const RightSideItem = ({ children, isBottom }) => {
    return (
        <GridItem
            borderLeft='1px solid #878787'
            borderBottom={!isBottom && '1px solid #878787'}
            position='relative'
            cursor='pointer'
            transition='.2s ease'
            _hover={{
                bgColor: "main.bg",
                color: 'white'
            }}
        >
            <Box position='absolute' left={{ base: 5, lg: 10 }} bottom={{ base: 5, lg: 10 }}>
                <Text fontSize={{ base: '20px', lg: '30px' }} fontWeight='thin'>
                    {children}
                </Text>
            </Box>
        </GridItem>
    )
}

const Menu = () => {
    return (
        <Box zIndex="10" position='absolute' top={0} left={0} w='100%' backgroundColor='#fff' h={{ base: '200vh', lg: '100vh' }} transition='.2s'>
            <Flex overflowY={{ base: 'scroll', lg: 'visible' }} h={{ base: '60%', lg: '100%' }} direction={{ base: 'column', lg: 'row' }} paddingBottom={{ base: '20px', lg: '0' }}>
                <Stack
                    overflowX={{ base: 'scroll', lg: 'visible' }}
                    direction={{ base: 'row', lg: 'column' }}
                    w={{ base: '100vw', lg: '40%' }}
                    h={{ base: '100px', lg: '100%' }}
                    justifyContent={{ base: 'start', lg: 'space-around' }} alignItems='start' p='60px' gap='20px'
                >
                    <MenuLink background='linear-gradient(to right, #fc5c7d, #6a82fb)'
                        style={{
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}
                    >Home</MenuLink>
                    <MenuLink>Works</MenuLink>
                    <MenuLink>About</MenuLink>
                    <MenuLink>Services</MenuLink>
                    <MenuLink>Blog</MenuLink>
                    <MenuLink>Careers</MenuLink>
                    <MenuLink>Contact</MenuLink>
                </Stack>

                <Grid w={{ base: '100%', lg: '60%' }} h='100%' templateColumns={{ base: 'repeat(1, 1fr)', lg: "repeat(2, 1fr)" }} templateRows={{ base: 'repeat(4, 1fr)', lg: 'repeat(2, 1fr)' }}>
                    <RightSideItem>Chat to <br /> us now</RightSideItem>
                    <RightSideItem>Speak on <br /> the phone</RightSideItem>
                    <RightSideItem isBottom>Book a <br /> consultation</RightSideItem>
                    <RightSideItem isBottom>Send us <br /> an email</RightSideItem>
                </Grid>
            </Flex>
        </Box>
    )
}

export default Menu