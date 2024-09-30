import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './css/Navbar.css'
import logo from '../assets/logo 3.png'

const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <div className="navbar-left">
                    <Link to="/" className='link-home'>
                        <img src={logo} alt="Eventgem" className='navbar-logo' loading='lazy' />
                        <h1 className='heading-navbar'>Eventgem</h1>
                    </Link>
                </div>
                <div className="page-link">
                    <NavLink to='/' className={(e) => (e.isActive ? 'active' : '')}>Home</NavLink>
                    <NavLink to='/signup' className={(e) => (e.isActive ? 'active' : '')}>Signup</NavLink>
                </div>
            </nav>
        </>
    )
}

export default Navbar
