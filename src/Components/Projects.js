import React from 'react';
import ProjectBox from './ProjectBox';
import UniHubImage from '../images/uniHub.png';
import VisualFlowImage from '../images/visualFlow.png';
import Legal_Assistant from '../images/Legal_Assistant.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={UniHubImage} projectName="UniHub" />
        <ProjectBox projectPhoto={VisualFlowImage} projectName="VisualFlow" />
        <ProjectBox projectPhoto={Legal_Assistant} projectName="Legal_Assistant"/>
      </div>

    </div>
  )
}

export default Projects