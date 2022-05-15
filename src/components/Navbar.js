import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)

  return (
   <>
    <nav className='navbar'>
        <div className='nav-content'>
            <Link to="/" className="navbar-logo">Logo</Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
            </div>
        </div>
    </nav>
   </>
  )
}

export default Navbar