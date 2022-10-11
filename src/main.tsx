import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'

import { App } from './App'
import { theme } from './styles/themes'
import { StudentsListContextProvider } from './hook/useStudentsList'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <StudentsListContextProvider>
        <App />
      </StudentsListContextProvider>
    </ChakraProvider>
  </React.StrictMode>
)
