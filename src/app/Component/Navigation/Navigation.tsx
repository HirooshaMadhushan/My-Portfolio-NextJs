import React from 'react';
import Link from 'next/link';

export default function Navigation() {
  return (
    <div className='bg-slate-950 sticky top-0 z-50'> {/* Add sticky and z-index */}
      <div className='flex justify-between container p-10'>
        <div className='hidden sm:block text-3xl'>Portfolio</div>
        <div className='flex gap-28'>
          <Link className="portfolio font-bold text-xl text-white hover:text-cyan-500" href="#Navigation">Home</Link>
          <Link className="portfolio font-bold text-xl text-white hover:text-cyan-500" href="#Aboutme">About me</Link>
          <Link className="portfolio font-bold text-xl text-white hover:text-cyan-500" href="#Mainskill">Skills</Link>
          <Link className="portfolio font-bold text-xl text-white hover:text-cyan-500" href="#Contactme">Contact Me</Link>
        </div>
      </div>
    </div>
  );
}
