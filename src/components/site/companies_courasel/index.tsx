import React from 'react';
import Image from "next/image";

const CompaniesCourasel = () => {
    const imageSources = [
        "/assets/svgs/facebook.svg",
        "/assets/svgs/disney.svg",
        "/assets/svgs/airbnb.svg",
        "/assets/svgs/apple.svg",
        "/assets/svgs/spark.svg",
        "/assets/svgs/samsung.svg",
        "/assets/svgs/quora.svg",
        "/assets/svgs/sass.svg"
    ];

    const renderImageList = () => {
        return (
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                {imageSources.map((src, index) => (
                    <li key={index}>
                        <Image width={100} height={50} src={src} alt={src}/>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div className="w-full py-16 border-y border-gray-300">
            <h2 className="w-full h-fit text-center text-xl font-extrabold">Trusted by companies of all sizes</h2>
            <div className="w-full inline-flex flex-nowrap pt-8 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
                {renderImageList()}
                {renderImageList()}
                {renderImageList()}
            </div>
        </div>
    );
};

export default CompaniesCourasel;
