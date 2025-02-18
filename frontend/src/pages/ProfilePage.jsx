import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/Profile.css";
import bg from "../assets/bg.jpg";
import Navbar from "../components/Navbar";

const ProfilePage = () => {
    return (
        <div className="profile-page">

            <Navbar />

            <div className="profile-container">
                <div className="profile-header">
                    <div className="profile-left">
                        <img src={bg} alt="Profile" className="profile-image" />
                        <h2 className="profile-name">John Doe</h2>
                        <p className="profile-title">Fullstack MERN Developer</p>
                    </div>

                    <div className="contact-info">
                        <p><FaEnvelope /> johndoe@example.com</p>
                        <p><FaPhone /> +1234567890</p>
                        <p><FaMapMarkerAlt /> 123 Main St, City, Country</p>
                    </div>
                </div>

                <div className="profile-content">

                    <h2 className="section-title">About Me</h2>
                    <p className="about-me">
                        I am a passionate Fullstack MERN Developer focusing on Java development, while also exploring Machine Learning and Blockchain. I believe in continuous learning and building impactful software solutions.
                    </p>

                    <h2 className="section-title">Technical Skills</h2>
                    <div className="skills-list">
                        {["JavaScript", "React.js", "Node.js", "MongoDB", "Spring Boot", "Machine Learning", "Blockchain"].map((skill, index) => (
                            <span key={index} className="skill-tag">{skill}</span>
                        ))}
                    </div>

                    <h2 className="section-title">Links</h2>
                    <div className="social-links">
                        <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="social-link">
                            <FaGithub /> GitHub
                        </a>
                        <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="social-link">
                            <FaLinkedin /> LinkedIn
                        </a>
                        <p className="unique-code">Your Colab Code: ABCD1234</p>
                    </div>

                    <div style={{display:'flex', justifyContent:'space-around', marginTop:'5vh'}}>
                        <button>Edit Profile</button>
                        <button>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
