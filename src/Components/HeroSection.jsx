import React from "react";
import profileImg from "../assets/profile.jpeg";

const HeroSection =
  () => {
    return (
      <section
        id="home"
        className="relative bg-gradient-to-b from-white to-blue-50 py-20 overflow-hidden"
      >
        {/* Lingkaran Kanan Atas */}
        <div className="absolute top-10 right-10 w-52 h-52 bg-sky-100 rounded-full opacity-50 blur-3xl z-0" />

        {/* Lingkaran Kiri Bawah */}
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-indigo-100 rounded-full opacity-40 blur-3xl z-0" />

        {/* Dot Pattern Kanan Tengah */}
        <div className="absolute hidden md:block right-8 top-1/2 -translate-y-1/2 z-0 opacity-30">
          <svg
            width="120"
            height="120"
            fill="none"
          >
            <defs>
              <pattern
                id="dots"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="2"
                  cy="2"
                  r="2"
                  fill="#60a5fa"
                />
              </pattern>
            </defs>
            <rect
              width="120"
              height="120"
              fill="url(#dots)"
            />
          </svg>
        </div>

        {/* Dot Pattern Kiri Atas */}
        <div className="absolute hidden md:block left-8 top-12 z-0 opacity-20">
          <svg
            width="100"
            height="100"
            fill="none"
          >
            <defs>
              <pattern
                id="dots2"
                x="0"
                y="0"
                width="18"
                height="18"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="2"
                  cy="2"
                  r="2"
                  fill="#818cf8"
                />
              </pattern>
            </defs>
            <rect
              width="100"
              height="100"
              fill="url(#dots2)"
            />
          </svg>
        </div>

        {/* Konten Hero */}
        <div className="max-w-2xl mx-auto px-6 text-center flex flex-col items-center relative z-10">
          <div className="mb-6 relative group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-200 to-blue-100 blur-2xl opacity-30 group-hover:opacity-40 transition" />
            <img
              src={
                profileImg
              }
              alt="Iksan Awaludin"
              className="relative w-40 h-40 object-cover rounded-full border-4 border-white shadow-md z-10"
            />
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Halo,
            Saya{" "}
            <span className="text-sky-600">
              Iksan
              Awaludin
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Front-End
            Developer
            &
            UI/UX
            Designer.
            <br />
            Saya
            percaya
            kejujuran
            dan
            ketekunan
            adalah
            kunci
            menuju
            keberhasilan
            tanpa
            batas.
          </p>
          <a
            href="https://wa.me/6283869207947"
            className="px-6 py-3 bg-sky-600 text-white rounded-lg font-medium shadow hover:bg-sky-700 transition"
          >
            Hubungi
            Saya
          </a>
        </div>
      </section>
    );
  };

export default HeroSection;
