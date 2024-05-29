import React from 'react';
import './navbar.css';
import logo from '../../assets/LogoYizmoD.png';
// import { link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt='logo' className='logo' />
            <div className='desktopMenu'>
              

            </div>

            <button className='desktopMenuBtn'>
                <img src='' className='desktopMenuImg' alt='contactMeImg' />
                Contact Me
            </button>
        </nav>
    )
}
export default Navbar