import { useState, useEffect } from "react";
import "./Exercise.css";

import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import ExerciseInstruction from "../../Components/ExerciseInstruction/ExerciseInstruction.jsx";
import NextExercise from "../../Components/NextExercise/NextExercise.jsx";
import ExerciseDetails from "../../Components/ExerciseDetails/ExerciseDetails.jsx";


const Exercise = ({
  exerciseDetails,
  setExerciseDetails,
  exerciseData,
  setExerciseData,
}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(false);

  const getVideoDetails = async (id) => {
    try {
      const res = await axios.get(`http://localhost:8080/exercise/${id}`);
      return res.data;
    } catch (error) {
      console.log("Error fetching video details:", error);
      return null;
    }
  };

  const getNextVideo = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/exercise`);
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
      const videolist = exerciseData.filter((video) => video.id !== id);
      videolist.push(videoDetailData);

      setExerciseDetails(videoDetailData);
      setExerciseData(videolist);
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

        setExerciseDetails(videoDetailsData);
        setExerciseData(datafilter);

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
    if (!exerciseData.length) {
      initialFetch();
    }
  }, []);

  useEffect(() => {
    if (id) {
      fetchVideoDetail(id);
    }
  }, [id]);

  const handleChangeData = async (idData) => {
    navigate(`/exercise/${idData}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <main className="exercise">
        <div className="exercise_upper">
          <figure className="exercise__img">
            <video poster={exerciseDetails?.image}>
              <source src={exerciseDetails?.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </figure>
          <div className="exercise__container--right">
            <NextExercise
              id={exerciseDetails?.id}
              filteredData={exerciseData}
              handleChangeData={handleChangeData}
            />
          </div>
        </div>

        <section className="exercise__container">
          <article className="exercise__container--left">
            <h1>{exerciseDetails?.title}</h1>
            <ExerciseDetails
              channel={exerciseDetails?.club}
              views={exerciseDetails?.views}
              likes={exerciseDetails?.likes}
              description={exerciseDetails?.description}
            />

            <ExerciseInstruction
              instructions={exerciseDetails?.instructions}
              newcomments={newComment}
              setNewComments={setNewComment}
            />
          </article>
        </section>
      </main>
    </>
  );
};

export default Exercise;
