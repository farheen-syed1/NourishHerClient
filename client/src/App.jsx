import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './Pages/Home/Home'

import Navbar from './Components/Header/Header';




function App() {
  const [nextvideoDetails, setNextVideoDetails] = useState();
  const [videoData, setVideoData] = useState([]);

  return (
    <>
    <Navbar/>
     <Home/>
  
    </>
  )
}

export default App
