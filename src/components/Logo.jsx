import React from "react";
import logo from "../assets/logo.jpg";
function Logo({ width = "100px" }) {
    return (
        <div className="flex">
            <img
                style={{
                    width,
                    border: "2px solid black",
                    borderRadius: "50%",
                    boxShadow: "10px 10px 25px -10px",
                }}
                src={logo}
                alt="Logo"
            />
            <h1 className="align-middle my-auto mx-3 text-2xl font-bold">
                Kanvas
            </h1>
        </div>
    );
}

export default Logo;
