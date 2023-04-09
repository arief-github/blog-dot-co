import React, { useState } from 'react'
import { Link } from 'gatsby'
import useConfigQuery from '../../hooks/useConfigQuery'
import { Wrapper, Logo } from './Header.styles'
import Menu from 'components/Menu'
import Hamburger from 'components/Hamburger'
import MobileMenu from 'components/MobileMenu'

const Header = ({ siteTitle = "" }) => {
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
        <button>Theme Button</button>
    </Wrapper>
  )
}

export default Header;