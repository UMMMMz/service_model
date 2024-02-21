'use client'
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
function B10() {
  const svgRef = useRef(null);
    useEffect(() => {
        const tl = gsap.timeline({ repeat: Infinity}); // Loop indefinitely
        // GSAP animation to move the SVG towards the left smoothly
        tl.to(svgRef.current, {
          x: 200, // Move 100 units towards the left
          duration: 6, // Animation duration in seconds
          ease: "power2.inOut", 
        
          // Easing function for smooth motion
        });
        tl.from(svgRef.current ,{
          x: 0 ,
          duration: 6, 
          // Animation duration in seconds
          ease: "power2.inOut",
          yoyoEase: true  , 
    
        })
          
    }, []); // Empty dependency array ensures this effect runs only once after initial render
  
  return (

    <svg
    ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      width="1370"
      height="466"
      fill="#FFF"
      viewBox="0 0 1370 466"
    >
      <path
        fill="#FFF"
        fillRule="evenodd"
        d="M1370 362V207H938v155H506V155H74V0h-432v466h1728V362z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default B10;