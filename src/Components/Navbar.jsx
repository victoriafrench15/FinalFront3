import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggleButton from './ThemeToggleButton';



const Navbar = () => {

  return (
    <nav className="nav">
      <img src="/images/DH.png" alt='DH-logo'/>
      <div className="nav_div">
        <ul className='nav-ul'>
          <li className='nav-li'><Link to="/home">Home</Link></li>
          <li className='nav-li'><Link to="/favs">Favorites</Link></li>
          <li className='nav-li'><Link to="/contact">Contact</Link></li>
        </ul>

        <ThemeToggleButton/>
      </div>
    </nav>
  )
}

export default Navbar