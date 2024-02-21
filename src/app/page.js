"use client"
import React, { useEffect } from 'react'
import B3 from './b3'
import B10 from './b10'
import B11 from './b11'
import Typewriter from 'typewriter-effect/dist/core';
function page() {
//   useEffect(() => {
//    new Typewriter('#typewriter', {
//     strings: ['HELLO GUYz Welcome In Captivating Creation', 'World'],
//     autoStart: true,
//     loop : true
//   })

// })
{/* <h1 id = 'typewriter' className=' flex align-middle justify-center text-white '>   </h1> */}

  return (
    <div className=' relative bg-black w-screen h-screen  flex flex-col'>

   
   <div className='absolute'>

    <B10 />  //white
  
    
      </div> 
     
     <B3 /> orange
        <div className=' absolute  flex-shrink-0 '>
          
         <B11/> //blue
        </div>
    </div>
  )
}

export default page
