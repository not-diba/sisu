import React from 'react';
import Logo from "@/components/logo";
import { VscLocation } from "react-icons/vsc";
import { PiPhoneLight } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
    return (
        <div className="flex flex-col border-y border-gray-300 pt-10">
            <div className="flex flex-row justify-between items-center px-32">
                <div className="flex flex-col">
                    <Logo/>
                    <h3 className="font-extrabold text-black text-3xl text-start pt-8 w-2/3 pb-20">
                        We help your business grow fast, so get started.
                    </h3>
                </div>
                <div className="flex flex-col gap-4 w-1/4">
                    <div className="flex items-center gap-1">
                        <VscLocation className="text-2xl"/>
                        <p>Nairobi, Kenya</p>
                    </div>
                    <div className="flex items-center gap-1 justify-start">
                        <PiPhoneLight className="text-2xl"/>
                        <p>+254 721 369 488</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <TfiEmail className="text-2xl"/>
                        <p>sisu@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-between items-center text-xs border-y border-gray-300 px-32 py-4">
                <ul className="flex flex-row gap-10 items-center">
                    <li>About</li>
                    <li>Features</li>
                    <li>Support</li>
                    <li>Coming Soon</li>
                </ul>
                <p className="flex items-center">
                    © Copyright {new Date().getFullYear()}, All rights reserved by Sisu.
                </p>
            </div>
        </div>
    );
};

export default Footer;