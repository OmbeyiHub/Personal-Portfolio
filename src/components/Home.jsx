import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Home.css';

const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="home">
            <div className="home-container">
                <div className="home-content" data-aos="fade-up">
                    <h1 className="home-title">
                        Welcome to <span className="highlight">Ombeyi's</span> Portfolio
                    </h1>
                    <p className="home-description" data-aos="fade-up" data-aos-delay="300">
                        Discover the journey of Ombeyi Brenda, a dedicated software engineer with a passion for creating impactful solutions. Explore projects and skills, and connect to collaborate on exciting opportunities.
                    </p>
                    <div className="home-buttons">
                        <a href="/projects" className="btn btn-outline" data-aos="fade-up" data-aos-delay="500">View Projects</a>
                        <a href="/contact" className="btn btn-outline" data-aos="fade-up" data-aos-delay="700">Contact Me</a>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="about-section" data-aos="fade-up">
                <div className="about-content">
                    <h2>Meet Ombeyi Brenda</h2>
                    <p>
                        I am a software engineer with a passion for creating innovative solutions. My journey began at Moringa School, where I developed skills in HTML, CSS, JavaScript, React, Python, and Flask. I thrive on challenges and love to learn.
                    </p>
                    <div className="about-stats">
                        <div className="stat-item" data-aos="fade-right">
                            <h3>100%</h3>
                            <p>Completed numerous projects showcasing my ability to solve real-world problems through technology.</p>
                        </div>
                        <div className="stat-item" data-aos="fade-left">
                            <h3>Projects</h3>
                            <p>My projects include Digital Fest Events and Utalii App, connecting tourists with events and hotels.</p>
                        </div>
                        <div className="stat-item" data-aos="fade-up">
                            <h3>Languages</h3>
                            <p>Proficient in JavaScript and Python for building dynamic applications.</p>
                        </div>
                        <div className="stat-item" data-aos="fade-down">
                            <h3>Frameworks</h3>
                            <p>Experience with React and Flask for robust web applications.</p>
                        </div>
                    </div>
                </div>
                <div className="about-image-container">
                    <img src="https://images.unsplash.com/photo-1508780709619-79562169bc64?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaCUyMGxhZHl8ZW58MHx8MHx8fDA%3D" alt="Brenda" className="about-image" />
                </div>
            </div>

            {/* Projects Section */}
            <div className="projects-section" data-aos="fade-up">
                <h2 className="projects-title">Showcasing My Work</h2>
                <p className="projects-description">
                    Explore the innovative projects I've developed, each designed to solve real-world problems and enhance user experiences.
                </p>

                <div className="projects-grid">
                    <div className="project-card" data-aos="fade-up" data-aos-delay="100">
                        <div className="project-image">
                            <img src="https://plus.unsplash.com/premium_photo-1661369734218-2156512875c6?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Digital Fest" />
                        </div>
                        <div className="project-details">
                            <h3 className="project-title">Digital Fest</h3>
                            <p className="project-description">
                                A platform connecting users, enhancing user experience.
                            </p>
                            <a href="https://github.com/OmbeyiHub/DigitalFest-Events" className="btn btn-solid" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                        </div>
                    </div>

                    <div className="project-card" data-aos="fade-up" data-aos-delay="300">
                        <div className="project-image">
                            <img src="https://images.unsplash.com/photo-1709841367504-63d9b2dd9ad0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2VueWElMjB0b3Vyc3xlbnwwfHwwfHx8MA%3D%3D" alt="Utalii App" />
                        </div>
                        <div className="project-details">
                            <h3 className="project-title">Utalii Application</h3>
                            <p className="project-description">
                                Kenya Tours helps tourists find hotels, parks, and beaches in Kenya.
                            </p>
                            <a href="https://github.com/OmbeyiHub/Kenya-Tours" className="btn btn-solid">View on GitHub</a>
                        </div>
                    </div>

                    <div className="project-card" data-aos="fade-up" data-aos-delay="500">
                        <div className="project-image">
                            <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydGZvbGlvJTIwd2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D" alt="Portfolio Website" />
                        </div>
                        <div className="project-details">
                            <h3 className="project-title">Portfolio Website</h3>
                            <p className="project-description">
                                Showcases my work and growth as a developer.
                            </p>
                            <a href="https://github.com/OmbeyiHub/Personal-Portfolio" className="btn btn-solid">View on GitHub</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Technologies Section */}
            <div className="technologies-section" data-aos="fade-up">
                <h2>Mastering Modern Technologies for Innovative Solutions</h2>
                <p>
                    Proficient in HTML, CSS, JavaScript, React, Python, and Flask for building dynamic applications.
                </p>
                <div className="technologies-cards">
                    <div className="technology-card" data-aos="fade-right">
                        <img src="https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Front-End Development" />
                        <h3>Front-End Development Expertise</h3>
                        <p>
                            Skilled in HTML, CSS, and JavaScript for seamless user experiences.
                        </p>
                        <a href="/skills" className="btn btn-outline">Learn More</a>
                    </div>
                    <div className="technology-card" data-aos="fade-left">
                        <img src="https://images.pexels.com/photos/11035474/pexels-photo-11035474.jpeg?auto=compress&cs=tinysrgb&w=400" alt="React and Python" />
                        <h3>React and Python Proficiency</h3>
                        <p>
                            Strong command of React and Python for robust applications.
                        </p>
                        <a href="/skills" className="btn btn-outline">Learn More</a>
                    </div>
                    <div className="technology-card" data-aos="fade-up">
                        <img src="https://banner2.cleanpng.com/20180829/qut/kisspng-flask-python-web-framework-representational-state-flask-stickker-1713946811244.webp" alt="Flask for Back-End Solutions" />
                        <h3>Flask for Back-End Solutions</h3>
                        <p>
                            Uses Flask for secure and reliable server-side operations.
                        </p>
                        <a href="/skills" className="btn btn-outline">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
