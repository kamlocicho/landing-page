"use client"

import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons"
import { IconButton } from "@chakra-ui/react"

const Hamburger = ({ isOpen, onClick }) => {
    return (
        <IconButton
            size='xl'
            borderRadius="full"
            icon={!isOpen ? <HamburgerIcon boxSize={7} /> : <CloseIcon boxSize={5} />}
            _active='none'
            background='rgba(0, 0, 0, .7)'
            position='absolute'
            top={30}
            right={30}
            color='#fff'
            boxSize={10}
            _hover="none"
            zIndex='11'
            onClick={onClick}
        />
    )
}

export default Hamburger