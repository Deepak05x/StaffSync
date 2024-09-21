import React from 'react';
import { BsBuildingsFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaBookOpenReader, FaCalendarDays, FaPencil } from "react-icons/fa6";
import { IoMdArrowBack } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { MdLogout, MdOutlineHelpCenter } from "react-icons/md";

export default function Profile() {
  return (
    <div className='flex flex-col bg-gray-200  h-[100vh] w-full'>
         {/* BG AND PROFILE */}
        <section className='bg-[url("../public/pfpbg.jpeg")]   w-full'>
            <div className='flex-row flex justify-start p-4 items-start   mt-5 '>
              <div className='bg-dark rounded-full h-12 w-12 flex flex-col items-center justify-center'>
              <IoMdArrowBack className='text-white h-5 w-5' />
              </div>
            </div>
            <div className='bg-white/5  backdrop-blur-sm'>
              <div className='flex flex-col p-4 gap-[0.6rem] justify-start items-start ml-2'>
                <div className='flex flex-row  justify-between w-full'>
                    <p className='text-white font-bold text-[30px] '>Deepak H</p>
                    < FaPencil   className='text-white h-6 w-6 p-1' />
                </div>
                <p className='text-gray-500  font-normal text-[14px]' >Bio of the student</p>
                <div className='flex flex-row justify-start items-start gap-5 mt-2'>
                  <FaTwitter className='text-white h-6 w-6' />
                  <FaLinkedinIn className='text-white h-6 w-6' />
                  <FaGithub  className='text-white h-6 w-6' />
                </div>
              </div>
            </div>
        </section>

        <section className='w-full  flex flex-col md:flex-row justify-start items-start gap-5 p-4 '>
          {/* ACCOUNT INF0 */}
          <section className='flex flex-col justify-start items-start ml-2 mr-10 text-[15px] md:text-lg  text-gray-500 gap-2 '>
            <p className='text-black text-[18px] md:text-[23px] font-semibold mb-2'>Account Info</p>
              <div className='flex flex-row justify-start items-start gap-3'>
                <div className='bg-black rounded-full h-8 w-[1.2rem] items-center flex flex-col'>
                  <p className='text-white font-bold text-[15px] p-1'>R</p>
                </div>
                <span  className=" bg-inherit outline-none border-none " >RA2332241010034</span>
              </div>           
              <div className='flex flex-row justify-start items-start gap-3'>
                <IoMail className='text-black  h-6 w-6 '></IoMail>
                <span  className=" bg-inherit outline-none border-none " >dph2002@gmail.com</span>
              </div>             
              <div className='flex flex-row justify-start items-start gap-3'>
              <BsBuildingsFill className='text-black  h-6 w-6 '></BsBuildingsFill>
              <span  className=" bg-inherit outline-none border-none " >Computer Applications</span>
              </div>     
              <div className='flex flex-row justify-start items-start gap-3'>
              <FaBookOpenReader className='text-black  h-6 w-6 '></FaBookOpenReader>
              <span  className=" bg-inherit outline-none border-none" >MCA</span>
              </div>
              <div className='flex flex-row justify-start items-start gap-3'>
              <FaCalendarDays className='text-black  h-6 w-6 '></FaCalendarDays>
              <span  className=" bg-inherit outline-none border-none " >Semester - 3</span>
              </div>
          </section>
          {/* SUPPORT */}
          <section className='flex flex-col justify-start items-start text-[15px] md:text-lg  ml-1'>
            <p className='text-black text-[18px] md:text-[23px] font-semibold'>Support</p>
            <div className='flex flex-row  text-gray   justify-center items-center  gap-4  mb-2 mt-5'>
              <MdOutlineHelpCenter className=' h-7 w-7 p-1'/>
              <p className='font-thin '>Help Center</p>
            </div>
            <div className='flex flex-row text-red-500   justify-center items-center  gap-4  '>
              <MdLogout className=' h-7 w-7 p-1'/>
              <p className='font-thin  '>Log Out</p>
            </div>
          </section>

        </section>
      
    </div>
  )
}
