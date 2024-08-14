import React from "react";
import { lazy, Suspense } from "react";
import { motion } from "framer-motion";

const Logo = lazy(() => import("../components/Logo.jsx"));
const Image = lazy(() => import("../components/Image.jsx"));
const SignUpForm = lazy(() => import("../components/SignUpForm.jsx"));

const SignUp = () => {
    return (
        <Suspense fallback={<></>}>
            <section className="flex flex-row justify-between">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut" }} className="flex-1 w-[60%]">
                    <div className="xl:px-8 lg:px-6 sm:px-4 ssm:px-2 py-4">
                        <Logo />
                    </div>
                    <SignUpForm />
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut" }} className="flex-none w-[40%] lg:flex hidden justify-end">
                    <Image />
                </motion.div>
            </section>
        </Suspense>
    );
};

export default SignUp;
