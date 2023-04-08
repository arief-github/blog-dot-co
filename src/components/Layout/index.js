import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, lightTheme, darkTheme } from 'styles/GlobalStyles'

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
        <GlobalStyles/>
        <p>{children}</p>
    </ThemeProvider>
  )
}

export default Layout;