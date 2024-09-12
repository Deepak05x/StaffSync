import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const HomePageTitle = () => {
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        const fetchAnimationData = async () => {
            const response = await fetch("https://lottie.host/c9df1460-034e-4d8e-9d1e-3414833ee605/dox91JnU7v.json");
            const data = await response.json();
            setAnimationData(data);
        };
        fetchAnimationData();
    }, []);
    if (!animationData) {
        return <div>Loading...</div>;
    }

    return (
        <section className="flex flex-row items-start justify-between overflow-hidden">
            <section className="flex flex-col w-[60%]">
                <section className="flex flex-col items-start gap-8">
                    <div className="flex flex-col items-start text-[4rem] font-bold -tracking-tight">
                        <p>Streamline</p>
                        <p>your Schedule</p>
                    </div>
                    <div>
                        <Lottie animationData={animationData} loop={true} autoplay={true} style={{ width: "40%", height: "40%" }} />
                    </div>
                    <p className="max-w-[90%] text-gray-700 text-lg font-medium">
                        Effortlessly manage and book staff appointments with just a few taps. Whether you are booking a meeting, a consultation, or any other type of appointment, our intuitive
                        platform makes it quick and simple. Say goodbye to scheduling conflicts and hello to seamless organization.
                    </p>
                    <button className="flex items-center bg-dark rounded-full flex-row text-light px-6 gap-2 text-center text-lg py-3">
                        <FaArrowRight /> Get Started
                    </button>
                </section>
            </section>
            <section className="w-[40%] h-[80vh] flex gap-4 ">
                <section className="flex flex-col gap-12  overflow-hidden">
                    <div className="animate-loop-scroll-down gap-12 flex flex-col">
                        <img src="/lake.jpg" alt="" className="max-w-none" />
                        <img src="/lake.jpg" alt="" className="max-w-none" />
                        <img src="/lake.jpg" alt="" className="max-w-none" />
                        <img src="/lake.jpg" alt="" className="max-w-none" />
                    </div>
                    <div className="animate-loop-scroll-down gap-12 flex flex-col" aria-hidden="true">
                        <img src="/lake.jpg" alt="" className="max-w-none" />
                        <img src="/lake.jpg" alt="" className="max-w-none" />
                        <img src="/lake.jpg" alt="" className="max-w-none" />
                        <img src="/lake.jpg" alt="" className="max-w-none" />
                    </div>
                </section>
                <section className="flex flex-col gap-12 overflow-hidden">
                    <div className="animate-loop-scroll-up gap-12 flex flex-col">
                        <img src="/lake.jpg" alt="" className="max-w-none" />
                        <img src="/lake.jpg" alt="" className="max-w-none" />
                        <img src="/lake.jpg" alt="" className="max-w-none" />
                        <img src="/lake.jpg" alt="" className="max-w-none" />
                    </div>
                    <div className="animate-loop-scroll-up gap-12 flex flex-col" aria-hidden="true">
                        <img src="/lake.jpg" alt="" className="max-w-none" />
                        <img src="/lake.jpg" alt="" className="max-w-none" />
                        <img src="/lake.jpg" alt="" className="max-w-none" />
                        <img src="/lake.jpg" alt="" className="max-w-none" />
                    </div>
                </section>
            </section>
        </section>
    );
};

export default HomePageTitle;
