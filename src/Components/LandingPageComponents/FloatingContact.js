import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './LandingPage.css'
export default function FloatingContact() {
  return (
    <>
    <div className='fixed left-0 z-50 md:left-4 bottom-12 md:bottom-0 p-3 text-white text-center'>
   <img className='h-[65px] blink-image' src="/image/takhfif.png" alt="تخفیف طراحی سایت" />
</div>

    <div className='fixed z-50 bottom-0 w-full md:w-auto'>
 
      <div className='flex flex-col items-start md:items-center md:mr-4'>
        <a 
          href="https://wa.me/09354502369" 
          target="_blank" 
          rel="noopener noreferrer"
          className='bg-green-500 p-3 mb-2 mr-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 md:mb-2'
        >
          <FaWhatsapp className='text-white' style={{ fontSize: '2.5rem' }} />
        </a>

        {/* بخش تماس با ما */}
        <div className='bg-red-500 w-full md:w-auto flex justify-center items-center p-3 md:p-2 md:rounded-lg shadow-lg'>
          <a  href="tel:02191690375" 
          target="_blank"  className='text-white text-xl md:text-xl'>تماس با ۰۲۱۹۱۶۹۰۳۷۵</a>
        </div>
      </div>
    </div>
    </>
  );
}