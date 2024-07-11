
import "./ExerciseInstruction.css";
import { FcDebian } from "react-icons/fc";


const ExerciseInstruction = ({comments,setNewComments,
}) => {
  const handlechangeComment = (e) => {
    setNewComments(e.target.value);
  };

  return (
    <>
      <div className="comments">
       
      </div>

      {comments?.map((comment, index) => {
        return (
          <section className="newcomments" key={index}>
         
            <FcDebian className="newcomments__pic"></FcDebian>
            <div className="newcomments__contents">
              <div className="newcomments__contents--namedate">
                <h5 className="newcomments__contents--namedate--author">
                  {comment.name}
                </h5>
                {/* <p className="newcomments__contents--namedate--date">
                  {convertDateformat(comment.timestamp)}
                </p> */}
              </div>

              <p className="newcomments__contents--namedate--text">
                {comment.comment}
              </p>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default ExerciseInstruction;
