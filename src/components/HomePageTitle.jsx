import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { FaArrowRight } from "react-icons/fa";

const HomePageTitle = () => {
    return (
        <section className="flex flex-col w-[60%] gap-12">
            <h1>
                Streamline<span>your Schedule</span>
            </h1>
            <div>
                <LazyLoadImage src="/lake.jpg" alt="title" effect="blur" className="w-[20rem] h-[20rem]" />
            </div>
            <p className="max-w-[90%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam omnis magni hic praesentium soluta in provident quibusdam veritatis, itaque laborum modi numquam ipsum eum labore qui.
                Eaque aliquam eum voluptatum!
            </p>
            <button className="flex items-center">
                <FaArrowRight />
                Get Started
            </button>
        </section>
    );
};

export default HomePageTitle;
