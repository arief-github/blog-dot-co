import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, lightTheme, darkTheme } from 'styles/GlobalStyles'
import useMetaDataQuery from "hooks/useMetaDataQuery"
import Header from 'components/Header'

const Layout = ({ children }) => {
  const data = useMetaDataQuery();

  console.log(data)

  return (
    <ThemeProvider theme={darkTheme}>
        <GlobalStyles/>
        <Header siteTitle={data.title}/>
        {children}
    </ThemeProvider>
  )
}

export default Layout;