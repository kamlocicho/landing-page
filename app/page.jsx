"use client"

import { Center, Flex, HStack, Heading, VStack, chakra, useBoolean } from '@chakra-ui/react'
import React, { useState } from 'react'
import Logo from './components/navbar/Logo'
import Hamburger from './components/navbar/Hamburger'
import MainButton from './components/buttons/MainButton'
import ButtonSection from './components/buttons/ButtonSection'
import Menu from './components/menu/Menu'

const Home = () => {
  const [menu, setMenu] = useState(false)

  return (
    <>
      <Flex w='100%' h='100vh' position='relative'>
        <Logo />
        <Hamburger isOpen={menu} onClick={() => setMenu(!menu)} />
        {menu && <Menu />}
        <Center flexGrow={1} h='100%' w='100%' flexDirection='column' px='40px'>
          <VStack w='100%' align='start' ml='40px' gap='80px'>
            <Flex align='start' justify='center' direction='column'>

              <Heading fontWeight='light' fontSize='80px' textAlign='start' color='#fff' >We help brands</Heading>
              <Heading fontWeight='light' fontSize='80px' textAlign='start' color='#fff' >that do good,</Heading>
              <Heading fontWeight='light' fontSize='80px' background='linear-gradient(to right, #fc5c7d, #6a82fb);' textAlign='start' color='#fff'
                style={{
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }} >look good.</Heading>
            </Flex>

            <MainButton>Play showreel</MainButton>
          </VStack>
        </Center>

        <HStack flexGrow={1} h='100%' w='100%'>
          <ButtonSection />
        </HStack>
      </Flex >
    </>
  )
}

export default Home