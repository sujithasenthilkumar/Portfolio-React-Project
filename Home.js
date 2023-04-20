import React from 'react'
import About from './About'
import { Route,Routes ,Link} from 'react-router-dom'
import Self from './Self'
import Contact from './Contact'
import Project from './Project.'

import Skills from './Skills';


export default function Home() {
  return (
    <div> 
   
    <div className='heading'>
    <h1><b>Hey there! <br></br>I'm Sujitha</b></h1>
    <br></br>
   
    <Link to="/self"><button className='btn btn-danger'>self</button></Link>
    <Link to="/Skills"><button className='btn btn-success'>Skills</button></Link>
    <Link to="/contact"><button className='btn btn-primary'>Contact</button></Link>
    <Link to="/about"><button className='btn  btn-warning'>About</button></Link>
    <Link to="/Project"
    ><button className='btn'>Project</button></Link>
    <br></br><br></br>
    <hr></hr>
   
    </div>
    <Routes>
   <Route path ='/Self' element={<Self/>} />
   <Route path ='/contact' element={<Contact/>} />
   <Route path ='/Project' element={<Project/>} />
   <Route path ='/Skills' element={<Skills/>} />
   <Route path ='/about' element={<About/>} />
    </Routes></div>
  
  )
}