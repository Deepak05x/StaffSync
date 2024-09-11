import React from "react";
import { lazy } from "react";
import { IoIosSearch, IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Logo = lazy(() => import("../components/Logo.jsx"));
const ThemeToggler = lazy(() => import("../components/ThemeToggler.jsx"));

const HomePageHeader = () => {
    const [search, setSearch] = useState(false);
    const [menu, setMenu] = useState(false);

    const toggleSearch = () => {
        setSearch((prevItem) => !prevItem);
    };

    const toggleMenu = () => {
        setMenu((prevItem) => !prevItem);
    };

    return (
        <nav>
            <section className="lg:flex hidden w-full items-center justify-between py-5 px-10">
                <Logo />
                {search && (
                    <div className="flex-1 xl:px-12 lg:px-8">
                        <input
                            type="text"
                            placeholder="Search Faculty"
                            className="border-dark dark:bg-dark dark:border-light border-2 text-xl px-8 py-2 rounded-xl w-full outline-none dark:border-[1.9px]"
                        />
                    </div>
                )}
                <div className="flex items-center gap-6">
                    {search ? (
                        <IoClose className="text-4xl" onClick={() => toggleSearch(false)} />
                    ) : (
                        <IoIosSearch onClick={() => toggleSearch()} className="text-[3rem] px-3 py-2 font-bold cursor-pointer bg-dark text-light dark:bg-light dark:text-dark rounded-full" />
                    )}

                    <ThemeToggler />
                    <button aria-label="Request" className="bg-dark dark:bg-light dark:text-dark dark:font-semibold text-white rounded-xl px-6 py-3">
                        View Request
                    </button>
                    <img src="/img13.jpg" alt="profile" className="w-[3rem] h-[3rem] rounded-full" />
                </div>
            </section>
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
                        <div className="text-4xl flex items-center sm:gap-8 ssm:gap-4">
                            <IoIosSearch onClick={() => toggleSearch()} className="text-[3rem] px-3 py-2 font-bold cursor-pointer bg-dark text-light dark:bg-light dark:text-dark rounded-full" />
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
        </nav>
    );
};

export default HomePageHeader;
