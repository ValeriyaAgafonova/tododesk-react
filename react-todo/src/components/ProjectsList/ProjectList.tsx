import React from 'react';
import Project from '../Project/Project';
import  './ProjectList.scss';

const projects = ['project1', 'project2', 'project3'];
function ProjectList() {
  return (
    <div className='listWrapper'>
     <h2 className='listHeading'>My Projects</h2>
{projects.map(project => <Project name={project}/>)}
    </div>
  );
}

export default ProjectList;