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
            background='rgba(15, 15, 15, .7)'
            position='fixed'
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