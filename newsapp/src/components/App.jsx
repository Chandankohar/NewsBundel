
import React, {useState} from 'react'
import Navbar from './Navbar'
import NewsComponent  from './NewsComponent'
import { Routes,Route } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
const App=()=>{
const [State,setState]=useState({progress:0})
    
  
const setProgress=(progress)=>{
setState({progress:progress})
  }
const apiKey='pub_446443335b2d3e649706d337e050e7b41573f'
  
    return (
      <div>
        <LoadingBar
        color='#f11946'
        progress={State.progress}
        
      />
        <Navbar/>
        
          <Routes>
            <Route exact path='/' element={<NewsComponent apiKey={apiKey} setprogress={setProgress} key='latest' category=''/>}/>
            <Route exact path='/education' element={<NewsComponent apiKey={apiKey} setprogress={setProgress}  key='education' category='education'/>}/>
            <Route exact path='/entertainment' element={<NewsComponent apiKey={apiKey} setprogress={setProgress} key='entertainment' category='entertainment'/>}/>
            <Route exact path='/science' element={<NewsComponent apiKey={apiKey} setprogress={setProgress} key='science' category='science'/>}/>
            <Route exact path='/politics' element={<NewsComponent apiKey={apiKey} setprogress={setProgress} key='politics' category='politics'/>}/>
            <Route exact path='/sports' element={<NewsComponent apiKey={apiKey} setprogress={setProgress} key='sports' category='sports'/>}/>
            <Route exact path='/technology' element={<NewsComponent apiKey={apiKey} setprogress={setProgress} key='technology' category='technology'/>}/>
            <Route exact path='/tourism' element={<NewsComponent apiKey={apiKey} setprogress={setProgress} key='tourism' category='tourism'/>}/>
            <Route exact path='/environment' element={<NewsComponent apiKey={apiKey} setprogress={setProgress} key='environment' category='environment'/>}/>
            <Route exact path='/business' element={<NewsComponent apiKey={apiKey} setprogress={setProgress} key='business' category='business'/>}/>
            <Route exact path='/health' element={<NewsComponent apiKey={apiKey} setprogress={setProgress} key='health' category='health'/>}/>
          </Routes>
       
          
      </div>
    )
  }

export default App
