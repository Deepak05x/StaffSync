import React from "react";
import { lazy, Suspense } from "react";

const Logo = lazy(() => import("../components/logo.jsx"));
const Image = lazy(() => import("../components/Image.jsx"));
const LoginForm = lazy(() => import("../components/LoginForm.jsx"));

const Login = () => {
    return (
        <section className="flex flex-row justify-between">
            <div className="flex-1 w-[60%]">
                <Suspense fallback={<div>Loading...</div>}>
                    <Logo />
                    <LoginForm />
                </Suspense>
            </div>
            <div className="flex-none w-[40%] lg:flex hidden justify-end">
                <Suspense fallback={<div>Loading...</div>}>
                    <Image />
                </Suspense>
            </div>
        </section>
    );
};

export default Login;
