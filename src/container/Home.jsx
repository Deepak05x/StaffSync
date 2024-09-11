import React from "react";
import { lazy } from "react";

const HomePageHeader = lazy(() => import("../components/HomePageHeader.jsx"));
const HomePageContainer = lazy(() => import("../components/HomePageContainer.jsx"));

const Home = () => {
    return (
        <section className="bg-light dark:bg-dark dark:text-light">
            <HomePageHeader />
            <HomePageContainer />
        </section>
    );
};

export default Home;
