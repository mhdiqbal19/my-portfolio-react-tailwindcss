import React from 'react'
import portfolio1 from './../../assets/img/portfolio1.jpg';
import portfolio2 from './../../assets/img/portfolio2.jpg'
import portfolio3 from './../../assets/img/portfolio3.jpg'
import portfolio4 from './../../assets/img/portfolio4.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio' className='pt-36 pb-32 bg-slate-100'>
        <div className="container">
            <div className="w-full px-4">
                <div className="max-w-xl mx-auto text-center mb-16">
                <h4 className='semi-bold text-lg text-primary uppercase'>Portfolio</h4>
                <h2 className='font-bold text-dark text-3xl mb-4'>New Project</h2>
                <p className='font-medium text-md text-secondary'>Berbagai Project Sistem / Aplikasi Perkantoran yang pernah kami devlopment.</p>
                </div>
            </div>
            <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
                <div className="mb-12 p-4 md:w-1/2">
                    <div className="rounded-md shadow-md overflow-hidden">
                        <img src={portfolio1} alt="PT PLN" width='100%' />
                    </div>
                    <h3 className='font-semibold text-xl mt-5 mb-3 text-dark '>Polsri </h3>
                    <p className='font-medium text-base text-secondary'>Aplikasi Helpdesk Politeknik Negeri Sriwijaya</p>
                </div>
                <div className="mb-12 p-4 md:w-1/2">
                    <div className="rounded-md shadow-md overflow-hidden">
                        <img src={portfolio2} alt="PT PLN" width='100%' />
                    </div>
                    <h3 className='font-semibold text-xl mt-5 mb-3 text-dark '>Aplikasi PT PLN (Persero)</h3>
                    <p className='font-medium text-base text-secondary'>Sistem Monitoring Peralatan Pembangkit PT PLN Sektor Keramasan Palembang</p>
                </div>
                <div className="mb-12 p-4 md:w-1/2">
                    <div className="rounded-md shadow-md overflow-hidden">
                        <img src={portfolio3} alt="PT PLN" width='100%' />
                    </div>
                    <h3 className='font-semibold text-xl mt-5 mb-3 text-dark '>Aplikasi Notaris</h3>
                    <p className='font-medium text-base text-secondary'>Sistem Monitoring Data Akta Notaris dan Notarill</p>
                </div>
                <div className="mb-12 p-4 md:w-1/2">
                    <div className="rounded-md shadow-md overflow-hidden">
                        <img src={portfolio4} alt="PT PLN" width='100%' />
                    </div>
                    <h3 className='font-semibold text-xl mt-5 mb-3 text-dark '>PT Sinergi Visi Utama</h3>
                    <p className='font-medium text-base text-secondary'>Aplikasi Penggajian Karyawan</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Portfolio