import React from "react";
import ThemeProvider from "./context/ThemeProvider";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Login = lazy(() => import("./container/Login.jsx"));
const SignUp = lazy(() => import("./container/SignUp.jsx"));

const App = () => {
    return (
        <main className="w-full min-h-screen bg-white dark:bg-black">
            <ThemeProvider>
                <Suspense fallback={<div>Loading</div>}>
                    <Routes>
                        <Route element={<Login />} path="/login" />
                        <Route element={<SignUp />} path="/signup" />
                    </Routes>
                </Suspense>
            </ThemeProvider>
        </main>
    );
};

export default App;
