import { CSSReset, ThemeProvider } from '@chakra-ui/core'
import React from 'react'
import { AuthProvider } from 'services/auth/context'
import Routes from './routes'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <CSSReset />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
