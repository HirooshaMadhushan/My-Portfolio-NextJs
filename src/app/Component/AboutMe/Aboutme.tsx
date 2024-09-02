"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Typed from 'typed.js'; // Import Typed.js

function MyComponent() {
  const typedElement = useRef(null); // Create a ref for the typing animation

  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(typedElement.current, {
      strings: ["I'm a Full Stack Developer"], // Text to type
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
      <div className="container flex justify-between gap-28 bg-Slate-700">
        <div className="p-10">
          <Image src="/my1.png" alt="Description of image" width={700} height={500} className='p-none' />
        </div>
        <div className='container py-24 justify-end'>
          <div className='flex gap-5 '>
            <h1 className='text-5xl font-bold'>About</h1>
            <h1 className='text-cyan-500 text-5xl font-black'>Me</h1>
          </div>

          <div className='container py-5'>
            <h1 className='text-2xl font-bold'>
              <span ref={typedElement} /> {/* The ref where the typing animation will appear */}
            </h1>
          </div>
          <div className='container py-5 '>
            <h1 className='text-lg pr-16'>
              I am a full-stack developer and an undergraduate student at the University of Moratuwa, currently pursuing a degree in Information Technology and Management. I have a strong passion for building efficient and scalable web applications, leveraging my skills in both front-end and back-end development.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
