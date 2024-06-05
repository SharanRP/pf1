import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    UniHubDesc:"Unishare is a platform designed to enrich the student experience by fostering connectivity, communication, and collaboration.Unishare serves as a multifaceted hub that goes beyond conventional social networks, offering a suite of features to enhance academic and social interactions.",
    UniHubrGithub:"https://github.com/SharanRP/Unishare_Campus",
    UniHubWebsite:"https://github.com/SharanRP/Unishare_Campus",

    VisualFlowDesc : "VisualFlow is a versatile platform that simplifies the process of creating flowcharts by offering an intuitive and user-friendly interface and generate code for the created flowchart",
    VisualFlowGithub : "https://github.com/SharanRP/VisualFlow",
    VisualFlowWebsite : "https://github.com/SharanRP/VisualFlow/",

    Legal_AssistantDesc:"Our AI assistant can perform high-level searches to help users find the most relevant information ,also it churns out advice bespoke to the legal profession. Our AI-based legal assistant analyzes case law, gives sharp summaries with valuable insight, and provides tactical guidance for stronger legal arguments.",
    Legal_AssistantlGithub:"https://github.com/SharanRP/legal_assistant",
    Legal_AssistantWebsite:"https://legal-assistant-sigma.vercel.app",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox