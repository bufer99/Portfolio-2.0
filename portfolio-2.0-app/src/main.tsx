import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import SectionProvider from './SectionContext'


const theme = extendTheme({

});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <SectionProvider>
        <App />
      </SectionProvider>
    </ChakraProvider>
  </React.StrictMode>,
)


