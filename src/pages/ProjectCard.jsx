import { useState } from "react"; // make sure this is at the top!
import "../styles/Home.css";

export const ProjectCard = ({ project, onClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const showNext = () => {
    setCurrentIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="portfolio-card" onClick={onClick}>
      <div className="carousel">
        <img
          src={project.images[currentIndex]}
          alt={`${project.title} image`}
          className="carousel-img"
        />
        {project.images.length > 1 && (
          <>
            <button className="carousel-btn left" onClick={showPrev}>
              &#8592;
            </button>
            <button className="carousel-btn right" onClick={showNext}>
              &#8594;
            </button>
          </>
        )}
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
};
