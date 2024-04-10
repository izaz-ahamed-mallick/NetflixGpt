import React from "react";
import logo from "../Images/Netflix_Logo_PMS.png";

const Header = () => {
    return (
        <div className="ml-16">
            <img className="w-[250px]" src={logo} alt="logo" />
        </div>
    );
};

export default Header;
