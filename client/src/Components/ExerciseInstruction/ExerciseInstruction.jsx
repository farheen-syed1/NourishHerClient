import "./ExerciseInstruction.css";
import { FcDebian } from "react-icons/fc";

const ExerciseInstruction = ({ instructions, setNewComments }) => {
  const handleChangeComment = (e) => {
    setNewComments(e.target.value);
  };

  return (
    <>
      <div className="exercise-instruction__comments"></div>

      {instructions?.map((instruction, index) => {
        return (
          <section className="exercise-instruction__comment" key={index}>
            <FcDebian className="exercise-instruction__comment-pic" />
            <div className="exercise-instruction__comment-content">
              <div className="exercise-instruction__comment-header">
                <h5 className="exercise-instruction__comment-author">
                  {instruction.name}
                </h5>
              </div>
              <p className="exercise-instruction__comment-text">
                {instruction.guide}
              </p>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default ExerciseInstruction;
