import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home-container'>
        <div className="nav-links">
            <nav>
                <ul>
                    <li> <a href="#home">Home</a> </li>
                    <li> <a href="#projects">Projects</a> </li>
                    <li> <a href="#skills">Skills</a> </li>
                    <li> <a href="#contact">Contact Me</a> </li>
                    
                </ul>
            </nav>
        </div>
        
    </div>
  )
}

export default Home