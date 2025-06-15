// Import React's useState hook and the component styles
import { useState } from "react"; // make sure this is at the top!
import "../styles/Home.css";

// ProjectCard component receives a project object and onClick handler as props
export const ProjectCard = ({ project, onClick }) => {
  // State to track the current index of the displayed image in the carousel
  const [currentIndex, setCurrentIndex] = useState(0);

  // Show the previous image in the carousel
  const showPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  // Show the next image in the carousel
  const showNext = () => {
    setCurrentIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    // Main card container; clicking it triggers the onClick handler to open modal
    <div className="portfolio-card" onClick={onClick}>
      {/* Carousel section showing one image at a time */}
      <div className="carousel">
        <img
          src={project.images[currentIndex]} // Display image based on current index
          alt={`${project.title} image`}
          className="carousel-img"
        />

        {/* Show navigation buttons only if there's more than one image */}
        {project.images.length > 1 && (
          <>
            {/* Previous image button */}
            <button className="carousel-btn left" onClick={showPrev}>
              &#8592;
            </button>

            {/* Next image button */}
            <button className="carousel-btn right" onClick={showNext}>
              &#8594;
            </button>
          </>
        )}
      </div>

      {/* Project title and description below the image carousel */}
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
};
