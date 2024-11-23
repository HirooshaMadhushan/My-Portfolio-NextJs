"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Typed from 'typed.js'; // Import Typed.js
import type { MutableRefObject } from 'react'; // TypeScript for useRef

function MyComponent(): JSX.Element {
  const typedElement: MutableRefObject<HTMLSpanElement | null> = useRef(null); // Typed.js ref with TypeScript

  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(typedElement.current!, {
      strings: ["I'm a Full Stack Developer", "Creative Thinker", "Problem Solver"], // Text to type
      typeSpeed: 50, // Speed of typing
      backSpeed: 25, // Speed of backspacing
      backDelay: 1000, // Delay before starting to backspace
      startDelay: 500, // Delay before starting typing
      loop: true // Loop the animation
    });

    // Cleanup on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='bg-slate-900'>
      <div className="container flex justify-between items-center gap-16 py-20 px-10 bg-slate-800 rounded-lg shadow-lg">
        {/* Image Section with Glassmorphism Effect */}
        <div className="relative w-[50%] bg-gradient-to-tr from-blue-500 to-purple-800 rounded-lg overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-md"></div> {/* Glass Effect */}
          <Image src="/my1.png" alt="Description of image" width={700} height={500} className='relative z-10 rounded-lg shadow-md' />
          {/* Decorative Shapes */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500 rounded-full opacity-30"></div>
          <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-blue-800 rounded-full opacity-30"></div>
        </div>

        {/* Text Section */}
        <div className='flex flex-col w-[50%]'>
          {/* About Me Section */}
          <div className='flex items-end gap-5 mb-8'>
            <h1 className='text-6xl font-bold text-white'>About</h1>
            <h1 className='text-6xl font-black text-cyan-400'>Me</h1>
          </div>

          {/* Typing Effect */}
          <div className='mb-8'>
            <h2 className='text-3xl font-semibold text-white'>
              <span ref={typedElement} /> {/* The ref where the typing animation will appear */}
            </h2>
          </div>

          {/* Description Section */}
          <div className='bg-white/10 p-6 rounded-lg shadow-lg backdrop-blur-sm'>
            <p className='text-lg text-gray-300 leading-relaxed'>
              I am a full-stack developer and an undergraduate student at the University of Moratuwa, currently pursuing a degree in Information Technology and Management. 
              I have a strong passion for building efficient and scalable web applications, leveraging my skills in both front-end and back-end development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
