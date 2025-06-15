import React, { useState } from "react";
import "../styles/Home.css";

const ProjectModal = ({ project, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!project) return null;

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2>{project.title}</h2>
        <p>{project.description}</p>

        {project.images.length > 0 && (
          <div className="modal-image-slider">
            <button className="slider-arrow left" onClick={handlePrev}>
              &#8592;
            </button>
            <img
              src={project.images[currentIndex]}
              alt={`${project.title} ${currentIndex + 1}`}
              className="slider-image"
            />
            <button className="slider-arrow right" onClick={handleNext}>
              &#8594;
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;
