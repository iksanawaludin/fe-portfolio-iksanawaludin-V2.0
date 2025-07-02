import React from 'react';

const blogPosts = [
  {
    title: 'Virtual Private Server',
    description: 'Pembelajaran mengenai Virtual Private Server secara sederhana.',
    image: '/assets/vps.png',
    link: 'https://iksannudinn.blogspot.com/2021/09/virtual-private-server.html',
  },
  {
    title: 'Shared Hosting',
    description: 'Pembahasan mengenai seputar Shared Hosting secara ringkas.',
    image: '/assets/shared.png',
    link: 'https://iksannudinn.blogspot.com/2021/09/shared-hosting.html',
  },
  {
    title: 'Control Panel Hosting',
    description: 'Penjelasan fungsi, fitur, dan contoh Control Panel Hosting.',
    image: '/assets/controlpanel.png',
    link: 'https://iksannudinn.blogspot.com/2021/09/control-panel-hosting.html',
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="bg-slate-50 py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Blog Terbaru</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col"
            >
              <a href={post.link} target="_blank" rel="noreferrer">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              </a>
              <div className="p-6 flex flex-col flex-grow">
                <a href={post.link} target="_blank" rel="noreferrer">
                  <h3 className="text-xl font-semibold text-gray-800 hover:text-sky-600 transition mb-2">
                    {post.title}
                  </h3>
                </a>
                <p className="text-gray-600 flex-grow">{post.description}</p>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block bg-sky-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-sky-700 transition"
                >
                  Baca Selengkapnya
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
