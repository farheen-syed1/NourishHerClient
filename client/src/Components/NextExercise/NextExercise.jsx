
import "./NextExercise.css";

const NextExercise = ({ id, handleChangeData, filteredData }) => {
  return (
    <section className="nextvideo">
      <h5>NEXT EXERCISE</h5>
      {filteredData
      .filter((e)=>e.id !== id)
      ?.map((Next, index) => {
        return (
          <div className="nextvideo__card" key={index + 1}>
            <div
              className="nextvideo__card--image"
              onClick={() => {
                handleChangeData(Next.id);
              }}
            >
              <img src={Next?.image} alt="next_video" />
           
            </div>
            <div className="nextvideo__card--details">
              <h4 className="nextvideo__card--details--title">{Next?.title}</h4>
              <p className="nextvideo__card--details--author">
                {Next?.channel}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default NextExercise;
