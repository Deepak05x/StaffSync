import React from "react";
import { lazy } from "react";
import { motion } from "framer-motion";

const Navbar = lazy(() => import("../components/Navbar"));

const Request = () => {
    return (
        <>
            <section className="min-h-screen flex flex-col">
                <Navbar />
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
                    viewport={{ once: true }}
                    className="xl:px-12 lg:px-8 sm:px-4 ssm:px-2 flex py-8 flex-col gap-12"
                >
                    <div className="flex flex-col items-center md:text-[3rem] sm:text-[2rem] ssm:text-[1.5rem] font-bold -tracking-tight">View Request</div>
                    <div className="flex flex-col gap-4">
                        <div className="2xl:flex hidden items-center text-xl font-bold">
                            <p className="ml-[1rem]">Student Name</p>
                            <p className="ml-[6rem]">Date and Time</p>
                            <p className="ml-[8rem]">Objective</p>
                            <p className="ml-[38rem]">Status</p>
                        </div>
                        <div className="flex flex-col items-center bg-dark/5  rounded-lg p-8 gap-8">
                            <div className="flex md:flex-row flex-col lg:gap-0 gap-8 items-center justify-between w-full  text-lg font-medium">
                                <p>Abdur Raheem</p>
                                <div className="flex flex-col items-center">
                                    <p>05-09-2024</p>
                                    <p>10:00 am</p>
                                </div>

                                <p className="text-center w-[50%] text-sm lg:flex hidden">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus repellendus, aspernatur adipisci sed molestiae explicabo, iste numquam culpa nesciunt enim ullam
                                    nisi, optio soluta inventore cum labore doloribus voluptatibus iusto?
                                </p>
                                <button className="bg-green-500 text-white py-1 px-2 rounded-lg ">Approve</button>
                            </div>
                            <p className="text-center lg:hidden flex text-sm ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus repellendus, aspernatur adipisci sed molestiae explicabo, iste numquam culpa nesciunt enim ullam
                                nisi, optio soluta inventore cum labore doloribus voluptatibus iusto?
                            </p>
                        </div>
                    </div>
                </motion.section>
                {/* <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
                    viewport={{ once: true }}
                    className="xl:px-12 lg:px-8 sm:px-4 ssm:px-2 flex py-8 flex-col gap-12"
                >
                    <div className="flex flex-col items-center md:text-[3rem] sm:text-[2rem] ssm:text-[1.5rem] font-bold -tracking-tight">View Request</div>
                    <div className="">
                        <div className="flex flex-col items-center bg-dark/5  rounded-lg p-8 gap-8">
                            <div className="flex md:flex-row flex-col lg:gap-0 gap-8 items-center justify-between w-full  text-lg font-medium">
                                <p>Abdur Raheem</p>
                                <p>05-09-2024</p>
                                <p>10:00 am</p>
                                <p className="text-center w-[50%] text-sm lg:flex hidden">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus repellendus, aspernatur adipisci sed molestiae explicabo, iste numquam culpa nesciunt enim ullam
                                    nisi, optio soluta inventore cum labore doloribus voluptatibus iusto?
                                </p>
                            </div>
                            <p className="text-center lg:hidden flex text-sm ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus repellendus, aspernatur adipisci sed molestiae explicabo, iste numquam culpa nesciunt enim ullam
                                nisi, optio soluta inventore cum labore doloribus voluptatibus iusto?
                            </p>
                        </div>
                    </div>
                </motion.section> */}
            </section>
        </>
    );
};

export default Request;
