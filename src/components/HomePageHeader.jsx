import React from "react";
import { lazy } from "react";
import { IoIosSearch } from "react-icons/io";

const Logo = lazy(() => import("../components/Logo.jsx"));
const ThemeToggler = lazy(() => import("../components/ThemeToggler.jsx"));

const HomePageHeader = () => {
    return (
        <section className="lg:flex hidden items-center justify-between py-5 px-10">
            <Logo />
            <div className="flex items-center gap-6">
                <IoIosSearch className="text-[3rem] px-3 py-2 font-bold cursor-pointer bg-dark text-light rounded-full" />
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
