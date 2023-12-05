import React from 'react'
import "./Nav.scss"
import logo from "../../assets/Logo.svg"
import { Container } from '../../utils/Utils'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>        
        <Container>
            <div className='nav__items'>
                <div className='logo'><img src={logo} alt="" /></div>
                <div className="nav__links">
                    <Link className='nav__link'>Stories</Link>
                    <Link className='nav__link'>Listen</Link>
                    <Link className='nav__link'>Team</Link>
                    <Link className='nav__link'>Tools</Link>
                </div>
            </div>
        </Container>
    </nav>
  )
}

export default Nav