import React from 'react'
import {Link} from 'react-router-dom'
const Index = () => {
  return (
    <nav>
        <ul>
        <li><a href="./Home">Home</a></li>
        <li><Link to ="./About">About</Link></li>
        <li><Link to="./Contact">Contact</Link></li>
       
        </ul>
    </nav>
  )
}

export default Index