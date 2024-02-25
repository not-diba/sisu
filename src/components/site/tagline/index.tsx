import React from 'react';
import Image from "next/image";
import {RxArrowRight} from "react-icons/rx";
import {Button} from "@/components/ui/button";

const Tagline = () => {
    return (
        <div className="flex w-full h-fit justify-center items-center border-y border-gray-300 py-16 px-32">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <Image
                    src="/assets/tagline.jpeg"
                    alt="Sisu customer"
                    width={500}
                    height={1000}
                    className="border border-gray-500 rounded-xl"
                />
                <div className="flex flex-col w-10/12 gap-4">
                    <h1 className="font-extrabold text-black text-5xl text-start pb-4">
                        Build your brand efficiently now.
                    </h1>
                    <p className="text-gray-500 pb-4">
                        Impedit sit sunt quaerat, odit,
                        tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                        quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos.
                    </p>
                    <Button className="rounded-full text-sm py-6 w-fit" size={'lg'}>
                        Get Started
                        <RxArrowRight className="ml-4 text-base"/>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Tagline;