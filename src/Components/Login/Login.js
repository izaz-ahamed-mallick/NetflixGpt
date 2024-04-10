import React, { useRef, useState } from "react";
import { CheckFromInput } from "../Formvalidate/Validate";

const Login = () => {
    const [ischangForm, setischangForm] = useState(false);
    const [errorMessage, seterrorMessage] = useState(null);
    const email = useRef();
    const password = useRef();
    const fullName = useRef();

    const handleSignup = () => {
        setischangForm(!ischangForm);
    };

    const handleForm = (e) => {
        e.preventDefault();
        const vlidateMessage = CheckFromInput(
            email.current.value,
            password.current.value
        );
        seterrorMessage(vlidateMessage);
    };

    return (
        <div className="bg-black bg-opacity-70  w-[450px] p-12 rounded-xl ">
            <form>
                <h1 className="text-3xl font-semibold mb-3 text-white">
                    {ischangForm ? "Sign Up" : "Sign In"}
                </h1>
                {ischangForm && (
                    <input
                        ref={fullName}
                        type="text"
                        className=" mt-2 w-full text-white rounded-lg bg-transparent border p-3 "
                        placeholder="Full Name"
                        required
                    />
                )}

                <input
                    required
                    ref={email}
                    className=" mt-3 w-full text-white rounded-lg bg-transparent border p-3 "
                    type="email"
                    placeholder="Email"
                />
                <input
                    required
                    ref={password}
                    className=" mt-3 rounded-lg w-full text-white bg-transparent border p-3 "
                    type="password"
                    placeholder="Password"
                />
                <p className="text-red-600 text-lg ">{errorMessage}</p>
                <button
                    onClick={handleForm}
                    type="submit"
                    className=" font-semibold mt-4 border-none w-full rounded-lg opacity-100  bg-red-600 text-white  p-3 "
                >
                    {ischangForm ? "Sign Up" : "Sign In"}
                </button>
            </form>
            <p className="text-white mt-6">
                {ischangForm ? "Already have an account?" : "New to Netflix?"}{" "}
                <button onClick={handleSignup} className="hover:text-red-600">
                    {ischangForm ? "Sign In now" : "Sign up now"}.
                </button>
            </p>
        </div>
    );
};

export default Login;
