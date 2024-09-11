import React from "react";
import { lazy } from "react";

const HomePageTitle = lazy(() => import("../components/HomePageTitle.jsx"));

const HomePageContainer = () => {
    return (
        <section className="flex items-center py-12 w-full h-full px-12">
            <HomePageTitle />
        </section>
    );
};

export default HomePageContainer;
