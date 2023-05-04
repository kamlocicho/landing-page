"use client"

import { Button } from "@chakra-ui/react"

const MainButton = ({ children, ...props }) => {
    return (
        <Button
            bg='transparent'
            _hover='none'
            _active='none'
            border='1px solid #878787'
            color='secondary.text'
            borderRadius='3xl'
            fontSize='18px'
            px='40px'
            py='25px'
            {...props}
        >{children}</Button>
    )
}

export default MainButton