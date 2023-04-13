import React, { useState, useContext } from 'react'
import { Link } from 'gatsby'
import useConfigQuery from '../../hooks/useConfigQuery'
import { Wrapper, Logo } from './Header.styles'
import Menu from 'components/Menu'
import Hamburger from 'components/Hamburger'
import MobileMenu from 'components/MobileMenu'
import ModeButton from "components/ModeButton"
import { ModeContext } from '../../context/ModeProvider'

const Header = ({ siteTitle = "" }) => {
  const [darkMode, setDarkMode] = useContext(ModeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const siteConfig = useConfigQuery()

  return (
    <Wrapper>
        <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MobileMenu menuOpen={menuOpen} items={siteConfig.menu}/>
        <Menu items={siteConfig.menu}/>
        <Link to="/">
            <Logo src={siteConfig.logo.publicURL} alt={siteTitle}/>
        </Link>
        <ModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
    </Wrapper>
  )
}

export default Header;