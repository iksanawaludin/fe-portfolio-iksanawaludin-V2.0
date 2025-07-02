import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-gray-300 pt-14 pb-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand & Intro */}
        <div className="col-span-2">
          <h2 className="text-2xl font-bold text-white mb-3">Iksan Awaludin</h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Front-End Developer & UI/UX Designer. Menggabungkan teknologi dan estetika untuk pengalaman pengguna yang bermakna.
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Navigasi</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-sky-400 transition">Beranda</a></li>
            <li><a href="#about" className="hover:text-sky-400 transition">Tentang</a></li>
            <li><a href="#projects" className="hover:text-sky-400 transition">Portofolio</a></li>
            <li><a href="#blog" className="hover:text-sky-400 transition">Blog</a></li>
            <li><a href="#contact" className="hover:text-sky-400 transition">Kontak</a></li>
          </ul>
        </div>

        {/* Kontak & Sosial */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Hubungi Saya</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>Email: iksanawaludinn@gmail.com</li>
            <li>Telp: +62 838 6920 7947</li>
          </ul>
          <div className="flex gap-4 mt-4 text-xl">
            <a href="https://www.instagram.com/isnn_udinn/profilecard/?igsh=dDZiMWF0c2l5OWFy" target="_blank" rel="noreferrer" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/iksan-awaludin" target="_blank" rel="noreferrer" className="hover:text-sky-500">
              <FaLinkedin />
            </a>
            <a href="https://github.com/iksanudin28" target="_blank" rel="noreferrer" className="hover:text-white">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700 mt-12 pt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Iksan Awaludin — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
