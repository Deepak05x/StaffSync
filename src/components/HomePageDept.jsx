import React from "react";
import { FaBriefcaseMedical } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { MdOutlineScience } from "react-icons/md";
import { GoLaw } from "react-icons/go";
import { PiCookingPotBold } from "react-icons/pi";

const cards = [
    {
        image: <MdOutlineScience />,
        title: "Faculty of Science and Humanitites",
        color: "bg-[#dad6b1]",
    },
    {
        image: <GrTechnology />,
        title: "Engineering & Technology",
        color: "bg-[#f0cbce]",
    },
    {
        image: <FaBriefcaseMedical />,
        title: "Medical Science",
        color: "bg-[#b6e6d2]",
    },
    {
        image: <GoLaw />,
        title: "Law",
        color: "bg-[#f0cbdf]",
    },
    {
        image: <PiCookingPotBold />,
        title: "Hotel Management",
        color: "bg-[#dacbf0]",
    },
    {
        image: <FaBriefcaseMedical />,
        title: "Hotel Management",
        color: "bg-[#d8f0cb]",
    },
];

const HomePageDept = () => {
    return (
        <section className="py-32 w-full flex flex-col gap-12 lg:items-start items-center justify-center">
            <h1 className="md:text-[4rem] sm:text-[3rem] ssm:text-[2.5rem] flex flex-col lg:items-start items-center font-bold">
                Uncover <span className="text-center">Your department</span>
            </h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 w-full lg:px-0 md:px-12 sm:px-8 ssm:px-4">
                {cards.map((item, index) => (
                    <div key={index} className={`${item.color} py-12 flex flex-col rounded-md gap-12 items-center justify-center cursor-pointer `}>
                        <p className="text-[5rem] text-center">{item.image}</p>
                        <p className="font-medium text-xl w-[90%] text-center">{item.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HomePageDept;
