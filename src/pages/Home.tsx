import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  // Animation variants để tái sử dụng
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };  

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8 } },
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

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto py-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="text-5xl font-extrabold mb-4 leading-snug">
            Experience Smart Car Wash <br />
            <span className="text-orange-500">Convenience Anytime, Anywhere</span>
          </h2>
          <p className="text-gray-600 mb-6 text-lg">
            WashHub brings you a modern car care experience — book your wash in seconds, 
            track progress in real-time, and enjoy professional cleaning at your doorstep.
          </p>
          <div className="space-x-4">
            <a
              href="https://wash-hub-mobile.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-orange-500 text-white px-5 py-3 rounded-full font-semibold hover:bg-orange-600 transition">
                Click here to experience
              </button>
            </a>
          </div>
        </motion.div>

        <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <img
            src="/images/hero-machine.jpg"
            alt="Industrial Machinery"
            className="rounded-2xl shadow-2xl hover:scale-[1.03] transition-transform duration-500"
          />
          <div className="flex justify-between mt-6 text-center">
            {[
              { num: "65+", label: "Followers" },
              { num: "Pixel-Runners", label: "Our Team" },
              { num: "+50", label: "Partners" },
            ].map((stat, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05 }}>
                <p className="text-2xl font-bold text-orange-500">{stat.num}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Trusted Partners */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-16 bg-white text-center"
      >
        <h3 className="text-xl font-bold mb-8">Connected with the world's top brands</h3>
        <div className="flex flex-wrap justify-center gap-10 grayscale opacity-80">
          {["metrovac", "iglcoat", "zymol", "swissvac", "stoner", "sonax"].map((logo) => (
            <motion.img
              whileHover={{ scale: 1.1, rotate: 3 }}
              transition={{ type: "spring", stiffness: 200 }}
              key={logo}
              src={`/images/${logo}.jpg`}
              alt={logo}
              className="h-20 w-auto"
            />
          ))}
        </div>
      </motion.section>

      {/* Key Features */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto py-16 text-center"
      >
        <h3 className="text-3xl font-bold mb-10">Key Features That Set Us Apart</h3>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Outstanding Convenience",
              description:
                "Book a car wash anytime, anywhere in just a few taps — no waiting, no hassle.",
            },
            {
              title: "Smart Technology",
              description:
                "Powered by intelligent scheduling and tracking to optimize your time and service.",
            },
            {
              title: "Eco & Cost Efficient",
              description:
                "Save water, energy, and money with WashHub’s eco-efficient process.",
            },
            {
              title: "Safe & Transparent",
              description:
                "Track your service in real-time and pay securely through trusted digital channels.",
            },
            {
              title: "Expanded Ecosystem",
              description:
                "Access a growing network of partner garages and experts.",
            },
            {
              title: "Personalized Experience",
              description:
                "Get tailored recommendations and loyalty rewards just for you.",
            },
          ].map((feature) => (
            <motion.div
              key={feature.title}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h4 className="font-semibold mb-2 text-orange-500">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-white py-20"
      >
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Our Services
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore our premium car care options designed to make your vehicle shine.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                id: 3,
                name: "Detailed Bike Wash",
                description:
                  "Full wash and deep clean of chains, gears, and brakes.",
                price: 120000,
              },              
              {
                id: 1,
                name: "Engine Cleaning & Air Filter Service",
                description:
                  "Remove dust buildup inside the engine and air filter for smoother performance.",
                price: 150000,
              },
              {
                id: 2,
                name: "Wax & Polish",
                description:
                  "Eliminate scratches and apply premium carnauba wax for lasting shine.",
                price: 200000,
              },

            ].map((service) => (
              <motion.div
                key={service.id}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl border border-gray-100 transition-all duration-300"
              >
                <div className="text-orange-500 text-4xl mb-3">🛵</div>
                <h4 className="font-semibold text-lg text-gray-800 mb-2">
                  {service.name}
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  {service.description}
                </p>
                <p className="text-sm text-gray-800 font-medium">
                  Price: {service.price.toLocaleString()} VND
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Franchise Section */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto py-16 grid md:grid-cols-2 gap-10 items-center"
      >
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          src="/images/bosch.jpg"
          alt="Franchise"
          className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
        />

        <motion.div variants={fadeUp}>
          <h3 className="text-3xl font-bold mb-4 text-gray-800">
            Partner With Us: Become a WashHub Franchise Owner
          </h3>

          <p className="text-gray-600 mb-4">
            Join the WashHub network and bring smart car care to your city. 
            Start your own profitable business backed by proven tech and support.
          </p>

          <p className="text-gray-600 mb-6">
            Contact us today to explore franchise opportunities and grow with WashHub.
          </p>

          {/* 🚀 Input Email + Button */}
          <div className="flex items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
            >
              Submit
            </motion.button>
          </div>
        </motion.div>
      </motion.section>

      {/* Our Location */}
      <section className="bg-[#fff8f0] py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Location</h2>
          <p className="text-gray-600 mb-10">
            Visit our <span className="font-semibold text-orange-500">WashHub VH Mall Center</span> — conveniently located inside{" "}
            <strong>Vạn Hạnh Mall, District 10, Ho Chi Minh City</strong>.
          </p>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            {/* Google Map embed - zoom đúng Vạn Hạnh Mall */}
            <iframe
              title="WashHub VH Mall Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3919.5267672027567!2d106.6696068!3d10.770908!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752edddb818ebf%3A0xfc8c05045f47a3d8!2zVuG6oW4gSOG6oW5oIE1hbGw!5e0!3m2!1svi!2s!4v1762692705957!5m2!1svi!2s" 
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Info card dời sang góc phải để không che pin */}
            <div className="hidden md:block absolute bottom-6 right-6 bg-white shadow-xl rounded-2xl p-4 text-left w-[280px] border border-gray-100">
              <div className="flex items-center mb-3">
                <img
                  src="/images/logo-map.jpg"
                  alt="WashHub Logo"
                  className="h-10 w-10 rounded-md mr-3 object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-800 leading-tight">WASH - HUB</h4>
                  <p className="text-sm text-gray-500">VH Mall</p>
                </div>
              </div>

              <div className="flex items-center mb-2 text-yellow-500 text-sm">
                {"★".repeat(5)}
                <span className="text-gray-700 ml-2 font-semibold">4.9</span>
              </div>
              <p className="text-xs text-gray-500 mb-4">2.9k reviews • 2.3 km away</p>

              <button className="bg-orange-500 text-white w-full py-2 rounded-full font-semibold text-sm hover:bg-orange-600 transition">
                Details &amp; Book
              </button>
            </div>
          </div>

          {/* nút xem trên map */}
          <a
            href="https://maps.app.goo.gl/xHUK5EJfPgyrAQuo7" 
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-8 bg-orange-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-orange-600 transition"
          >
            View on Google Maps
          </a>
        </div>
      </section>

      {/* FAQs */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-white py-10"
      >
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-10 text-center text-orange-500">FAQs</h3>
          <div className="space-y-4">
            {[
              {
                question: "What services do you offer?",
                answer:
                  "We provide on-demand car washing, detailing, and interior cleaning via our app.",
              },
              {
                question: "How reliable are you?",
                answer:
                  "Our professionals ensure consistent quality and punctual service, trackable in real time.",
              },
              {
                question: "Are your materials sustainable?",
                answer:
                  "Yes! We use eco-friendly cleaning solutions to minimize water and chemical waste.",
              },
              {
                question: "How can I contact you?",
                answer:
                  "Reach us via in-app chat, email at washhubvn@gmail.com, or call 0967 818 761.",
              },
            ].map((faq) => (
              <motion.details
                key={faq.question}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 rounded-lg p-3 transition-all open:bg-gray-100"
              >
                <summary className="font-semibold cursor-pointer text-lg text-gray-800">
                  {faq.question}
                </summary>
                <p className="text-gray-600 mt-2 leading-relaxed">{faq.answer}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer */}
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
