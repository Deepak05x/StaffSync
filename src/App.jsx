import React from "react";
import ThemeProvider from "./context/ThemeProvider";
import { Route, Routes } from "react-router-dom";
import SignUp from "./container/SignUp";

const App = () => {
    return (
        <main className="w-full min-h-screen bg-white dark:bg-black">
            <ThemeProvider>
                <Routes>
                    <Route element={<SignUp />} path="/signup" />
                </Routes>
            </ThemeProvider>
        </main>
    );
};

export default App;
