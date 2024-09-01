import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function MyComponent() {
  return (
    <div className='bg-slate-900 '>
        <div className="container flex justify-between gap-28 bg-Slate-700">
            <div className="p-10">
                <Image src="/my1.png" alt="Description of image" width={400} height={400} className=' rounded-full border-blue-300' />
            </div>
            <div className=' container py-24 justify-end'>
                <div className='flex gap-5 '>
                <h1 className=' text-5xl font-bold'>About</h1>
                <h1 className='text-cyan-500 text-5xl font-black'>Me</h1>
            </div>

            <div className='container py-5'>
                <h1 className='text-2xl font-bold'>I'm Full Stack Developer</h1>
            </div>
            <div className='container py-5 '>
                <h1 className=' text-lg  pr-16 '>I am a full-stack developer and an undergraduate student at the University of Moratuwa, currently pursuing a degree in Information Technology and Management. I have a strong passion for building efficient and scalable web applications, leveraging my skills in both front-end and back-end development.</h1>
            
            </div>
            
            </div>
            
        </div>
        
    </div>
  );
}

export default MyComponent;

