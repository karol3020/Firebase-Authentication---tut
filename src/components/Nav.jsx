import React from 'react'
import '../App.css'
// import Logo from '../assets/logo'

const Nav = (user) => {
    return (
        <nav className="container">
            <div className='nav__img'>
            {/* <img src="Logo" alt="" /> */}
            </div>
            <div className="button__container">
            <button className="btn">Login</button>
            <button className="btn register">Register</button>
            <button className="btn"><span>{user.email[0]}</span></button>
            </div>
        </nav>
    )
}

export default Nav