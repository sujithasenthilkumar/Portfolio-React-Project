import React from 'react'
import Hi from "./Hi.jpeg";
import Face2Icon from '@mui/icons-material/Face2';
import SchoolIcon from '@mui/icons-material/School';
import BrushIcon from '@mui/icons-material/Brush';
import EmailIcon from '@mui/icons-material/Email';
export default function Self() {
  return (
    <div className='hma'>
    <h1 className='title'><b>Self :</b></h1>
    <div style={{display:'flex',flexDirection:'row'}}>
      <div style={{display:'flex',justifyContent:'center',width:"50%"}}>

    <img src={Hi} style={{height:"400px",width:"300px"}} />
      </div>
    <br></br>
    <div>
      
    <div style={{border:"5px solid black",top:"10%",right:"0%",padding:"2%",width:"400px",marginTop:"-10%",marginRight:"50%"}}>
    <h4><b> <p><Face2Icon/><spam> </spam>
    NAME: Sujitha<br></br></p>
    <p>
    <SchoolIcon/><span> </span>
    SCHOOL: Govt Hr. Sec. School
    </p>
    <p>
    <SchoolIcon/><span> </span>
    COLLEGE: Sri Krishna College of Engineering and Technology
    </p>
    <p>
    <BrushIcon/><span> </span>
    HOBBIE: Drawing
    </p>
    <p>
    <EmailIcon/><span> </span>
    Sujithasenthilkumar21@gmail.com
    </p>
    </b></h4></div>
    </div>
    </div>
    </div>
  )
}