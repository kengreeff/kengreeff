import { ChakraProvider } from '@chakra-ui/react'
import { Analytics } from '@vercel/analytics/react'

import type { AppProps } from 'next/app'

import theme from '../utils/theme'

import '@/styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <Analytics />
    </ChakraProvider>
  )
}

export default App
