
import "./ExerciseInstruction.css";
import { FcDebian } from "react-icons/fc";



const ExerciseInstruction = ({instructions,setNewComments,
}) => {
  const handlechangeComment = (e) => {
    setNewComments(e.target.value);
  };

  return (
    <>
      <div className="comments">
       
      </div>

      {instructions?.map((instruction, index) => {
        return (
          <section className="newcomments" key={index}>
    
         
            <FcDebian className="newcomments__pic"></FcDebian>
            <div className="newcomments__contents">
              <div className="newcomments__contents--namedate">
                <h5 className="newcomments__contents--namedate--author">
                  {instruction.name}
                </h5>
              
              </div>

              <p className="newcomments__contents--namedate--text">
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
