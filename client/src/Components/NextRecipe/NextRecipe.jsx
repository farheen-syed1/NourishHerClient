
import "./NextRecipe.css";

const NextRecipe = ({ id, handleChangeData, filteredData }) => {
  return (
    <section className="nextrecipe">
      <h5>NEXT RECIPE</h5>
      {filteredData
      .filter((e)=>e.id !== id)
      ?.map((Next, index) => {
        return (
          <div className="nextrecipe__card" key={index + 1}>
            <div
              className="nextrecipe__card--image"
              onClick={() => {
                handleChangeData(Next.id);
              }}
            >
              <img src={Next?.image} alt="next_video" />
           
            </div>
            <div className="nextrecipe__card--details">
              <h4 className="nextrecipe__card--details--title">{Next?.title}</h4>
              {/* <p className="nextrecipe__card--details--author">
                {Next?.name}
              </p> */}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default NextRecipe;
