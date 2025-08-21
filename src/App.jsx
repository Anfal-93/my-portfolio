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
      <motion.section 
        id="about" 
        className="container mx-auto px-6 py-12 bg-gradient-to-r from-gray-100 to-gray-200"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700 max-w-2xl">
          Hi, I'm Anfal Eltahir – Web Developer & Full Stack Engineer with 5+ years of experience building responsive websites using React, TailwindCSS, PHP, and Laravel.
        </p>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        id="projects" 
        className="container mx-auto px-6 py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {["project1.jpg","project2.jpg","project3.jpg"].map((img, index) => (
            <motion.div 
              key={index}
              className="bg-white shadow-lg rounded-lg p-4"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={`/src/assets/${img}`} alt={`Project ${index+1}`} className="rounded mb-4" />
              <h3 className="text-xl font-bold mb-2">Project {index+1}</h3>
              <p className="text-gray-600">This is a placeholder description for Project {index+1}.</p>
              <a href="https://github.com/Anfal-93/my-portfolio" target="_blank" className="inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">View on GitHub</a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact" 
        className="container mx-auto px-6 py-12 bg-gradient-to-r from-gray-200 to-gray-100"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <a href="https://linkedin.com/in/Anfal-93" target="_blank" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition text-center">LinkedIn</a>
          <a href="mailto:your-email@example.com" className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition text-center">Email</a>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-white shadow-md py-6 mt-12">
        <p className="text-center text-gray-600">&copy; 2025 Anfal Eltahir. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
