import React from 'react';
import {FaWolfPackBattalion} from "react-icons/fa6";
import {Dosis} from "next/font/google";
import {cn} from "@/lib/utils";

const dosisFont = Dosis({subsets: ["latin"]});

interface LogoProps {
    color?: 'white' | 'black'
}

const Sisu = ({color = 'black'}: LogoProps) => {
    const logoColor = {
        'text-black' : color === 'black',
        'text-white' : color === 'white'
    }
    return (
        <div className="flex flex-row pr-4 items-center gap-3">
            <div className={cn("text-4xl", logoColor)}><FaWolfPackBattalion/></div>
            <p className={cn(`text-2xl ${dosisFont.className}`, logoColor)}>Sisu<span className={cn("text-red-600 font-black pl-3")}>.</span>
            </p>
        </div>
    );
};

export default Sisu;