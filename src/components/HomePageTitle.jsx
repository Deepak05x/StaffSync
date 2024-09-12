import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { FaArrowRight } from "react-icons/fa";

const HomePageTitle = () => {
    return (
        <section className="flex flex-col items-start gap-8">
            <section className="flex flex-col w-[60%] gap-8">
                <div className="flex flex-col items-start text-[4rem] font-bold -tracking-tight">
                    <p>Streamline</p>
                    <p>your Schedule</p>
                </div>
                <div>
                    <LazyLoadImage src="/lake.jpg" alt="title" effect="blur" className="w-[20rem] h-[20rem]" />
                </div>
                <p className="max-w-[90%] text-gray-700 text-lg font-medium">
                    Effortlessly manage and book staff appointments with just a few taps. Wheather you are booking a meeting, a consulation or any other type of appointment, our intuitive platform
                    makes it quick and simple. Say goodbye to scheduling conflicts and hello to seamless organization.
                </p>
            </section>
            <button className="flex items-center bg-dark rounded-full flex-row text-light px-6 gap-2 text-center  text-lg py-3">
                <FaArrowRight />
                Get Started
            </button>
        </section>
    );
};

export default HomePageTitle;
