import React from "react";
import BoosterHeader from "../layouts/boosters/BoosterHeader";
import { Outlet } from "react-router";


const BoosterMainPage = () => {
    return (
        <div className="flex flex-col h-full">
            <BoosterHeader/>
            <Outlet />
        </div>
    );
};

export default BoosterMainPage;