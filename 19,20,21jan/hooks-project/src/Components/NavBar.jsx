import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <ul>
            <li><a href='./dashboard'>Dashboard</a></li>
            <li><Link to='./about'>About Us</Link></li>
            <li><Link to="./Contact">Contact</Link></li>
            <li><Link to="./Images">Images</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar
