import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
    return (
        <section className="flex flex-col items-center justify-center h-[100vh] gap-12">
            <Link to={"/login"}>
                <button className="bg-dark text-light px-12 py-8 text-2xl rounded-md">Login</button>
            </Link>
            <Link to={"/signup"}>
                <button className="bg-dark text-light px-12 py-8 text-2xl rounded-md">Sign Up</button>
            </Link>
        </section>
    );
};

export default Main;
