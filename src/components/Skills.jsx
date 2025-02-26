import React, { useEffect } from 'react';
import '../styles/Skills.css';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS

const skillsData = [
  {
    title: 'Mastering HTML Structure',
    description:
      ' strong foundation in HTML, enabling to create well-structured and semantic web pages.',
    imgSrc: 'https://images.pexels.com/photos/11035371/pexels-photo-11035371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Expert in CSS Design',
    description:
      'With CSS,  crafts visually appealing and responsive designs, enhancing user experience across devices.',
    imgSrc: 'https://images.pexels.com/photos/11035386/pexels-photo-11035386.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'JavaScript for Interactivity',
    description:
      'I utilize JavaScript to add dynamic features and interactivity, making web applications more engaging.',
    imgSrc: 'https://media.istockphoto.com/id/1413514720/photo/stylized-3d-javascript-icon-design.jpg?b=1&s=612x612&w=0&k=20&c=UQtBuY5qMsHHkNFaRVEhJDcRdEGLJUOes9kaT7NdChY=',
  },
  {
    title: 'Proficient in React Development',
    description:
      'I build efficient and scalable web applications using React, focusing on component-based architecture.',
    imgSrc: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

const Skills = () => {
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="skills">
      <h2 data-aos="fade-up">Technical Proficiencies</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        I excel in HTML, CSS, JavaScript, React, Python, and Flask, showcasing  ability to build dynamic and responsive applications.
      </p>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="skill-card"
            data-aos="zoom-in"
            data-aos-delay={index * 200} // Delay each card based on its index
          >
            <img src={skill.imgSrc} alt={skill.title} className="skill-image" />
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;