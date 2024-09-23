import React from "react";
import { lazy } from "react";

const Navbar = lazy(() => import("../components/Navbar"));

const staffs = [
    {
        image: "/lake.jpg",
        name: "Teacher name",
        qualification: "B-tech",
    },
    {
        image: "/lake.jpg",
        name: "Teacher name",
        qualification: "B-tech",
    },
    {
        image: "/lake.jpg",
        name: "Teacher name",
        qualification: "B-tech",
    },
    {
        image: "/lake.jpg",
        name: "Teacher name",
        qualification: "B-tech",
    },
];

const Staff = () => {
    return (
        <section className="flex flex-col min-h-screen gap-12 bg-light dark:bg-dark">
            <Navbar />
            <section className="flex flex-col items-center justify-center gap-8 xl:px-12 lg:px-8 sm:px-4 ssm:px-2 text-dark dark:text-light">
                <h1 className="md:text-[4rem] sm:text-[3rem] ssm:text-[2.5rem] font-bold -tracking-tight text-center px-8">Meet Our Esteemed Faculty</h1>
                <p className="md:text-xl ssm:text-lg md:max-w-[80vw] ssm:max-w-[90vw] text-center">
                    Our faculty members are the backbone of our institution, bringing years of experience, knowledge, and passion to the classroom. Each educator is dedicated to fostering a learning
                    environment that encourages curiosity, innovation, and academic excellence. Explore their profiles to learn more about their qualifications and schedules.
                </p>
                <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 ssm:grid-cols-1 items-center gap-12 mt-8 ">
                    {staffs.map((item, index) => (
                        <div className="bg-gray-100 dark:bg-black/30 rounded-lg flex flex-col px-12 py-6 items-center gap-2">
                            <img src={item.image} alt="profile" className="w-[12rem] h-[12rem] rounded-lg" />
                            <p className="font-semibold text-lg">{item.name}</p>
                            <p className="text-lg font-medium">{item.qualification}</p>
                            <button className="bg-dark text-light dark:text-dark dark:bg-light px-8 py-2 rounded-full">Schedule</button>
                        </div>
                    ))}
                </div>
            </section>
        </section>
    );
};

export default Staff;
