import React, { useState } from 'react';

function Projectlist({ addProject }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [githubLink, setGithubLink] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const project = {
      name,
      description,
      githubLink,
    };
    addProject(project);
    setName('');
    setDescription('');
    setGithubLink('');
  };

  return (
    <div className='project'>
    <form onSubmit={handleSubmit}>
      <label className='label'>Project Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label className='label'>Project Description:</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label className='label'>GitHub Link:</label>
      <input
        type="text"
        id="githubLink"
        value={githubLink}
        onChange={(e) => setGithubLink(e.target.value)}
      />
      <button type="submit">Add Project</button>
    </form>
    </div>
  );
}
export default Projectlist;