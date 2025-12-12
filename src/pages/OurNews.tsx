import React from "react";
import { motion } from "framer-motion";

export default function OurNews() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-[#fff8f0] text-gray-800 overflow-hidden">

      {/* Header */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex justify-between items-center px-10 py-6 bg-white shadow-md rounded-b-2xl sticky top-0 z-50"
      >
        {/* LEFT: LOGO */}
        <img
          src="/images/logo.jpg"
          alt="Logo"
          className="h-10 w-auto rounded-md object-contain"
        />

        {/* CENTER: NAVIGATION */}
        <nav className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8 text-base font-medium">
          <a href="/" className="hover:text-orange-500 transition">Home</a>

          <a
            href="https://www.facebook.com/washhubvn?locale=vi_VN"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition"
          >
            Our Page
          </a>

          <a href="/our-news" className="hover:text-orange-500 transition">
            Our News
          </a>
        </nav>

        {/* RIGHT: EMPTY (to balance layout) */}
        <div className="w-10"></div>
      </motion.header>

      {/* ================= HERO BANNER ================= */}
      <section className="relative bg-gradient-to-r from-orange-500 to-yellow-400 text-white py-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Latest News & Updates
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg opacity-90 mt-3"
        >
          Explore the latest announcements and highlights from WashHub
        </motion.p>
      </section>

      {/* ================= NEWS GRID ================= */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">Let's explore</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              img: "/images/news1.jpg",
              date: "June 2024",
              title: "Vệ sinh xe máy giá tốt – Ưu đãi mùa hè",
              desc: "Khuyến mãi đặc biệt dành cho khách hàng mới khi sử dụng dịch vụ WashHub trong tháng này.",
            },
            {
              img: "/images/news2.jpg",
              date: "July 2024",
              title: "Công nghệ rửa xe không chạm mới",
              desc: "Công nghệ mới giúp tiết kiệm 50% lượng nước đồng thời cho độ bóng vượt trội.",
            },
            {
              img: "/images/news3.jpg",
              date: "August 2024",
              title: "WashHub đồng hành cùng sự kiện VH Mall",
              desc: "Tham gia sự kiện tại Vạn Hạnh Mall và nhận quà tặng đặc biệt khi đặt lịch tại booth WashHub.",
            },
          ].map((news, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4"
            >
              <img
                src={news.img}
                alt={news.title}
                className="w-full h-56 object-cover rounded-lg"
              />

              <p className="text-sm text-gray-500 mt-4">{news.date}</p>
              <h3 className="text-lg font-bold mt-1">{news.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{news.desc}</p>

              <a href="https://www.facebook.com/washhubvn?locale=vi_VN" className="text-orange-500 text-sm mt-3 inline-block">
                Read more →
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= FOOTER COPY FROM HOME ================= */}
      <footer className="bg-orange-400 text-white mt-20 pt-12 pb-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/images/logo.jpg" alt="WashHub Logo" className="h-8 w-auto rounded-md" />
              <span className="text-lg font-semibold">WashHub</span>
            </div>
            <p className="text-sm mb-2 font-semibold">Address:</p>
            <p className="text-sm mb-4 opacity-90">
              FPT University, D1 Street, Long Thanh My, Ho Chi Minh City, Vietnam
            </p>
            <p className="text-sm mb-2 font-semibold">Contact:</p>
            <p className="text-sm">
              0967818761 <br />
              <a href="mailto:washhubvn@gmail.com" className="underline hover:text-gray-100">
                washhubvn@gmail.com
              </a>
            </p>
            <div className="flex space-x-4 mt-4 text-xl">
              <a href="#" className="hover:text-gray-200"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="hover:text-gray-200"><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:text-gray-200"><i className="fab fa-x-twitter"></i></a>
              <a href="#" className="hover:text-gray-200"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <a href="#" className="block hover:underline">About Us</a>
              <a href="#" className="block hover:underline">Our Services</a>
              <a href="#" className="block hover:underline">Contact Support</a>
              <a href="#" className="block hover:underline">Get a Quote</a>
              <a href="#" className="block hover:underline">Client Login</a>
            </div>
            <div className="space-y-2">
              <a href="#" className="block hover:underline">Careers Page</a>
              <a href="#" className="block hover:underline">Blog Section</a>
              <a href="#" className="block hover:underline">FAQ Page</a>
              <a href="#" className="block hover:underline">Privacy Info</a>
              <a href="#" className="block hover:underline">Site Map</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/30 mt-10 pt-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 text-sm opacity-90">
            <p>© 2025 WashHub. All rights reserved.</p>
            <div className="space-x-4 mt-2 md:mt-0">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms of Service</a>
              <a href="#" className="hover:underline">Cookies Settings</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
