import React, { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, lightTheme, darkTheme } from 'styles/GlobalStyles'
import useMetaDataQuery from "hooks/useMetaDataQuery"
import Header from 'components/Header'
import ModeProvider, { ModeContext } from 'context/ModeProvider'

const Layout = ({ children }) => (
    <ModeProvider>
        <InnerLayout>{children}</InnerLayout>
    </ModeProvider>
);

const InnerLayout = ({ children }) => {   
  const [darkMode] = useContext(ModeContext);
  const data = useMetaDataQuery();

  console.log(data)

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles/>
        <Header siteTitle={data.title}/>
        {children}
    </ThemeProvider>
  )
}


export default Layout;