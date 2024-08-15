import React from "react";
import { lazy } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Logo = lazy(() => import("../components/Logo.jsx"));
const ThemeToggler = lazy(() => import("../components/ThemeToggler.jsx"));

const HomePageHeader = () => {
    return (
        <section className="lg:flex hidden items-center justify-between py-5 px-10">
            <Logo />
            <div className="flex xl:w-[50%] lg:w-[40%] items-center justify-between gap-2">
                <input type="text" placeholder="Search Faculty" className="border-dark dark:bg-dark dark:border-light border-2 text-xl px-8 py-2 rounded-xl w-full outline-none dark:border-[1.9px]" />
                <IoIosSearch className="text-[2rem] font-bold" />
            </div>
            <div className="flex items-center gap-6">
                <ThemeToggler />
                <button aria-label="Request" className="bg-dark dark:bg-light dark:text-dark dark:font-semibold text-white rounded-xl px-6 py-3">
                    View Request
                </button>
                <img src="/img13.jpg" alt="profile" className="w-[3rem] h-[3rem] rounded-full" />
            </div>
        </section>
    );
};

export default HomePageHeader;
