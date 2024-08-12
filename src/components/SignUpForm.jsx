import React from "react";
import { IoIosMail } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";

const SignUpForm = () => {
    const [pass, setPass] = useState(false);

    const togglePass = () => {
        setPass((prevItemm) => !prevItemm);
    };

    return (
        <section className="flex flex-col items-center py-[5rem] gap-12">
            <h1 className="text-4xl font-medium">Welcome Back</h1>
            <div className="flex flex-col items-center gap-6">
                <div className="bg-lightgrey px-8 py-4 rounded-full flex items-center gap-12">
                    <input type="email" placeholder="Email" className="text-dark bg-inherit outline-none border-none text-lg" />
                    <IoIosMail className="text-xl" />
                </div>
                <div className="bg-lightgrey px-8 py-4 rounded-full flex items-center gap-12">
                    <input type={`${pass ? "text" : "password"}`} placeholder="Password" className="text-dark bg-inherit outline-none border-none text-lg" />
                    {pass ? <IoIosClose className="text-xl cursor-pointer" onClick={() => togglePass()} /> : <IoEye className="text-xl cursor-pointer" onClick={() => togglePass()} />}
                </div>
            </div>
            <div className="flex flex-row items-center gap-8">
                <div className="flex items-center gap-2 text-xl font-medium">
                    <input type="radio" id="student" name="sign" />
                    <label htmlFor="student">Student</label>
                </div>
                <div className="flex items-center gap-2 text-xl font-medium">
                    <input type="radio" id="teacher" name="sign" />
                    <label htmlFor="teacher">Teacher</label>
                </div>
            </div>
            <button aria-label="SignIn" className="bg-dark text-lg font-medium px-12 py-4 text-light rounded-full">
                Sign In
            </button>
            <div className="flex flex-col items-center gap-1">
                <h2>Dont have an account ?</h2>
                <h3 className="hover:underline cursor-pointer underline-offset-[3px]">Sign Up</h3>
            </div>
        </section>
    );
};

export default SignUpForm;
