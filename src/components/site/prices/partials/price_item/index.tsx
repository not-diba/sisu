import React from 'react';
import {RxCheck} from "react-icons/rx";
import {Button} from "@/components/ui/button";

const PriceItem = (
    {price, description, pointers, variant = "outline"}:
        { price: string, description: string, pointers: string[], variant?: "default" | "outline" }) => {
    return (
        <div className="flex flex-col border border-gray-300 px-6 py-12 rounded-lg justify-center items-center w-1/3">
            <p className="flex w-full justify-center items-baseline text-4xl font-black">KES. {price}
                <span className="text-lg items-baseline">/month</span>
            </p>
            <p className="text-gray-500 text-center pt-6 pb-10">
                {description}
            </p>
            <ul className="flex flex-col w-full border-t border-gray-300 gap-4 pt-10">
                {
                    pointers.map((pointer, index) => (
                        <li key={index} className="flex gap-2 items-start">
                            <span className="text-xl"><RxCheck/></span>
                            {pointer}
                        </li>
                    ))
                }
            </ul>
            <Button className="w-full mt-8 py-6 text-lg" variant={variant}>Get Started</Button>
        </div>
    );
};

export default PriceItem;