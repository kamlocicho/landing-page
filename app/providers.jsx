'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const colors = {
    main: {
        bg: '#0F0F0F',
        text: '#fff',
        borders: '#878787'
    },
    secondary: {
        text: '#fafafa',
    }
}

const theme = extendTheme({ colors })

export function Providers({ children }) {
    return (
        <CacheProvider>
            <ChakraProvider theme={theme}>
                {children}
            </ChakraProvider>
        </CacheProvider>
    )
}