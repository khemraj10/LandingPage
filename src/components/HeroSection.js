import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
    return (
      <div className='bg-[#043873] text-white flex flex-row justify-around px-40'>
        <div className='flex-1'>
          <h1 className='font-bold text-5xl pb-4'>Get More Done with whiteSpace</h1>
          <p className='text-xs font-thin mr-20 pb-10'>
            Project management software that enables your teams to collaborate, 
            plan, analyze and manage everyday tasks
          </p>
          
          <div>
            <button className='bg-[#588ff5] px-4 py-2 rounded'>
              Try WhiteSpace Free →
          </button>
        </div>
      </div>

      <div className='flex-1'>
        <Image 
          src=""
          alt="Project Management Dashboard"
          width={500}
          height={400}
          priority
        />
      </div>
    </div>
  );
};

export default HeroSection;