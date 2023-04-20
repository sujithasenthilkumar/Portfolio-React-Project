

import React, { useState } from 'react';
import Projectlist from './Projectlist';
import Footer from './Footer';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import TwitterIcon from '@mui/icons-material/Twitter';
function Project() {
  const [projects, setProjects] = useState([]);

  const addProject = (project) => {
    setProjects([...projects, project]);
  };
  const deleteProject = (index) => {
    const newProjects = [...projects];
    newProjects.splice(index, 1);
    setProjects(newProjects);
  };
  return (
    <div className='project' >
      <Projectlist addProject={addProject} />
      {projects.map((project, index) => (
        <div key={index}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <a href={project.githubLink}>{project.githubLink}</a>
          <button onClick={() => deleteProject(index)}>Delete</button>
          <Footer/>
          {/* <footer style={{marginTop:"12%"}}>
<p>
  <a href="hhtps://www.instagram.com/" target="_blank" rel="nooper noreferrer">
    <InstagramIcon icon={InstagramIcon} style={{marginLeft:"10px",color:"white"}}/>
  </a>
  <a href="hhtps://www.twitter.com/" target="_blank" rel="nooper noreferrer">
    <TwitterIcon icon={TwitterIcon} style={{marginLeft:"10px",color:"white"}}/>
  </a>
</p>
          </footer> */}
        </div>
      ))}
      
    </div>
  );
}
export default Project;