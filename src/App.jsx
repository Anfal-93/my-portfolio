import React from "react";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow-md py-6">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Anfal Eltahir</h1>
          <nav className="space-x-6">
            <a href="#about" className="hover:text-blue-500">About</a>
            <a href="#projects" className="hover:text-blue-500">Projects</a>
            <a href="#contact" className="hover:text-blue-500">Contact</a>
          </nav>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="container mx-auto px-6 py-12">
        <motion.h2 
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-gray-700 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.2 } }}
        >
          Hi, I'm Anfal Eltahir – Web Developer & Full Stack Engineer with 5+ years of experience building responsive websites using React, TailwindCSS, PHP, and Laravel.
        </motion.p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project Card */}
          <motion.div 
            className="bg-white shadow-lg rounded-lg p-4"
            whileHover={{ scale: 1.05 }}
          >
            <img src="/src/assets/project1.png" alt="Project 1" className="rounded mb-4" />
            <h3 className="text-xl font-bold mb-2">Shopify Task</h3>
            <p className="text-gray-600">Custom Shopify product and cart templates development task.</p>
            <a href="https://github.com/Anfal-93/Shopify-Task" target="_blank" className="inline-block mt-2 text-blue-500 hover:underline">View on GitHub</a>
          </motion.div>

          {/* Add more project cards here */}
          <motion.div className="bg-white shadow-lg rounded-lg p-4" whileHover={{ scale: 1.05 }}>
            <img src="/src/assets/project2.png" alt="Project 2" className="rounded mb-4" />
            <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
            <p className="text-gray-600">This portfolio built with React, Vite, TailwindCSS, and Framer Motion.</p>
            <a href="https://github.com/Anfal-93/my-portfolio" target="_blank" className="inline-block mt-2 text-blue-500 hover:underline">View on GitHub</a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <a href="https://linkedin.com/in/Anfal-93" target="_blank" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition text-center">LinkedIn</a>
          <a href="mailto:your-email@example.com" className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition text-center">Email</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white shadow-md py-6 mt-12">
        <p className="text-center text-gray-600">&copy; 2025 Anfal Eltahir. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
