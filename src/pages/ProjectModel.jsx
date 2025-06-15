// Import necessary modules and styles
import React, { useState } from "react";
import "../styles/Home.css";

// ProjectModal component receives project data and a close handler as props
const ProjectModal = ({ project, onClose }) => {
  // State to track the current image index for the slider
  const [currentIndex, setCurrentIndex] = useState(0);

  // If no project is selected, don't render the modal
  if (!project) return null;

  // Move to the next image in the array or loop back to the first image
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Move to the previous image in the array or loop to the last image
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  return (
    // Overlay that covers the screen and closes the modal when clicked
    <div className="modal-overlay" onClick={onClose}>
      {/* Modal content box; click event is stopped to prevent overlay click from closing it */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close button (× symbol) */}
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>

        {/* Project title and description */}
        <h2>{project.title}</h2>
        <p>{project.description}</p>

        {/* Image slider shown only if images are available */}
        {project.images.length > 0 && (
          <div className="modal-image-slider">
            {/* Left arrow button for previous image */}
            <button className="slider-arrow left" onClick={handlePrev}>
              &#8592;
            </button>

            {/* Current image display */}
            <img
              src={project.images[currentIndex]}
              alt={`${project.title} ${currentIndex + 1}`}
              className="slider-image"
            />

            {/* Right arrow button for next image */}
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
