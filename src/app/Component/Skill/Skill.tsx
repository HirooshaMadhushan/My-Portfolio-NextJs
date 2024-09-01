import React from 'react';


function Card({ icon, title, description }) {
  return (
    <div className='bg-slate-800 text-white rounded-lg p-6 shadow-lg w-84'>
      <div className='flex justify-center mb-4'>
        <span className='text-4xl text-teal-400'>{icon}</span>
      </div>
      <h2 className='text-2xl font-semibold text-center mb-2'>{title}</h2>
      <p className='text-center text-gray-400 mb-4'>
        {description}
      </p>
      
      </div>
    
  );
}

export default Card;
