import React from 'react'
import './Navbar.css'
import logostarbelly from './logostarbelly.jpeg';

function Navbar () {
  return (
   <div className='ju'>
    <img src={logostarbelly} className="loog" alt="" />
    <div className='navbar'>
     
     <div className='logo'>
      
        <h3>Starbelly</h3>
     </div>
       <ul className='links'>
          <li>Home</li>
          <li>About</li>
          <li>Products</li>
          <li>Contact</li>
       </ul>
       
     
    </div>
    </div>
  )
}

export default Navbar
