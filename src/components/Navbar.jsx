import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-content">
                {/* Logo */}
                <Link to="/" className="navbar-logo">
                    Ombeyi Brenda
                </Link>
                {/* Navigation Links */}
                <div className="navbar-links">
                    <Link to="/about" className="navbar-link">About Me</Link>
                    <Link to="/skills" className="navbar-link">Skills</Link>
                    <Link to="/projects" className="navbar-link">Projects</Link>
                    <Link to="/contact" className="navbar-link">Contact</Link>
                </div>
                {/* Action Buttons */}
                <div className="navbar-actions">
                    <Link to="/contact" className="btn-outline">Contact Me</Link>
                    <Link to="/projects" className="btn-solid">View Projects</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;