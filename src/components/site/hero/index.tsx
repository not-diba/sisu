import React from 'react';
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {RxArrowRight} from "react-icons/rx";

export const Hero = () => {
    return (
        <div className="flex flex-col w-full h-fit justify-center items-center">
            <h1 className="font-extrabold text-black text-8xl text-center pb-4 w-2/3">
                Manage your business digitally.
            </h1>

            <div className="text-xl text-gray-500 text-center font-medium w-3/4 pt-4">
                Sisu gives you tools create a website and manage you business.
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit
            </div>

            <Button className="rounded-full text-lg py-6 mt-10 mb-20" size={'lg'}>
                Get Started
                <RxArrowRight className="ml-4 text-xl"/>
            </Button>
            <Image
                src={'/assets/preview.png'}
                alt="banner image"
                height={1200}
                width={1200}
                className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
            />
        </div>
    );
};

