"use client"

import { Box, Center, Flex, HStack, Heading, Spacer, Text, VStack, chakra, useBoolean } from '@chakra-ui/react'
import React, { useState } from 'react'
import Logo from './components/navbar/Logo'
import Hamburger from './components/navbar/Hamburger'
import MainButton from './components/buttons/MainButton'
import ButtonSection from './components/buttons/ButtonSection'
import Menu from './components/menu/Menu'
import Service from './components/sections/Service'
import Logos from './components/sections/Logos'
import RecentWorks from './components/sections/RecentWorks'
import LetsGo from './components/sections/LetsGo'

const Home = () => {
  const [menu, setMenu] = useState(false)

  return (
    <>
      <VStack overflow={menu ? 'hidden' : 'auto'} position='relative' w='100%' h={menu ? '100vh' : '100%'}>


        {/* MAIN SECTION */}
        <Flex w='100%' h={{ base: '120vh', lg: '100vh' }} direction={{ base: 'column', lg: 'row' }} >
          <Logo />
          <Hamburger isOpen={menu} onClick={() => setMenu(!menu)} />
          {menu && <Menu isOpen={menu} />}
          <Center flexGrow={1} h='100%' w='100%' flexDirection='column' px={{ base: '20px', lg: '40px' }} borderBottom='1px solid #878787'>
            <VStack w='100%' align='start' ml={{ base: '20px', lg: '40px' }} gap='80px' >
              <Flex align='start' justify='center' direction='column'>

                <Heading fontWeight='light' fontSize={{ base: '58px', lg: '80px' }} textAlign='start' color='#fff' >We help brands</Heading>
                <Heading fontWeight='light' fontSize={{ base: '58px', lg: '80px' }} textAlign='start' color='#fff' >that do good,</Heading>
                <Heading fontWeight='light' fontSize={{ base: '58px', lg: '80px' }} background='linear-gradient(to right, #fc5c7d, #6a82fb);' textAlign='start' color='#fff'
                  style={{
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }} >look good.</Heading>
              </Flex>

              <MainButton>Play showreel</MainButton>
            </VStack>
          </Center>

          <HStack flexGrow={1} h={{ base: '100%', sm: '40%', lg: '100%' }} w='100%'>
            <ButtonSection />
          </HStack>
        </Flex>
        {/* END MAIN SECTION */}

        <Service />
        <Logos />

        <RecentWorks />
        <LetsGo />

      </VStack>
    </>
  )
}

export default Home