import React from "react";
import { lazy } from "react";

const HomePageMobile = lazy(() => import("../components/HomePageMobile.jsx"));
const HomePageHeader = lazy(() => import("../components/HomePageHeader.jsx"));

const Home = () => {
    return (
        <section className="bg-white dark:bg-dark dark:text-light">
            <HomePageHeader />

            <HomePageMobile />
        </section>
    );
};

export default Home;
