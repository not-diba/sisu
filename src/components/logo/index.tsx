import React from 'react';
import {FaWolfPackBattalion} from "react-icons/fa6";
import {Dosis} from "next/font/google";

const dosisFont = Dosis({subsets: ["latin"]});

const Sisu = () => {
    return (
        <div className="flex flex-row pr-4 items-center gap-3">
            <div className="text-4xl"><FaWolfPackBattalion/></div>
            <p className={`text-2xl ${dosisFont.className}`}>Sisu<span className="text-red-600 font-black pl-3">.</span>
            </p>
        </div>
    );
};

export default Sisu;