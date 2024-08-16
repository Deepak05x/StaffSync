import React, { useState } from "react";
import { lazy } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Logo = lazy(() => import("../components/Logo.jsx"));
const ThemeToggler = lazy(() => import("../components/ThemeToggler.jsx"));

const HomePageMobile = () => {
    const [menu, setMenu] = useState(false);
    const [search, setSearch] = useState(false);

    const toggleMenu = () => {
        setMenu((prevItem) => !prevItem);
    };

    const toggleSearch = () => {
        setSearch((prevItem) => !prevItem);
    };

    return (
        <>
            {search ? (
                <>
                    <div className="flex items-center justify-center py-5 gap-4 lg:hidden">
                        <input
                            type="text"
                            placeholder="Search Faculty"
                            className="border-dark dark:bg-dark dark:border-light border-2 text-xl px-8 py-2 rounded-xl sm:w-[80%] ssm:w-[70%] outline-none dark:border-[1.9px]"
                        />
                        <IoClose className="text-4xl" onClick={() => toggleSearch(false)} />
                    </div>
                </>
            ) : (
                <section className="flex lg:hidden items-center justify-between py-5 md:px-10 sm:px-7 ssm:px-5">
                    <Logo />
                    <div className="md:flex ssm:hidden xl:w-[50%] lg:w-[40%] items-center justify-between gap-2">
                        <input
                            type="text"
                            placeholder="Search Faculty"
                            className="border-dark dark:bg-dark dark:border-light border-2 text-xl px-8 py-2 rounded-xl w-full outline-none dark:border-[1.9px]"
                        />
                        <IoIosSearch className="text-[2rem] font-bold" />
                    </div>
                    <div className="text-4xl flex sm:gap-8 ssm:gap-4">
                        <IoIosSearch className="flex md:hidden" onClick={() => toggleSearch()} />
                        {menu ? (
                            <>
                                <IoClose onClick={() => toggleMenu()} className="relative" />
                                <div className="absolute bg-dark dark:bg-light w-[15rem] h-[20rem] top-[15%] right-[5%] rounded-lg flex items-center justify-center flex-col gap-8 ">
                                    <img src="/img13.jpg" alt="profile" className="w-[3rem] h-[3rem] rounded-full" />
                                    <p className="text-dark text-lg hover:underline hover:underline-offset-2 bg-light dark:bg-dark dark:text-light px-4 py-2 rounded-lg">View Request</p>
                                    <ThemeToggler />
                                </div>
                            </>
                        ) : (
                            <IoMdMenu onClick={() => toggleMenu()} />
                        )}
                    </div>
                </section>
            )}
        </>
    );
};

export default HomePageMobile;
