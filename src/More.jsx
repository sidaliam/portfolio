
import { useParams } from "react-router-dom";
import { useState } from "react";

import "./More.css";


const More = ({ myProjects }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  let { projectId } = useParams();

  // Filtrer les détails de l'élément correspondant
  const project = myProjects.find((item) => item.projecttitle === projectId);
  return (
    <div>
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <h1 className="hotelTitle">{project.projecttitle}</h1>
          <div className="hotelAddress">
            <span>{project.category}</span>
          </div>
          <div className="icon-github" />
          <a href={project.linkgit}>
            {" "}
            <p style={{ color: "green" }}>{project.linkgit}</p>
          </a>

          <br />

          <span className="hotelPriceHighlight">{project.description2}</span>
          <div className="hotelImages">
            {project.images?.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img src={photo} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default More;
