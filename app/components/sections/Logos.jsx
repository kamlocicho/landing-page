import { Image } from '@chakra-ui/next-js'
import { Center, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'

const Logo = ({ imgSrc }) => {
    return (
        <GridItem>
            <Image src={imgSrc} width='260' height='140' />
        </GridItem>
    )
}

const Logos = () => {
    return (
        <Center w='100%' borderTop='1px solid #878787' borderBottom='1px solid #878787'>
            <Grid w='100%' templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}>
                <Logo imgSrc='/logo.png' />
                <Logo imgSrc='/logo.png' />
                <Logo imgSrc='/logo.png' />
                <Logo imgSrc='/logo.png' />
                <Logo imgSrc='/logo.png' />
                <Logo imgSrc='/logo.png' />
                <Logo imgSrc='/logo.png' />
                <Logo imgSrc='/logo.png' />
            </Grid>
        </Center>
    )
}

export default Logos