import React from 'react'

const Client = () => {
  return (
    <section id='client' className='pt-36 pb-16 bg-slate-700'>
        <div className="container">
            <div className="w-full px-4">
                <div className="max-w-xl mx-auto text-center mb-16">
                <h4 className='semi-bold text-lg text-primary uppercase'>Partner</h4>
                <h2 className='font-bold text-white text-2xl mb-4 sm:text-4xl lg:text-4xl'>Our Clients</h2>
                </div>
            </div>
            <div className="w-full px-4">
                <div className="flex flex-wrap items-center justify-center">
                    <a href="#" target="_blank" rel="noopener noreferrer" className='max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/97/Logo_PLN.png" alt=""/>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className='max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'>
                    <img src="https://www.polsri.ac.id/files/2011/01/logo-polsri.png" alt=""/>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className='max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'>
                    <img src="https://ini-ippat-jatim.or.id/wp-content/uploads/2021/03/ms-icon-310x310-1.png" alt=""/>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className='max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'>
                    <img src="https://sinergivisiutama.com/assets/img/sinergi.jpg" alt=""/>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Client