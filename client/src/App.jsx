import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Header/Header';
import Bmi from './Pages/IBM/Bmi';
import Exercise from './Pages/Exercise/Exercise';



function App() {


  const [exerciseDetails, setExerciseDetails] = useState();
  const [exerciseData, setExerciseData] = useState([]);

  const [recipeDetails, setRecipeDetails] = useState();
  const [recipeData, setRecipeData] = useState([]);

  return (
    <>
    
    

    
    
      <BrowserRouter>
      
      <Navbar />
      <Routes>
   
        <Route path="/" element={<Home/>} />
        <Route path="/exercise"
          element={
            <Exercise
              exerciseDetails={exerciseDetails}
              setExerciseDetails={setExerciseDetails}
              exerciseData={exerciseData}
              setExerciseData={setExerciseData}
          
            />
          }
        />

        <Route path="/exercise/:id"
          element={
            <Exercise
            exerciseDetails={exerciseDetails}
              setExerciseDetails={setExerciseDetails}
              exerciseData={exerciseData}
              setExerciseData={setExerciseData}
            />
          }
        />
 {/*
<Route path="/health-recipes"
          element={
            <HealthRecipes
              recipeDetails={recipeDetails}
              setRecipeDetails={setRecipeDetails}
              recipeData={recipeData}
              setRecipeData={setRecipeData}
          
            />
          }
        />

        <Route path="/exercise/:id"
          element={
            <HealthRecipes
              recipeDetails={recipeDetails}
              setRecipeDetails={setRecipeDetails}
              recipeData={recipeData}
              setRecipeData={setRecipeData}
            />
          }
        /> */}




        <Route path="/bmi" element={<Bmi/>} />
     
      </Routes>
   
    </BrowserRouter>


    </>
  )
}

export default App
