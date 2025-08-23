import React from "react";
import { useParams } from "react-router-dom";

// استيراد الصور من src/assets
import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
import project3 from "./assets/project3.png";

const projects = [
  {
    id: 1,
    title: "My Shopify Store",
    description: "Shopify store for hair care products. Password: anfal123",
    link: "https://anfal123.myshopify.com",
    images: [project1, project2, project3]
   // video: "/videos/project1.mp4" // موجود في public/videos
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "Portfolio built with React, TailwindCSS, Framer Motion",
    link: "https://github.com/Anfal-93/my-portfolio",
    images: [project2]
   // video: "/videos/project2.mp4"
  },
  {
    id: 3,
    title: "Sample Project",
    description: "Placeholder project",
    images: [project3]
   // video: "/videos/project3.mp4"
  },
];

function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) return <p className="text-center mt-10">Project not found</p>;

  return (
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">{project.title}</h2>
      <p className="text-gray-700 mb-6">{project.description}</p>

      {/* زر زيارة المشروع */}
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Visit The Website
        </a>
      )}
      <br /><br />

      {/* الصور */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {project.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${project.title} ${index + 1}`}
            className="rounded shadow-lg"
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectDetails;
