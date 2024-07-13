'use client'

import { ChakraProvider } from '@chakra-ui/react'

import theme from '@/lib/theme'

const Providers = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}

export default Providers
