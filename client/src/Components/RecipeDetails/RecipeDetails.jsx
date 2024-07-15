
import view from "../../assets/views.svg";
import like from "../../assets/likes.svg";
import { IoTimerOutline } from "react-icons/io5";
import "./RecipeDetails.css";

function RecipeDetails({
  channel,
  views,
  likes,
  description
}) {

  return (
    <>
      <section className="hero__container--left--author">
       
        <div className="hero__container--left--author--preview">
          <span>
            {" "}
       
            <IoTimerOutline />
          
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

export default RecipeDetails;