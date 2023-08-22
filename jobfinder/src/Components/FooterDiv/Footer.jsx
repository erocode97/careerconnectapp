import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

import  {AiFillInstagram} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai';
const Footer = () => {
  return (
    <div className='footer p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-8 grid grid-cols-5 m-auto items-start justify-center'>


      <div>
        <div className='logoDiv'>
          <h1 className='logo text-[25px] text-white pb-[1.5rem]'>
            <strong>Career</strong>Connect</h1>
        </div>
        <p className='text-white pb-[13px] opacity-70 leading-7'>
      We're here to pave the way towards corporate success, because our business is building the future.
      </p>
      </div>
      

      <div className='grid'>
         <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
              Company
         </span>
         <div className='grid gap-3'>
           <li className='text-white opacity-[.7] hover:opacity-[1]'>About Us</li>
           <li className='text-white opacity-[.7] hover:opacity-[1]'>Features</li>
           <li className='text-white opacity-[.7] hover:opacity-[1]'>News</li>
           <li className='text-white opacity-[.7] hover:opacity-[1]'>FAQ</li>
           
         </div>
      </div>
      <div className='grid'>
         <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
              Resources
         </span>
         <div className='grid gap-3'>
           <li className='text-white opacity-[.7] hover:opacity-[1]'>Account</li>
           <li className='text-white opacity-[.7] hover:opacity-[1]'>Support Center</li>
           <li className='text-white opacity-[.7] hover:opacity-[1]'>Feedback</li>
           <li className='text-white opacity-[.7] hover:opacity-[1]'>Contact Us</li>
           
         </div>
      </div>
      <div className='grid'>
         <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
              Support
         </span>
         <div className='grid gap-3'>
           <li className='text-white opacity-[.7] hover:opacity-[1]'>Events</li>
           <li className='text-white opacity-[.7] hover:opacity-[1]'>Promo</li>
           <li className='text-white opacity-[.7] hover:opacity-[1]'>Careers</li>
           <li className='text-white opacity-[.7] hover:opacity-[1]'>Lorem</li>
         </div>
      </div>
     <div className='grid'>
       <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
        Contact Info
       </span>
       <div>
        <small className='text-[14px] text-white '>
               erendumanogullari@hotmail.com
        </small>

        <div className='icons flex gap-4 py-[1rem]'>

           <AiFillInstagram  className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor'/>
           <AiFillGithub className='bg-white p-[8px] h-[35px]  w-[35px] rounded-full icon text-blueColor'/>
           <AiFillLinkedin className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor'/>


        </div>
       </div>

     </div>







    </div>
  )
}

export default Footer