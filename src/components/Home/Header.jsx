import React from 'react'
import logo from '../../assets/logo.webp'

function Header() {
  return (
    <header className="bg-white py-3">
      <div className="container flex justify-center items-center gap-2 lg:gap-5 mx-auto px-4">
        <img src={logo} className='w-14 h-14 md:w-16 md:h-16' alt="" />
        <h1 className="text-center text-blue-900 text-2xl md:text-4xl font-bold tracking-widest">
          DORLABS TECH
        </h1>
      </div>
    </header>
  )
}

export default Header