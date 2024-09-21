"use client";
import React, { useState } from 'react';
import Image from "next/image";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Handles the opening and closing of our nav
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="justify-between flex flex-wrap items-center mx-10 mt-3">
      <div className="mobile-nav flex items-center gap-5 text-3xl font-extrabold italic">
        <Image src="/images/rcoffee.png" alt="coffee-logo" width={80} height={80}/>
        <a href="/">Cafe</a>
      </div>
      <div className='flex flex-wrap gap-4 font-bold' onClick={() => setIsOpen(!isOpen)}>
        <ul className={isOpen ? "open" : ""}>
          <a className="hover:bg-amber-900 hover:text-white p-3 transition-all rounded-3xl" href="/"><li>HOME</li></a>
          <a className="hover:bg-amber-900 hover:text-white p-3 transition-all rounded-3xl" href="/"><li>ABOUT</li></a>
          <a className="hover:bg-amber-900 hover:text-white p-3 transition-all rounded-3xl" href="/"><li>COFFEE</li></a>
          <a className="hover:bg-amber-900 hover:text-white p-3 transition-all rounded-3xl" href="/"><li>REVIEW</li></a>
          <a className="hover:bg-amber-900 hover:text-white p-3 transition-all rounded-3xl" href="/"><li>BLOG</li></a>
          <a className="hover:bg-amber-900 hover:text-white p-3 transition-all rounded-3xl" href="/"><li>PAGES</li></a>
        </ul>
      </div>
      <div onClick={handleClick} className={`hamburger ${isOpen ? 'open' : ''}`}>
        <span className={`hamburger-line line1 ${isOpen ? 'rotate-down' : ''}`}></span>
        <span className={`hamburger-line line2 ${isOpen ? 'hidden' : ''}`}></span>
        <span className={`hamburger-line line3 ${isOpen ? 'rotate-up' : ''}`}></span>
      </div>
    </nav>
  );
}
