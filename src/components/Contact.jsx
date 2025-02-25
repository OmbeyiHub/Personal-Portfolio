import React, { useEffect } from 'react';
import '../styles/Contact.css';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS

const Contact = () => {
    // Initialize AOS when component mounts
    useEffect(() => {
        AOS.init({ duration: 1000 }); // You can change duration as needed
    }, []);

    return (
        <div className="contact">
            <h1 className="contact-header" data-aos="fade-up">Get in Touch</h1>
            <h2 className="contact-subheader" data-aos="fade-up" data-aos-delay="100">Reach Out Anytime</h2>
            <p className="contact-description" data-aos="fade-up" data-aos-delay="200">
                Feel free to contact me for collaborations or inquiries. I'm excited to connect!
            </p>

            <div className="contact-info">
                <div className="contact-item" data-aos="fade-left" data-aos-delay="300">
                    <i className="fas fa-envelope"></i>
                    <h3>Email Me</h3>
                    <p>You can reach me at <a href="brendaotieno2001@gmail.com">brendaotieno2001@gmail.com</a>. I am looking forward to your response!</p>
                </div>
                <div className="contact-item" data-aos="fade-left" data-aos-delay="400">
                    <i className="fas fa-phone-alt"></i>
                    <h3>Call Me</h3>
                    <p>For immediate inquiries, call me at <a href="tel:+2547i6468440">+254 769515861</a>. I'm here to help!</p>
                </div>
                <div className="contact-item" data-aos="fade-left" data-aos-delay="500">
                    <i className="fas fa-map-marker-alt"></i>
                
                </div>
            </div>
        </div>
    );
};

export default Contact;