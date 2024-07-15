
import "./RecipeInstruction.css";
import { PiCookingPotDuotone } from "react-icons/pi";

const RecipeInstruction = ({ingredients,setNewComments,
}) => {
  const handlechangeComment = (e) => {
    setNewComments(e.target.value);
  };

  return (
    <>
      <div className="line">
       
      </div>

      {ingredients?.map((ingredients, index) => {
        return (
          <section className="recipe" key={index}>
         
            <PiCookingPotDuotone className="recipe__pic"></PiCookingPotDuotone>
            <div className="recipe__contents">
              <div className="recipe__contents--namedate">
                <h5 className="recipe__contents--namedate--author">
                  {ingredients.name}
                </h5>
              
              </div>

              <p className="recipe__contents--namedate--text">
                {ingredients.explain}
              </p>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default RecipeInstruction;
