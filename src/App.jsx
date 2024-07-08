
import './App.css'
import React, { useState } from 'react'
import Navbar from './componants/Navbar'
import News from './componants/News'
import LoadingBar from 'react-top-loading-bar'
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";


const App=()=>{
  const pagesize=9
  const [progress,setProgress]=useState(0)
  
  setProgress(progress);
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
        
        <Routes>
         <Route exact path="/" element={<News setProgress={setProgress}  key="home" pagesize={pagesize} country="in" category="general"/>} />
         <Route exact path="/about" element={<News setProgress={setProgress}  key="about" pagesize={pagesize} country="in" category="general"/>} />
         <Route exact path="/business" element={<News setProgress={setProgress}  key="business" pagesize={pagesize} country="in" category="business"/>} />
         <Route exact path="/entertainment" element={<News setProgress={setProgress}  key="entertainment" pagesize={pagesize} country="in" category="entertainment"/>} />
         <Route exact path="/general" element={<News setProgress={setProgress}  key="general" pagesize={pagesize} country="in" category="general"/>} />
         <Route exact path="/health" element={<News setProgress={setProgress}  key="health" pagesize={pagesize} country="in" category="health"/>} />
         <Route exact path="/science" element={<News setProgress={setProgress}  key="science" pagesize={pagesize} country="in" category="science"/>} />
         <Route exact path="/sports" element={<News setProgress={setProgress}  key="sports" pagesize={pagesize} country="in" category="sports"/>} />
         <Route exact path="/technology" element={<News setProgress={setProgress}  key="technology" pagesize={pagesize} country="in" category="technology"/>} />
        </Routes>
        </Router>
      </div>
    )
  
}
export default App;



