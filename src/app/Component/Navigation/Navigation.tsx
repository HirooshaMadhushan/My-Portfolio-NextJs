import React from 'react';
import Link from 'next/link';

export default function Navigation() {
  return (
    <div className='bg-slate-950 fixed top-0 w-full z-50'> {/* Fixed positioning with custom classes */}
      <div className='flex justify-between container mx-auto pr-10 py-5'> {/* Right padding and vertical padding */}
        {/* Portfolio title, hidden on smaller screens */}
        <div className='hidden sm:block text-3xl text-white'>Portfolio</div>
        
        {/* Links section */}
        <div className='flex gap-28 pr-11'>
          <Link className="portfolio font-bold text-xl text-white hover:text-cyan-500" href="#Navigation">Home</Link>
          <Link className="portfolio font-bold text-xl text-white hover:text-cyan-500" href="#Aboutme">About Me</Link>
          <Link className="portfolio font-bold text-xl text-white hover:text-cyan-500" href="#Mainskill">Skills</Link>
          <Link className="portfolio font-bold text-xl text-white hover:text-cyan-500" href="#Contactme">Contact Me</Link>
        </div>
      </div>
    </div>
  );
}
