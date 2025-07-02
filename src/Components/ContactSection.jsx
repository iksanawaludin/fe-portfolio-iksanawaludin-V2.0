import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-slate-50 py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Form Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Tinggalkan Pesan</h2>
          <form className="space-y-5">
            <div>
              <label className="text-sm text-gray-700">Nama</label>
              <input
                type="text"
                className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:outline-none"
                placeholder="Nama lengkap"
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">Pesan</label>
              <textarea
                rows="5"
                className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:outline-none"
                placeholder="Tulis pesan anda di sini..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-sky-600 text-white w-full py-3 rounded-xl hover:bg-sky-700 transition"
            >
              Kirim Pesan
            </button>
          </form>
        </div>

        {/* Info Section */}
        <div className="flex flex-col justify-center space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800">Info Kontak</h3>
          <p className="text-gray-600 leading-relaxed">
            Terbuka untuk kolaborasi, freelance, dan peluang kerja.
            Jangan ragu untuk menghubungi saya melalui form atau media sosial di bawah ini.
          </p>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-sky-600" />
              <span>iksanawaludinn@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-sky-600" />
              <span>+62 838 6920 7947</span>
            </li>
            <li className="flex items-center gap-3">
              <FaLinkedin className="text-sky-600" />
              <a
                href="https://www.linkedin.com/in/iksan-awaludin"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/iksan-awaludin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
