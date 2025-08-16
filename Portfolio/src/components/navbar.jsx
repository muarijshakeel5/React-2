import React, { useState } from 'react';
import logo from '../assets/logo.png'
import { Menu, X } from 'lucide-react'; // optional: lucide icons for hamburger


const navbar = () => {
      const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center justify-between h-15 max-w-5xl mx-auto text-center pt-1">
      <div className="h-20 w-20 hover:scale-120 transition-transform duration-250 z-50">
        <img src={logo} alt="Logo" className="h-full w-auto" />
      </div>
      <ul className="ml-15 font-Ovo font-extralight hidden md:flex items-center border-1 space-x-8 rounded-4xl  px-13 py-2 border-none bg-white">
        <li className=''>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>My Work</li>
      </ul>
      <ul className='hidden md:block'>
      <ul className='border-black border-1 rounded-4xl px-8 py-2 hover:scale-120 transition-transform duration-250'>Contact</ul>
      </ul>
      <div className="md:hidden z-100">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6 mr-1" /> : <Menu className="w-6 h-6 mr-1" />}
          </button>
        </div>
      {isOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 shadow rounded-md absolute top-0 w-1/2 right-0 h-full">
          <ul className="flex flex-col space-y-2 text-sm font-medium pt-14 text-center">
            <li >Home</li>
            <li >About Me</li>
            <li >Services</li>
            <li >My Work</li>
            <button className="border border-black rounded-full px-3 py-2">
            Contact
          </button>
          </ul>
        </div>
      )}
    </div>
  );
}

export default navbar