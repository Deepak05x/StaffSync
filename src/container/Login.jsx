import React, { lazy, Suspense, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Logo = lazy(() => import("../components/Logo.jsx"));
const Image = lazy(() => import("../components/Image.jsx"));
const LoginForm = lazy(() => import("../components/LoginForm.jsx"));

const Login = () => {
    const [splash, setSplash] = useState(true);

    useEffect(() => {
        const hasShownSplash = sessionStorage.getItem("hasShownSplash");

        if (!hasShownSplash) {
            const timer = setTimeout(() => {
                setSplash(false);
                sessionStorage.setItem("hasShownSplash", "true");
                document.body.style.overflow = "auto";
            }, 2000);

            document.body.style.overflow = "hidden";

            return () => {
                clearTimeout(timer);
                document.body.style.overflow = "auto";
            };
        } else {
            setSplash(false);
        }
    }, []);

    return (
        <AnimatePresence>
            {splash ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="w-full h-[100vh] flex items-center justify-center overflow-hidden"
                >
                    <section className="flex flex-row items-center">
                        <LazyLoadImage src="/logo.jpeg" alt="logo" effect="blur" className="w-[15rem] h-[15rem]" />
                        <h1 className="text-6xl font-semibold tracking--wide">StaffSync</h1>
                    </section>
                </motion.div>
            ) : (
                <Suspense fallback={<></>}>
                    <motion.section
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="flex flex-row justify-between w-full h-[100vh]" // Ensuring full height for the main content
                    >
                        <div className="flex-1 w-[60%]">
                            <div className="xl:px-8 lg:px-6 sm:px-4 ssm:px-2 py-4">
                                <Logo />
                            </div>
                            <LoginForm />
                        </div>
                        <div className="flex-none w-[40%] lg:flex hidden justify-end">
                            <Image />
                        </div>
                    </motion.section>
                </Suspense>
            )}
        </AnimatePresence>
    );
};

export default Login;
