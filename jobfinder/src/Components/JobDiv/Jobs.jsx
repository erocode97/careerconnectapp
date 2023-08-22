import React from 'react'
import {BiTimeFive} from 'react-icons/bi'
import logo1 from '../../Assets/logo.jpeg'
import logo2 from '../../Assets/logo.png'
import logo3 from '../../Assets/logo3.png'
import logo4 from '../../Assets/logo4.png'
import logo5 from '../../Assets/logo5.jpeg'
import logo6 from '../../Assets/logo6.jpeg'
import logo7 from '../../Assets/logo7.png'
import logo8 from '../../Assets/logo8.jpeg'



const Data = [
  {
    id:1,
    image:logo1,
    title:'Web Developer',
    time:'Now',
    location:'Warsaw',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, error nemo iste, aspernatur repellendus ipsam quo distinctio quibusdam quas vel perferendis tenetur molestiae possimus ex assumenda sunt amet iure eum!',
    company:'TechNex Solutions'
  },
  {
    id:2,
    image:logo2,
    title:'UI Designer',
    time:'11Hrs',
    location:'Manchester',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, error nemo iste, aspernatur repellendus ipsam quo distinctio quibusdam quas vel perferendis tenetur molestiae possimus ex assumenda sunt amet iure eum!',
    company:'CodeWave Innovations'
  },
  {
    id:3,
    image:logo3,
    title:'Data Analyst',
    time:'17Hrs',
    location:'Budapest',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, error nemo iste, aspernatur repellendus ipsam quo distinctio quibusdam quas vel perferendis tenetur molestiae possimus ex assumenda sunt amet iure eum!',
    company:'QuantumByte Systems'
  },
  {
    id:4,
    image:logo4,
    title:'Support Specialist',
    time:'17Hrs',
    location:'India',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, error nemo iste, aspernatur repellendus ipsam quo distinctio quibusdam quas vel perferendis tenetur molestiae possimus ex assumenda sunt amet iure eum!',
    company:'LogicFusion Technologies'
  },
  {
    id:5,
    image:logo5,
    title:'Data Analyst',
    time:'6Days',
    location:'Budapest',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, error nemo iste, aspernatur repellendus ipsam quo distinctio quibusdam quas vel perferendis tenetur molestiae possimus ex assumenda sunt amet iure eum!',
    company:'InfraLink Solutions'
  },
  {
    id:6,
    image:logo6,
    title:'Solutions Architect',
    time:'2Days',
    location:'South Korea',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, error nemo iste, aspernatur repellendus ipsam quo distinctio quibusdam quas vel perferendis tenetur molestiae possimus ex assumenda sunt amet iure eum!',
    company:'CyberSynergy Labs'
  },
  {
    id:7,
    image:logo7,
    title:'Full-stack Developer',
    time:'17Hrs',
    location:'Berlin',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, error nemo iste, aspernatur repellendus ipsam quo distinctio quibusdam quas vel perferendis tenetur molestiae possimus ex assumenda sunt amet iure eum!',
    company:'PixelPrime Tech'
  },
  {
    id:8,
    image:logo8,
    title:'Network Analyst',
    time:'13Days',
    location:'Texas',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, error nemo iste, aspernatur repellendus ipsam quo distinctio quibusdam quas vel perferendis tenetur molestiae possimus ex assumenda sunt amet iure eum!',
    company:'CloudScape Dynamics'
  }
]




const Jobs = () => {
return (
  <div>
    <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-10'>
      


     {
      Data.map(({id,image,title,time,location,desc,company})=>{
        
        return (
         <div key={id} className='group group/item singleJob w-[250px] p-[20px] bg-white rounded [10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>
             <span className='flex justify-between items-center gap-4'>
               <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{title}</h1>
               <span className='flex items-center text-[#ccc] gap-1'>
               <BiTimeFive/>{time}
               </span>
             </span>
            <h6 className='text-[#ccc]'>{location}</h6>

            <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>{desc}</p>
        
            <div className='company flex items-center gap-2'>
              <img src={image} alt="Company Logo" className='w-[10%]' />
              <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
           </div>
        <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-black group-hover/item:text-textColor group-hover:text-white'>Apply Now</button>
    </div>
        )




      })
     }








      </div>
  </div>
    

  )
}

export default Jobs