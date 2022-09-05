import React from 'react'

const Blog = () => {
  return (
    <section id='blog' className='pt-36 pb-32'>
        <div className="container">
            <div className="w-full px-4">
                <div className="max-w-xl mx-auto text-center mb-16">
                <h4 className='semi-bold text-lg text-primary uppercase'>Blog</h4>
                <h2 className='font-bold text-dark text-3xl mb-4'>Recent Posts</h2>
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                        <img src="https://source.unsplash.com/360x200?programming" alt="Programming" className='w-full'/>
                        <div className="py-8 px-6">        
                            <h3><a href="" className='block mb-3 font-semibold text-xl text-dark hover:text-primary truncate'>
                            Tips Keamanan Jaringan Komputer</a></h3>
                            <p className='font-medium text-base text-secondary mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, omnis?</p>
                            <a href="#" className='font-medium bg-primary py-2 px-4 rounded-lg'>Read More..</a>
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                        <img src="https://source.unsplash.com/360x200?mechanical+keyboard" alt="Programming" className='w-full'/>
                        <div className="py-8 px-6">        
                            <h3><a href="" className='block mb-3 font-semibold text-xl text-dark hover:text-primary truncate'>
                            Mechanical Keyboard</a></h3>
                            <p className='font-medium text-base text-secondary mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, animi maxime? Repellat, quia.</p>
                            <a href="#" className='font-medium bg-primary py-2 px-4 rounded-lg'>Read More..</a>
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                        <img src="https://source.unsplash.com/360x200?coffee" alt="Coffee" className='w-full'/>
                        <div className="py-8 px-6">        
                            <h3><a href="" className='block mb-3 font-semibold text-xl text-dark hover:text-primary truncate'>
                            Filosopi Kopi</a></h3>
                            <p className='font-medium text-base text-secondary mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eos totam nemo, voluptas aliquam dolorum.</p>
                            <a href="#" className='font-medium bg-primary py-2 px-4 rounded-lg'>Read More..</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blog