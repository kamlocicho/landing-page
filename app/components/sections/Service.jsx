import { Center, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import MainButton from '../buttons/MainButton'

const Service = () => {
    return (
        <Flex w='100%' h={{ base: '120vh', lg: '100vh' }} direction={{ base: 'column', lg: 'row' }}>
            <Flex align='center' justify='center' h='100%' w='50%'>
                <Text color='white'>ANIMATED CIRCLE</Text>
            </Flex>

            <Center w={{ base: '100%', lg: '50%' }} px='40px'>
                <VStack alignItems={{ base: 'center', lg: 'start' }} justifyContent='center' gap='40px'>
                    <Heading
                        backgroundImage='linear-gradient(71deg,#cfebff,#fcbabc 36%,#dd5183 55%,#ba75e0)'
                        textAlign={{ base: 'center', lg: 'start' }}
                        fontSize={{ base: '2.1em', lg: '58px' }}
                        fontWeight={300}
                        style={{
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}
                    >
                        We drive growth for businesses by delivering creative advantage.
                    </Heading>

                    <MainButton>Our Services</MainButton>
                </VStack>
            </Center>
        </Flex>
    )
}

export default Service