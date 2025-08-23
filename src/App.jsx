import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// استيراد الصور
import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
import project3 from "./assets/project3.png";

const projects = [
  {
    id: 1,
    img: project1,
    title: "My Shopify Store",
    description: "Password: anfal123",
    link: "/projects/1"
  },
  {
    id: 2,
    img: project2,
    title: "Portfolio Website",
    description: "Built with React, TailwindCSS, Framer Motion",
    link: "/projects/2"
  },
  {
    id: 3,
    img: project3,
    title: "Sample Project",
    description: "Placeholder project",
    link: "/projects/3"
  }
];

const skills = ["HTML","CSS","PHP","JavaScript","Java","Liquid","jQuery","Ajax","React.JS",
                "Node.JS","TailwindCSS","Shopify","WordPress","WooCommerce"];

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow-md py-6">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">Anfal Eltahir</h1>
          <nav className="space-x-6 text-gray-700">
            <a href="#about" className="hover:text-blue-500 transition">About</a>
            <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
            <a href="#skills" className="hover:text-blue-500 transition">Skills</a>
            <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* About Section */}
      <motion.section
        id="about"
        className="container mx-auto px-6 py-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg my-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-gray-800">About Me</h2>
        <p className="text-gray-700 max-w-3xl">
          Hi, I'm Anfal Eltahir – Experienced Web Developer with over 5 years of experience in scalable web applications. Expertise in front-end and back-end technologies including React, Node.js, PHP, Shopify, WooCommerce, and more. I have strong skills in responsive design, performance optimization, and delivering seamless user experiences.
        </p>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="container mx-auto px-6 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={project.img}
                alt={project.title}
                className="rounded mb-4 shadow-sm hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
              <Link
                to={project.link}
                className="inline-block mt-3 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded hover:scale-105 transition-transform"
              >
                View Details
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="container mx-auto px-6 py-16 bg-gray-100 rounded-lg my-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Skills</h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="container mx-auto px-6 py-16 bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg my-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <a
            href="https://linkedin.com/in/Anfal-93"
            target="_blank"
            className="flex-1 text-center px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:your-email@example.com"
            className="flex-1 text-center px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            Email
          </a>
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
