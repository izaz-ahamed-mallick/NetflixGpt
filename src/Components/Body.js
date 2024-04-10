import React from "react";
import Header from "./Header";
import Login from "./Login/Login";

const Body = () => {
    return (
        <div className=" bg-bodyImage bg-cover bg-center  w-full h-screen ">
            <Header />
            <div className="  h-[70%] flex items-center justify-center">
                <Login />
            </div>
        </div>
    );
};

export default Body;
