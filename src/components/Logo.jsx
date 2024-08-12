import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Logo = () => {
    return (
        <section className="flex flex-row items-center px-12 py-4">
            <LazyLoadImage src="/logo.jpeg" alt="logo" effect="blur" className="w-[7rem] h-[7rem]" />
            <h1 className="text-2xl font-semibold tracking--wide">STAFF SYNC</h1>
        </section>
    );
};

export default Logo;
