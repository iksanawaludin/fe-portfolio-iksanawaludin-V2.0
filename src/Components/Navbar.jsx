import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // ikon dari lucide-react

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-sky-800">Iksan.Dev</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li><a href="#home">Beranda</a></li>
          <li><a href="#about">Tentang</a></li>
          <li><a href="#projects">Portofolio</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Kontak</a></li>
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-4 pb-4 text-gray-700 font-medium">
          <li><a href="#home">Beranda</a></li>
          <li><a href="#about">Tentang</a></li>
          <li><a href="#projects">Portofolio</a></li>
          <li><a href="#blog">Blog</a></li>
           <li><a href="#contact">Kontak</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
