import React from 'react'
import Link from 'next/link'

export default function Navigation() {
  return (
    <div className='bg-slate-950'>
    <div className='flex  justify-between container p-10 '>
    <div className='hidden sm:block text-3xl'>Portfolio</div>
        <div className='flex gap-28 6'>
            <Link className="portfolio font-bold text-xl" href="/dashboard">Home</Link>
            <Link  className="portfolio font-bold text-xl" href="/dashboard">About me</Link>
            <Link className="portfolio font-bold text-xl" href="/dashboard">Skills</Link>
            <Link className="portfolio font-bold text-xl" href="/dashboard">Contact Me</Link>
        </div>
    </div>
    </div>

  )
}
