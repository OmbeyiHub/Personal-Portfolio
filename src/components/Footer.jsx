import React from "react";
import "../styles/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <h2>Ombeyi Brenda</h2>
                </div>
                <nav className="footer-nav">
                    <a href="/about" className="footer-link">About Me</a>
                    <a href="/skills" className="footer-link">Skills</a>
                    <a href="/projects" className="footer-link">Projects</a>
                </nav>
                <div className="footer-icons">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>
            </div>
            <hr className="footer-divider" />
            <div className="footer-bottom">
                <p>© 2024 Ombeyi Brenda. All rights reserved.</p>
                <div className="footer-links">
                    <a href="/contact" className="footer-link">Contact</a>
                    <a href="/terms" className="footer-link">Terms and Conditions</a>
                    <a href="/privacy" className="footer-link">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;