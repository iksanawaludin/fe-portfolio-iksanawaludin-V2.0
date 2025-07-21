import React from "react";
import {
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const AboutSection =
  () => {
    return (
      <section
        id="about"
        className="relative bg-slate-50 py-24 px-6 md:px-16 overflow-hidden"
      >
        {/* Decorative background lines */}
        <div className="absolute inset-0 -z-10 grid grid-cols-12 opacity-10">
          <div className="col-span-3 border-r border-sky-100"></div>
          <div className="col-span-3 border-r border-indigo-100"></div>
          <div className="col-span-3 border-r border-sky-100"></div>
          <div className="col-span-3"></div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start relative z-10">
          {/* Section Title */}
          <div className="md:col-span-1">
            <h2 className="text-sm font-semibold text-sky-600 tracking-widest uppercase mb-2">
              Tentang
              Saya
            </h2>
            <h3 className="text-3xl font-bold text-gray-900 leading-tight">
              Iksan
              Awaludin
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Front-End
              Developer
              &
              UI/UX
              Designer
            </p>
          </div>

          {/* Description */}
          <div className="md:col-span-2 text-gray-600 leading-relaxed">
            <p className="mb-4">
              Saya
              adalah
              mahasiswa
              aktif
              di{" "}
              <strong>
                STMIK
                Widya
                Utama
              </strong>
              ,
              jurusan
              Teknik
              Informatika.
              Memiliki
              ketertarikan
              dan
              keahlian
              dalam
              bidang{" "}
              <strong>
                web
                development
              </strong>
              ,
              <strong>
                UI/UX
                design
              </strong>
              ,
              serta
              dunia{" "}
              <strong>
                public
                speaking
              </strong>
              .
            </p>
            <p>
              Saya
              percaya
              bahwa
              eksplorasi
              ide,
              kerja
              jujur,
              dan
              ketekunan
              akan
              membawa
              hasil
              luar
              biasa.
              Saya
              juga
              percaya
              pentingnya
              memperluas
              jaringan
              untuk
              melihat
              sudut
              pandang
              baru.
            </p>
          </div>

          {/* Social Media */}
          <div className="md:col-span-3 mt-10 flex justify-center gap-6 text-2xl text-gray-500">
            <a
              href="https://www.youtube.com/@iksanawaludin2971"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-500 transition"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.instagram.com/isnn_udinn/profilecard/?igsh=dDZiMWF0c2l5OWFy"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/iksan-awaludin"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-700 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/iksanawaludin"
              target="_blank"
              rel="noreferrer"
              className="hover:text-black transition"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </section>
    );
  };

export default AboutSection;
