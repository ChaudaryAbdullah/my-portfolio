import React, { useState } from "react";
import profileImage from "../assets/images/2023_04_19_17_15_IMG_1912.JPG";
import forkify1 from "../assets/images/forkify1.png";
import forkify2 from "../assets/images/forkify2.png";
import forkify3 from "../assets/images/forkify3.png";
import living1 from "../assets/images/living+1.png";
import living2 from "../assets/images/living+2.png";
import living3 from "../assets/images/living+3.png";
import living4 from "../assets/images/living+4.png";
import living5 from "../assets/images/living+5.png";
import living6 from "../assets/images/living+6.png";
import living7 from "../assets/images/living+7.png";
import backgroundImage from "../assets/images/background.jpg";
import gymImage from "../assets/images/gym_1542212911.jpg";
import gymImage1 from "../assets/images/gym.jpg";
import Abdullah_Resume from "../assets/files/Abdullah_Resume.pdf";
import "../styles/Home.css";
import ProjectModal from "./ProjectModel";
import { ProjectCard } from "./ProjectCard";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faGear,
  faFolder,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faChartLine, faLaptop } from "@fortawesome/free-solid-svg-icons";

import {
  faCalendar,
  faPenToSquare,
  //   faLaptop,
} from "@fortawesome/free-regular-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import { useTheme } from "../services/ThemeProvider";

const projects = [
  {
    title: "Forkify",
    images: [forkify1, forkify2, forkify3],
    description:
      "Forkify is a dynamic recipe web app that allows users to search for recipes, view cooking instructions, and manage bookmarks. Built with JavaScript, it fetches real-time recipe data for an interactive experience.",
  },
  {
    title: "Living+",
    images: [
      backgroundImage,
      living1,
      living2,
      living3,
      living4,
      living5,
      living6,
      living7,
    ],
    description:
      "Living+ is a full-stack web application designed to simplify the process of finding and managing shared accommodations for students. Inspired by platforms like PakWheels but tailored for housing, it connects property owners with student applicants through listings and a built-in real-time chat system. The platform ensures a user-friendly experience with secure authentication, dynamic filtering, and responsive design.",
  },
  {
    title: "Gym Management System",
    images: [gymImage, gymImage1],
    description:
      "A Java-based desktop app to manage gym operations. It tracks memberships, schedules, and payments, streamlining the user and staff experience.",
  },
];

const Home = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <div className="home">
      <nav className="nav">
        <div className="nav-brand">
          <div className="nav-logo">A</div>
          <span>Abdullah</span>
        </div>
        <div className="nav-links">
          <a href="#home">
            <FontAwesomeIcon icon={faHouse} />
            <span>Home</span>
          </a>
          <a href="#about">
            <FontAwesomeIcon icon={faUser} />
            <span>About</span>
          </a>
          <a href="#process">
            <FontAwesomeIcon icon={faGear} />
            <span>Process</span>
          </a>
          <a href="#projects">
            <FontAwesomeIcon icon={faFolder} />
            <span>Projects</span>
          </a>
          <a href="#contact">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Contact</span>
          </a>
          <button onClick={toggleTheme} className="theme-toggle-btn">
            {darkMode ? (
              <>
                ☀️ <span>Light</span>
              </>
            ) : (
              <>
                🌙 <span>Dark</span>
              </>
            )}
          </button>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-container">
          <div className="hero-content">
            <h1>
              Hello, I'm
              <br />
              Abdullah Shakir
            </h1>
            <p>
              I am a dedicated software engineer with expertise in Java, Python,
              and C++, specializing in backend development and desktop
              applications. I am currently based in Pakistan, with hands-on
              experience from internships at Webwrite Inc. and Digital
              Empowerment Pakistan.
            </p>
            <a href="#contact" className="btn-primary">
              Say Hello!
            </a>
            <div className="stats">
              <div className="stat-card">
                <h3>1 Y.</h3>
                <p>Experience</p>
              </div>
              <div className="stat-card">
                <h3>10+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-card">
                <h3>10</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img src={profileImage} alt="Profile Image" />
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="card">
          <div className="profile-section">
            <img
              src={profileImage}
              alt="Profile Image"
              className="profile-image"
            />
            <div className="social-icons">
              <a
                href="https://www.facebook.com/abdullah.shakir.5836"
                className="social-icon"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://www.instagram.com/chaudary._abdullah/"
                className="social-icon"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.linkedin.com/in/abdullah-shakir-bbaa95279/"
                className="social-icon purple"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a
                href="https://github.com/ChaudaryAbdullah/"
                className="social-icon"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
          <div className="content-section">
            <h1>I am Professional User Experience Designer</h1>
            <p>
              I design and develop services for customers specializing creating
              stylish, modern websites, web services and online stores. My
              passion is to design digital user experiences.
            </p>
            <p>
              I design and develop services for customers specializing creating
              stylish, modern websites, web services.
            </p>
            <div className="buttons">
              <a href="#projects" className="button primary">
                My Project
              </a>
              <a
                href={Abdullah_Resume}
                download="Abdullah_Resume.pdf"
                className="button secondary"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="process" id="process">
        <div className="process-container">
          <h2 className="process-title">Work Process</h2>
          <div className="process-grid">
            <div className="process-card">
              <a className="social-icon purple">
                <FontAwesomeIcon icon={faCalendar} />
              </a>
              <h3>1. Research</h3>
              <p>
                I gather in-depth insights into the project's goals, target
                audience, and market trends. This involves analyzing
                competitors, identifying user needs, and understanding industry
                standards to lay a strong foundation for design and development.
              </p>
            </div>
            <div className="process-card">
              <a className="social-icon purple">
                <FontAwesomeIcon icon={faChartLine} />
              </a>
              <h3>2. Analyze</h3>
              <p>
                I evaluate the research findings to identify key challenges,
                user requirements, and system specifications. This helps in
                defining clear objectives, setting priorities, and outlining the
                project scope for effective problem-solving.
              </p>
            </div>
            <div className="process-card">
              <a className="social-icon purple">
                <FontAwesomeIcon icon={faPenToSquare} />
              </a>
              <h3>3. Design</h3>
              <p>
                I create detailed wireframes, user interfaces, and system
                architecture. This stage focuses on crafting user-friendly
                layouts and developing technical blueprints to ensure the
                solution is both functional and visually appealing.
              </p>
            </div>
            <div className="process-card">
              <a className="social-icon purple">
                <FontAwesomeIcon icon={faLaptop} />
              </a>
              <h3>4. Launch</h3>
              <p>
                I deploy the final product after thorough testing to ensure
                stability and performance. This step includes making the
                solution available to users, monitoring for issues, and
                gathering feedback for future improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio" id="projects">
        <div className="portfolio-container">
          <h2 className="portfolio-title">Featured Projects</h2>
          <div className="portfolio-grid">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                onClick={() => openModal(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {showModal && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}

      <section className="contact" id="contact">
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-card">
              <h4>Address</h4>
              <p>House#4 Street#20 Kurri Road Rawalpindi</p>
            </div>
            <div className="contact-card">
              <h4>Email</h4>
              <p>Abdullahshakir226@gmail.com</p>
            </div>
            <div className="contact-card">
              <h4>Phone</h4>
              <p>+923128003333</p>
            </div>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn-primary">
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
