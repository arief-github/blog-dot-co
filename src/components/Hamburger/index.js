import React from 'react'
import HamburgerIcon from './HamburgerIcon.styles'

const Hamburger = ({ menuOpen, setMenuOpen }) => {
    
    const handlerOpenHamburger = () => {
        setMenuOpen(prev => !prev)
    }
  
    return (
    <HamburgerIcon menuOpen={menuOpen} onClick={handlerOpenHamburger} >
        <div/>
    </HamburgerIcon>
  )
}

export default Hamburger