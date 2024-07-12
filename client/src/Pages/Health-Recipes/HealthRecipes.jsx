import { useState, useEffect } from "react";
import "./HealthRecipes.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import RecipeInstruction from "../../Components/Recipe Instruction/RecipeInstruction.jsx";
import RecipeDetails from "../../Components/RecipeDetails/RecipeDetails.jsx";
import NextRecipe from "../../Components/NextRecipe/NextRecipe.jsx";



const HealthRecipes = ({

  recipeDetails,
  setRecipeDetails,
  recipeData,
  setRecipeData,
}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(false);

  const convertDateformat = (Eledate) => {
    const timeStamp = new Date(Eledate);
    return timeStamp.toLocaleDateString("en-Us", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const getVideoDetails = async (id) => {
    try {
      const res = await axios.get(`http://localhost:8080/recipe/${id}`);
      return res.data;
    } catch (error) {
      console.log("Error fetching video details:", error);
      return null;
    }
  };

  const getNextVideo = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/recipe`);
      return res.data;
    } catch (error) {
      console.log("Error fetching next videos:", error);
      return [];
    }
  };

  const fetchVideoDetail = async (id) => {
    setLoading(true);
    try {
      const videoDetailData = await getVideoDetails(id);
      const videolist = recipeData.filter((video) => video.id !== id);
      videolist.push(videoDetailData);

      setRecipeDetails(videoDetailData);
      setRecipeData(videolist);
    } catch (error) {
      console.log("Error fetching video details:", error);
    } finally {
      setLoading(false);
    }
  };

  const initialFetch = async () => {
    setLoading(true);
    try {
      const nextVideo = await getNextVideo();
      console.log(nextVideo, "nextVideo");
      if (nextVideo.length) {
        const videoDetailsData = await getVideoDetails(nextVideo[0].id);
        const datafilter = nextVideo.filter(
          (video) => video.id !== nextVideo[0].id
        );
        datafilter.push(videoDetailsData);

        setRecipeDetails(videoDetailsData);
        setRecipeData(datafilter);
    
        console.log(
          nextVideo.filter((video) => video.id !== nextVideo[0].id),
          "nexttt"
        );
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!recipeData.length) {
      initialFetch();
    }
  }, []);

  useEffect(() => {
    if (id) {
      fetchVideoDetail(id);
    }
  }, [id]);

  const handleChangeData = async (idData) => {
    navigate(`/health-recipes/${idData}`);
  };



  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="healthy">
      <figure className="healthy__img">
        <video controls poster={ recipeDetails?.image}>
          {/* <source src={ recipeDetails?.video} type="video/mp4" /> */}
          Your browser does not support the video tag.
        </video> 
   
      </figure>
      <section className="healthy__container">
        <article className="healthy__container--left">
          <h1>{ recipeDetails?.title}</h1>
          <RecipeDetails
            channel={ recipeDetails?.name}
            timeStamp={ recipeDetails?.timestamp}
            views={ recipeDetails?.views}
            likes={ recipeDetails?.likes}
            description={ recipeDetails?.description}
          
          />
        
          <RecipeInstruction
            comments={ recipeDetails?.comments}
            convertDateformat={convertDateformat}
          
            newcomments={newComment}
            setNewComments={setNewComment}
          />
        
        </article>

        <aside className="healthy__container--right">
          <NextRecipe
            id={ recipeDetails?.id}
            filteredData={recipeData}
            handleChangeData={handleChangeData}
          />
        
        </aside>
      </section>
    </main>
  );
};

export default HealthRecipes;
