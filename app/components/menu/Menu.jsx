import { Box, Flex, Grid, GridItem, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const MenuLink = ({ children, ...props }) => {
    return (
        <Heading
            fontWeight={300}
            fontSize='58px'
            cursor='pointer'
            transition='.3s ease-in-out'
            _hover={{
                letterSpacing: 2
            }}
            {...props}
        >{children}</Heading>
    )
}

const LeftSideItem = ({ children }) => {
    return (
        <GridItem borderLeft='1px solid #878787' borderBottom='1px solid #878787' position='relative'>
            <Box position='absolute' left={10} bottom={10}>
                <Text fontSize='30px' fontWeight='thin'>
                    {children}
                </Text>
            </Box>
        </GridItem>
    )
}

const Menu = () => {
    return (
        <Flex zIndex="10" position='fixed' top={0} left={0} backgroundColor='#fff' w='100vw' h='100vh'>
            <VStack w='40%' justifyContent='space-around' alignItems='start' p='60px'>
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
            </VStack>

            <Grid w='60%' templateColumns="repeat(2, 1fr)" templateRows='repeat(2, 1fr)'>
                <LeftSideItem>Chat to <br /> us now</LeftSideItem>
                <LeftSideItem>Speak on <br /> the phone</LeftSideItem>
                <LeftSideItem>Book a <br /> consultation</LeftSideItem>
                <LeftSideItem>Send us <br /> an email</LeftSideItem>
            </Grid>
        </Flex>
    )
}

export default Menu