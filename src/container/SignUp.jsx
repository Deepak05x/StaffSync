import React from "react";
import { lazy, Suspense } from "react";

const Logo = lazy(() => import("../components/logo.jsx"));
const Image = lazy(() => import("../components/Image.jsx"));
const SignUpForm = lazy(() => import("../components/SignUpForm"));

const SignUp = () => {
    return (
        <section className="flex flex-row justify-between">
            <div className="flex-1">
                <Suspense fallback={<div>Loading...</div>}>
                    <Logo />
                    <SignUpForm />
                </Suspense>
            </div>
            <div className="flex-none">
                <Suspense fallback={<div>Loading...</div>}>
                    <Image />
                </Suspense>
            </div>
        </section>
    );
};

export default SignUp;
