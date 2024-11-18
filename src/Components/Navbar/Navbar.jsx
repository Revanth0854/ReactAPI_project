import React, { useState } from 'react'
import './Navbar.css'
import navlogo from './NavbarAssets/navLogo.png'
import search from './NavbarAssets/Search.png'
import {Link} from 'react-router-dom'

const Navbar = () => {

  const [burger, setburger] = useState(false);
  
  function handleClick() {
    setburger(!burger)
  }


  return (
    <div className='navbar'>
      <div className="img">
        <img src={navlogo} alt="" />
      </div>
    <div className={`${burger ? "navLinks" : "navLinks1"}`}>

        <Link to='/'>Home</Link>
        <Link to='/mens'>Men</Link>
        <Link to='/womens'>Women</Link>
        <Link to='/kids'>Kids</Link>
        
      </div>
      
      <div className="burger" onClick={handleClick} value={burger}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>


    </div>
  )
}

export default Navbar