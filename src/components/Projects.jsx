import React, { useEffect } from 'react';
import '../styles/Projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const Projects = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1 second
    }, []);

    const projectData = [
        {
            title: "Portfolio Website",
            description:
                "A personal portfolio website built with React. It showcases my work, skills, and experience.",
            image: "images/pic4.png",
            link: "",
        },
        {
            title: "Utalii ",
            description:
                "Kenya Tours is a website that helps tourists find hotels, parks and beaches to visit while in Kenya so they don't have to struggle finding places to visit.",
            image: "https://images.unsplash.com/photo-1709841367504-63d9b2dd9ad0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2VueWElMjB0b3Vyc3xlbnwwfHwwfHx8MA%3D%3D",
            link: "",
        },
        {
            title: "Digital Fest Events",
            description:
                "This app allows you to book ,search events according to desired events",
            image: "https://images.unsplash.com/photo-1458748600212-a4c65493cbfd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGlnaXRhbCUyMGV2ZW50c3xlbnwwfHwwfHx8MA%3D%3D",
            link: "",
        }
        
        
    ];

    return (
        <div className="projects">
            <h1 data-aos="fade-up">My Projects</h1>
            <div className="projects-list">
                {projectData.map((project, index) => (
                    <div
                        className="project"
                        key={index}
                        data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} // Alternating animations
                    >
                        <img
                            src={project.image}
                            alt={`${project.title} preview`}
                            className="project-image"
                        />
                        <div className="project-details">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                View Project
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;