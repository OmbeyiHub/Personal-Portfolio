import React, { useEffect } from 'react';
import '../styles/About.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1 second
    }, []);

    return (
        <div className="about">
            <div className="about-header" data-aos="fade-up">
                <h1>About Me</h1>
                <p>
                Hi, I'm Ombeyi Brenda, a Junior Software Developer passionate about building efficient and user-friendly applications. I  love solving problems through code.
                Always eager to learn and grow, I enjoy collaborating on innovative projects. Let's connect and create something great!.
                </p>
            </div>

            <div className="about-content">
                {/* Professional Summary */}
                <div className="summary-section" data-aos="fade-right">
                    <h2>Professional Summary</h2>
                    <p>
                        My journey in software engineering began at Moringa School, where I developed a strong foundation in web development. 
                        Since then, I've contributed to projects like Digital Fest Events,Utalli app where users can interact and enjoy the services offered.
                    </p>
                </div>

                {/* Skills and Technologies */}
                <div className="skills-section" data-aos="fade-up">
                    <h2>Skills & Technologies</h2>
                    <div className="skills-grid">
                        <div className="skill-card" data-aos="flip-left">
                            <img src="https://ih1.redbubble.net/image.1468561932.1834/st,small,845x845-pad,1000x1000,f8f8f8.jpg" alt="Frontend Development" />
                            <h3>Frontend Development</h3>
                            <p>React, JavaScript, HTML, CSS</p>
                        </div>
                        <div className="skill-card" data-aos="flip-left">
                            <img src="https://miro.medium.com/v2/resize:fit:1400/1*IcTQj9rXJxLdtjL9ENUWJA.jpeg" alt="Backend Development" />
                            <h3>Backend Development</h3>
                            <p>Node.js, Flask, PostgreSQL</p>
                        </div>
                        <div className="skill-card" data-aos="flip-left">
                            <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="Version Control" />
                            <h3>Version Control</h3>
                            <p>Git & GitHub</p>
                        </div>
                        <div className="skill-card" data-aos="flip-left">
                            <img src="https://miro.medium.com/v2/resize:fit:1400/1*jM4Nenmq4DIoiEtSVLDjWg.png" alt="Other Tools" />
                            <h3>Other Tools</h3>
                            <p>REST APIs, Debugging Tools</p>
                        </div>
                    </div>
                </div>

                {/* Achievements */}
                <div className="achievements-section" data-aos="fade-left">
                    <h2>Achievements</h2>
                    <div className="achievements-cards">
                        <div className="achievement-card" data-aos="flip-left">
                            <img src="https://plus.unsplash.com/premium_photo-1661369734218-2156512875c6?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Digital Events" />
                            <h3>Digital Fest Events</h3>
                            <p>
                                This Platform allows users to book events and see upcoming events too.
                            </p>
                        </div>
                        <div className="achievement-card" data-aos="flip-left">
                            <img src="https://media.istockphoto.com/id/1192490338/photo/valley-of-japan.jpg?s=612x612&w=is&k=20&c=Jhegymg8kpANksk1GSXNHpIGuhcs4CA9hk0eRy-sif0=" alt="Utalii" />
                            <h3>Utalii</h3>
                            <p>
                                Built this website to allow tourist to book their desired accomodation and also to allow them to book their desired hotels.
                            </p>
                        </div>
                        <div className="achievement-card" data-aos="flip-left">
                            <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydGZvbGlvJTIwd2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D" alt="Portfolio Website" />
                            <h3>Portfolio Website</h3>
                            <p>
                                Designed and launched this responsive portfolio to showcase my projects, skills, and passion for software engineering.
                            </p>
                        </div>
                       
                    </div>
                </div>

                {/* Call to Action */}
                <div className="contact-section" data-aos="fade-up">
                    <h2>Let's Collaborate!</h2>
                    <p>
                        Whether you're looking for a software developer to bring your ideas to life or need someone to join your team, 
                        I'd love to work together.
                    </p>
                    <a href='/contact' className="contact-btn">Contact Me</a>
                </div>
            </div>
        </div>
    );
};

export default About;