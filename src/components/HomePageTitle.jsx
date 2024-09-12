import Lottie from 'lottie-react';
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const HomePageTitle = () => {
    const [animationData, setAnimationData] = useState(null);
  
   
    useEffect(()=>{
        const fetchAnimationData = async () => {
            const response = await fetch('https://lottie.host/c9df1460-034e-4d8e-9d1e-3414833ee605/dox91JnU7v.json');
            const data = await response.json();
            setAnimationData(data);
        };
        fetchAnimationData();
    },[])
    if (!animationData) {
        return <div>Loading...</div>;
    }

    return (
        <section className='flex flex-row items-start '>
            <section className="flex flex-col items-start gap-8">
                <section className="flex flex-col w-[60%] gap-8">
                <div className="flex flex-col items-start text-[4rem] font-bold -tracking-tight">
                    <p>Streamline</p>
                    <p>your Schedule</p>
                </div>
                <div>
                    <Lottie animationData={animationData} loop={true} autoplay={true}style={{ width: '50%', height: '50%' }} />
                </div>
                <p className="max-w-[90%] text-gray-700 text-lg font-medium">
                    Effortlessly manage and book staff appointments with just a few taps. Wheather you are booking a meeting, a consulation or any other type of appointment, our intuitive platform
                    makes it quick and simple. Say goodbye to scheduling conflicts and hello to seamless organization.
                </p>
                </section>
                <button className="flex items-center bg-dark rounded-full flex-row text-light px-6 gap-2 text-center  text-lg py-3">
                    <FaArrowRight /> Get Started
                </button>
            </section>

            {/* code for slide  */}
            <section  className=' flex flex-row gap-4 overflow-hidden'> 
            <div className='slide1 flex flex-col gap-2 overflow-hidden'>
                <div className='pfpslide flex flex-col items-end gap-2 mb-0 '>
                    <LazyLoadImage src='/pfp.webp' className='  h-[30%] w-[60%] rounded-md '/>
                    <LazyLoadImage src='/pfp.webp' className=' h-[30%] w-[60%] rounded-md '/>
                    <LazyLoadImage src='/pfp.webp' className=' h-[30%] w-[60%] rounded-md '/>
                </div>
                <div className='pfpslide flex flex-col items-end gap-2 mt-0  '>
                    <LazyLoadImage src='/pfp.webp' className='h-[30%] w-[60%] rounded-md '/>
                    <LazyLoadImage src='/pfp.webp' className=' h-[30%] w-[60%] rounded-md '/>
                    <LazyLoadImage src='/pfp.webp' className=' h-[30%] w-[60%] rounded-md '/>
                </div>
                </div>
            </section>
            
        </section>
    );
};

export default HomePageTitle;
