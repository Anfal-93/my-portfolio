import React from "react";
import { useParams } from "react-router-dom";

// استيراد الصور من src/assets
import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
import modernuae1 from "./assets/modernuae1.png";
import modernuae2 from "./assets/modernuae2.png";
import modernuae3 from "./assets/modernuae3.png";
import modernuae4 from "./assets/modernuae4.png";
import modernuae5 from "./assets/modernuae5.png";
import Auto1 from "./assets/Auto1.png";
import Auto2 from "./assets/Auto2.png";
import Auto3 from "./assets/Auto3.png";
import Egypt1 from "./assets/Egypt1.png";
import Egypt2 from "./assets/Egypt2.png";
import Spain1 from "./assets/Spain1.png";

const projects = [
  {
    id: 1,
    title: "My Shopify Store",
    description: "Shopify store for hair care products .. To Access please Enter this Password: anfal123",
    link: "https://anfal123.myshopify.com",
    images: [project1, project2]
   // video: "/videos/project1.mp4" // موجود في public/videos
  },
  {
    id: 2,
    title: "Moder Square Website",
    description: "It's a real estate and Properties website, built with WordPress",
    link: "https://www.modernsquare.ae",
    images: [modernuae1, modernuae2, modernuae3, modernuae4, modernuae5]
   // video: "/videos/project2.mp4"
  },
  {
    id: 3,
    title: "Modern Auto Website",
    description: "It's a cars rental and sale website",
	link: "https://www.modernauto.es",
    images: [Auto1, Auto2, Auto3]
   // video: "/videos/project3.mp4"
  },
  {
    id: 4,
    title: "Modern Square Egypt",
    description: "It's a services website",
	link: "https://modernsquareegypt.com",
    images: [Egypt1, Egypt2]
   // video: "/videos/project3.mp4"
  },
  {
    id: 5,
    title: "Modern Square Spain",
    description: "It's a services website",
	link: "https://modernsquarespain.com",
    images: [Spain1]
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
