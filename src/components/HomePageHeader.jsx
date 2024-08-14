import React from "react";
import { lazy } from "react";
import { IoIosSearch } from "react-icons/io";

const Logo = lazy(() => import("../components/Logo.jsx"));
const ThemeToggler = lazy(() => import("../components/ThemeToggler.jsx"));

const HomePageHeader = () => {
    return (
        <section className="flex items-center justify-between p-4">
            <Logo />
            <div className="flex xl:w-[50%] lg:w-[40%] items-center justify-between gap-2">
                <input type="text" placeholder="Search Faculty" className="border-dark border-2 text-xl px-8 py-2 rounded-xl w-full" />
                <IoIosSearch className="text-[2rem] font-bold" />
            </div>
            <div className="flex items-center gap-4">
                <div className="bg-dark text-white items-center flex justify-center p-3 rounded-xl text-2xl">
                    {" "}
                    <ThemeToggler />
                </div>
                <button aria-label="Request" className="bg-dark text-white rounded-xl px-6 py-3">
                    View Request
                </button>
                <img src="/img13.jpg" alt="profile" className="w-[3rem] h-[3rem] rounded-full" />
            </div>
        </section>
    );
};

export default HomePageHeader;
