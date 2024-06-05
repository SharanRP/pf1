import React, { useState } from 'react';
import { BsDownload } from "react-icons/bs";
import pdf from "../Resume.pdf";
import { useEffect } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;


const Resume = () => {
  const[wid, setwid]=useState(window.innerWidth);

  const[Loading,SetLoading]=useState(true);

  useEffect(()=>{
    SetLoading(true)

    setTimeout(()=>{
    SetLoading(false)}
    ,1200)
  },[])  

  const handleResize=()=>{
    setwid(window.innerWidth);
  }

  window.addEventListener("load", handleResize);
  window.addEventListener("resize", handleResize);

  // {Loading ? (
  //   <div className="loader"> 
  //     <HashLoader
  //       color={'#007878'}
  //       loading={true}
  //       size={100}
  //       aria-label="Loading Spinner"
  //       data-testid="loader"
  //     />
  //   </div>
  //   ):
  // <div></div>}

  return (

    
    <div className='ResumePage'>

{/* {Loading ? (
    <div className="loader"> 
    <div style={{ width: wid < 700 ? (wid > 475 ? 0.7 : 0.5) : 1 , border:'2px' , borderColor:'#007878' , margin:'auto'}}>
      <HashLoader
        color={'#007878'}
        loading={true}
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
    </div>
    ):
  <div>
     <Document file={pdf} className="resumeview">
          <Page pageNumber= {1} scale={wid<700 ? ( wid>475? 0.7: 0.5): 1}/>
      </Document> */}
    {/* </div>} */}
       <Document file={pdf} className="resumeview">
           <Page pageNumber= {1} scale={wid<700 ? ( wid>475? 0.7: 0.5): 1}/>
       </Document>

      <a href={pdf} target='_blank' download="Devansh's Resume">
        <button className='downloadCV' type='button'>
          <h3><BsDownload/>&nbsp; Download CV</h3>
        </button>
      </a>

    </div>
  )
}

export default Resume