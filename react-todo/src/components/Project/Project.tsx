import React from 'react';
import  './Project.scss';

interface IProject {
    name: string;
  }
function Project(props:IProject) {
  return (
    <div className='projectWrapper'>
     <p className='projectName'>{props.name}</p>
    </div>
  );
}

export default Project;