import React from 'react';
import imgMe from './../../assets/img/me.png';

const Hero = () => {
  return (
    <section id='home' className='pt-36'>
        <div className="container">
            <div className="flex flex-wrap">
                <div className="w-full self-center px-4 lg:w-1/2 ">
                    <h1 className='text-base font-semibold text-primary md:text-xl lg:text-2xl'>Hi 👋 my name is <span className='block font-semibold text-dark text-4xl mt-1'>Muhammad Iqbal</span></h1>
                    <h2 className='font-medium text-secondary mb-5 text-lg'>i'am Frontend Engineer</h2>
                    <p className='font-medium text-secondary mb-10 leading-relaxed'>Do not know, then do not <span className='text-dark font-bold'> love! </span></p>
                    <a href="" className='text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 duration-300 ease-in-out'>Let's Talk</a>
                </div>
                <div className='w-full self-end px-4 lg:w-1/2'>
                  <div className='mt-10 relative lg:mt-9 lg:right-0'>
                    <img src={imgMe} alt="iqbal" className='max-w-full mx-auto'/>
                    <span className='absolute -top-10 -z-10 left-1/2 -translate-x-1/2 md:scale-125' >
                      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width={400} height={400}>
                        <path fill="#14b8a6" d="M20.8,-20.3C28.5,-13.1,37.5,-6.5,40.2,2.8C43,12,39.5,24.1,31.8,39.3C24.1,54.6,12,73,-2.3,75.3C-16.7,77.6,-33.4,63.9,-40.2,48.7C-47,33.4,-43.8,16.7,-42.8,1C-41.8,-14.8,-43.1,-29.6,-36.3,-36.8C-29.6,-44.1,-14.8,-43.7,-4.1,-39.6C6.5,-35.5,13.1,-27.6,20.8,-20.3Z" transform="translate(100 100) scale(1)" />
                      </svg>
                    </span>
                  </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero