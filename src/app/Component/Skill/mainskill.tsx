import React from 'react'
import Card from './Skill';
import { MdDesignServices } from "react-icons/md";
import { MdOutlineMobileFriendly } from "react-icons/md";

function mainskill() {
  return (
    
        <div className='bg-slate-950 pb-16'>
    <div className='flex  justify-between container p-10 '>
    <div className=' container  '>
                <div className='flex gap-5 justify-center '>
                <h1 className=' text-5xl font-bold'>My</h1>
                <h1 className='text-cyan-500 text-5xl font-black'>Skills</h1>
            </div>
            </div>
    
    </div>
    <div className='flex container justify-between gap-10 pl-10 pr-10'>
        <Card
        icon={"< />"}
        title={"Web Development"}
        description={"Web Developer skilled in both frontend and backend technologies, including React, Next.js, Node.js, Express.js, and NestJS. Experienced in building dynamic and responsive web applications, with a strong focus on creating efficient and scalable solutions. "}
       
      />

<Card
        icon={<MdDesignServices />}
        title={"Ui/Ux & Graphic Design"}
        description={"Graphic Designer skilled in creating visually compelling designs using Figma and Adobe Photoshop. Experienced in developing engaging user interfaces, digital illustrations, and branding assets that enhance user experience and visual communication."}
       
      />


<Card 
        icon={<MdOutlineMobileFriendly />}
        title={"Mobile Application"}
        description={"Mobile Application Developer proficient in creating cross-platform and native mobile applications using React Native and Android Studio. Skilled in building intuitive and high-performance apps that deliver seamless user experiences across both iOS and Android platforms. "}
        
      />
    </div>
    </div>
  )
}

export default mainskill