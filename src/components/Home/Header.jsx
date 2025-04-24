import React from 'react'
import logo from '../../assets/logo.webp'

function Header() {
  return (
    <header className="bg-blue-900 py-3">
      <div className="container flex justify-center gap-10 mx-auto px-4">
        <img src={logo} className='w-20 h-20' alt="" />
        <h1 className="text-center text-white text-3xl py-4 md:text-4xl font-bold tracking-widest">
          DORLABS TECH
        </h1>
      </div>
    </header>
  )
}

export default Header