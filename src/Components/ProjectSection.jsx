import React from "react";

const projects =
  [
    {
      title:
        'FE Website Marketplace "KambingFresh" (Project Tim)',
      image:
        "/assets/project7.png",
      description:
        "Website Marketplace kambing modern lengkap dengan fitur toko penjual, dashboard analisis, dan edukasi peternakan, serta sistem belanja lengkap seperti pencarian produk, keranjang, dan pembayaran yang mudah.",
      url: "https://kambing-fresh-project-msib.vercel.app/",
    },
    {
      title:
        "Desain UI/UX Sistem Inventaris POS Mobile Apps",
      image:
        "/assets/project1.png",
      description:
        "Desain dan prototipe aplikasi pengelolaan stok berbasis web dan mobile dengan fitur multi-role seperti admin, kasir, owner, dan stock counter.",
      url: "https://www.figma.com/design/2KITlJ0Qpa0ieiuwTaPSiR/Design-FE-Inventori-POS?node-id=367-2028&t=DUHri5OXHHtG6PEv-1",
    },
    {
      title:
        "Website Portofolio Pribadi V1.0",
      image:
        "/assets/project2.png",
      description:
        "Website landing page portofolio pertama dengan menggunakan styling Tailwind CSS.",
      url: "https://iksanudin28.github.io/portofolio_iksan/",
    },
    {
      title:
        "Desain UI/UX Website Marketplace KambingFresh",
      image:
        "/assets/project3.png",
      description:
        "Desain dan prototipe website marketplace seputar peternakan kambing yang dilengkapi fitur jual beli, edukasi, serta pengelolaan toko dan statistik penjualan.",
      url: "https://www.figma.com/design/4k2scN4amReQOHfVSV8OR4/Design--Massive-Project-?node-id=0-1&t=YutQVPuLLkXxKcjw-1",
    },
    {
      title:
        "Aplikasi Kontak Sederhana Berbasis React (Class Component)",
      image:
        "/assets/project4.png",
      description:
        "Aplikasi kontak sederhana dengan class-based component. Data dimuat dari file lokal dan dikelola menggunakan this.state. Pengguna dapat menambah atau menghapus kontak tanpa penyimpanan permanen.",
      url: "https://contacs-app-react.vercel.app/",
    },
    {
      title:
        "Aplikasi Catatan Sederhana Berbasis React (useState)",
      image:
        "/assets/project5.png",
      description:
        "Aplikasi catatan dengan React menggunakan useState sebagai penyimpanan sementara. Menampilkan fitur tambah dan hapus catatan secara real-time dengan tampilan antarmuka yang sederhana dan rapi.",
      url: "https://aplikasi-catatan-sederhana-react.vercel.app/",
    },
    {
      title:
        'Website Bookstore "Jendela Semesta" dengan Animasi AOS',
      image:
        "/assets/project6.png",
      description:
        "Website toko buku statis yang dibuat dengan HTML, CSS, dan AOS. Desain modern dan responsif dengan fitur navigasi dan animasi scroll.",
      url: "https://iksanudin28.github.io/simplebookstore_2/",
    },
  ];

const ProjectSection =
  () => {
    return (
      <section
        id="projects"
        className="bg-white py-20 px-6 md:px-16"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Portofolio
            Proyek
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(
              (
                project,
                index
              ) => (
                <a
                  key={
                    index
                  }
                  href={
                    project.url
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-50 border border-gray-100 shadow-sm rounded-xl overflow-hidden flex flex-col h-[420px] transition hover:shadow-md hover:-translate-y-1"
                >
                  <img
                    src={
                      project.image
                    }
                    alt={
                      project.title
                    }
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-sky-600 transition">
                      {
                        project.title
                      }
                    </h3>
                    <p className="text-sm text-gray-600 flex-1 line-clamp-4">
                      {
                        project.description
                      }
                    </p>
                    <div className="mt-4">
                      <span className="text-sm text-sky-600 hover:underline">
                        Lihat
                        Detail
                        →
                      </span>
                    </div>
                  </div>
                </a>
              )
            )}
          </div>
        </div>
      </section>
    );
  };

export default ProjectSection;
