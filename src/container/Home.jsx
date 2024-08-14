import React from "react";
import { lazy } from "react";

const HomePageHeader = lazy(() => import("../components/HomePageHeader.jsx"));

const Home = () => {
    return (
        <section className="bg-white dark:bg-dark dark:text-light">
            <HomePageHeader />
        </section>
    );
};

export default Home;
