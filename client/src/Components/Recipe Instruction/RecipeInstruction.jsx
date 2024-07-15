
import "./RecipeInstruction.css";
import { FcDebian } from "react-icons/fc";
import { PiCookingPotDuotone } from "react-icons/pi";

const RecipeInstruction = ({comments,setNewComments,
}) => {
  const handlechangeComment = (e) => {
    setNewComments(e.target.value);
  };

  return (
    <>
      <div className="line">
       
      </div>

      {comments?.map((comment, index) => {
        return (
          <section className="recipe" key={index}>
         
            <PiCookingPotDuotone className="recipe__pic"></PiCookingPotDuotone>
            <div className="recipe__contents">
              <div className="recipe__contents--namedate">
                <h5 className="recipe__contents--namedate--author">
                  {comment.name}
                </h5>
                {/* <p className="recipe__contents--namedate--date">
                  {convertDateformat(comment.timestamp)}
                </p> */}
              </div>

              <p className="recipe__contents--namedate--text">
                {comment.comment}
              </p>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default RecipeInstruction;
