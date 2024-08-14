import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Logo = () => {
    return (
        <section className="flex flex-row items-center">
            <LazyLoadImage src="/logo.jpeg" alt="logo" effect="blur" className="w-[5rem] h-[5rem]" />
            <h1 className="text-3xl font-semibold tracking--wide">StaffSync</h1>
        </section>
    );
};

export default Logo;
