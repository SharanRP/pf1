import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import {FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap} from "react-icons/fa";
import {DiNodejs, DiJavascript1} from "react-icons/di";
import { SiMysql } from "react-icons/si";
import {SiExpress, SiMongodb, SiPostman, SiVercel} from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiMariadb } from "react-icons/si";

const Skills = ({skill}) => {
    const icon = {
        'C++': <CgCPlusPlus/>,
        Postman: <SiPostman/>,
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        Node : <DiNodejs/>,
        Express : <SiExpress/>,
        MongoDb : <SiMongodb/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Npm : <FaNpm/>,
        Figma : <FaFigma/>,
        Tailwind:<SiTailwindcss />,
        Bootstrap: <FaBootstrap/>,
        Vercel : <SiVercel/>,
        Python:<FaPython/>,
        SQL:<SiMysql/>,
        MariaDB:<SiMariadb />,
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
