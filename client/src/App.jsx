import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Header/Header';




function App() {
  const [nextvideoDetails, setNextVideoDetails] = useState();
  const [videoData, setVideoData] = useState([]);

  return (
    <>
    <Navbar/>
     <Home/>
  <Footer/>
    </>
  )
}

export default App
