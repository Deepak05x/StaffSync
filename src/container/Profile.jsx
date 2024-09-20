import React from 'react';
import { BsBuildingsFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaBookOpenReader, FaCalendarDays, FaPencil } from "react-icons/fa6";
import { IoMdArrowBack } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { MdArrowDropDown, MdLogout, MdOutlineHelpCenter } from "react-icons/md";

export default function Profile() {
  return (
    <div className='flex flex-col bg-gray-200 h-[100vh] w-full'>
        <section className='bg-[url("../public/pfpbg.jpeg")]  w-full'>
            
            <div className='flex-row flex justify-start p-4 items-start mt-5 mb-[150px]'>
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

        <section className='w-full bg-gray-200  flex flex-row justify-start items-start gap-5 p-4 '>
          <section className='flex flex-col justify-start items-start ml-2 gap-2 w-[50%]'>
            <p className='text-black text-[23px] font-semibold mb-1'>Account Info</p>

            <div className="bg-gray-50 px-4 py-2 rounded flex items-start justify-between sm:gap-12 ssm:gap-2 w-full">
              <div className='flex flex-row justify-start items-start gap-3'>
                <div className='bg-black rounded-full h-6 w-6 items-center flex flex-col'>
                  <p className='text-white font-bold text-[12px] p-1'>R</p>
                </div>
                <input  type='text' placeholder="Register Number" className="text-dark bg-inherit outline-none border-none text-lg" />
              </div>
              < FaPencil className='text-gray h-6 w-6 p-1' />
            </div>

            <div className="bg-gray-50 px-4 py-2 rounded flex items-start justify-between sm:gap-12 ssm:gap-2 w-full">
              <div className='flex flex-row justify-start items-start gap-3'>
                <IoMail className='text-black  h-6 w-6 '></IoMail>
                <input type='email' placeholder="Email" className="text-dark bg-inherit outline-none border-none text-lg" />
              </div>
              < FaPencil className='text-gray h-6 w-6 p-1' />
            </div>

            <div className="bg-gray-50 px-4 py-2 rounded flex items-start justify-between sm:gap-12 ssm:gap-2  w-full">
              <div className='flex flex-row justify-start items-start gap-3'>
              <BsBuildingsFill className='text-black  h-6 w-6 '></BsBuildingsFill>
                <select className="text-gray-400 bg-inherit outline-none border-none text-lg w-[208px] appearance-none" >
                <option value="" disabled selected className='text-gray-400'>Department</option>
                </select>
              </div>
              <MdArrowDropDown className='text-gray h-8 w-8 p-1' />
            </div>

            <div className="bg-gray-50 px-4 py-2 rounded flex items-start justify-between sm:gap-12 ssm:gap-2 w-full">
              <div className='flex flex-row justify-start items-start gap-3'>
              <FaBookOpenReader className='text-black  h-6 w-6 '></FaBookOpenReader>
                <select  className="text-gray-400  bg-inherit outline-none border-none text-lg w-[208px] appearance-none" >
                <option value="" disabled selected className='text-gray-400'>Program</option>
                </select>
              </div>
              < MdArrowDropDown className='text-gray h-8 w-8 p-1' />
            </div>

            <div className="bg-gray-50 px-4 py-2 rounded flex items-start justify-between sm:gap-12 ssm:gap-2 w-full ">
              <div className='flex flex-row justify-start items-start gap-3'>
              <FaCalendarDays  className='text-black  h-6 w-6 '></FaCalendarDays >
                <input  placeholder="DOB : dd/mm/yyy" className=" text-gray-400  bg-inherit   outline-none border-none text-lg " />
              </div>
              < FaPencil className='text-gray h-6 w-6 p-1' />
            </div>

          </section>
          <section className='flex flex-col justify-start items-start w-[50%] ml-2'>
            <p className='text-black text-[23px] font-semibold'>Support</p>
            <div className='flex flex-row  text-gray text-[15px]  justify-center items-center  gap-4 ml-5 mb-2 mt-5'>
              <MdOutlineHelpCenter className=' h-7 w-7 p-1'/>
              <p className='font-thin '>Help Center</p>
            </div>
            <div className='flex flex-row text-red-500 text-[16px]  justify-center items-center  gap-4 ml-5 '>
              <MdLogout className=' h-7 w-7 p-1'/>
              <p className='font-thin  '>Log Out</p>
            </div>
            
          </section>
          

        </section>
      
    </div>
  )
}
