
import view from "../../assets/views.svg";
import like from "../../assets/likes.svg";

import "./ExerciseDetails.css";

function ExerciseDetails({
  channel,
  views,
  likes,
  description
}) {

  return (
    <>
      <section className="hero__container--left--author">
        <div className="hero__container--left--author--name">
          <h5>By {channel}</h5>
      
        </div>
        <div className="hero__container--left--author--preview">
          <span>
            {" "}
            <img src={view} alt=" views_icons" />
          
            {views}
          </span>
          <span>
            {" "}
            <img src={like} alt=" views_icons" />
            {likes}
          </span>
        </div>
      </section>
      <section className="hero__container--left--para">
        <p>{description}</p>
      </section>
    </>
  );
}

export default ExerciseDetails;
