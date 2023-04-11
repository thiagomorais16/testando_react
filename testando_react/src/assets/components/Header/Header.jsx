import React from 'react'
import './index.css'

const Header = () => {
  return (
    <header>
        <nav className='flex'>
            <div>
               <h2>Gaming</h2>
               <img className='icon' src="logo.png" alt="logo" /> 
            </div>

        </nav>
    </header>
  )
}

export default Header