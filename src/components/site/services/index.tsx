import React from 'react';
import Image from "next/image";
import ServiceItem from "@/components/site/services/partials/service_item";
import {Button} from "@/components/ui/button";

const Services = () => {
    return (
        <div className="flex flex-col w-full h-fit justify-center items-center border-y border-gray-300 py-16 px-32 gap-12">
            <h3 className="font-extrabold text-black text-3xl text-start pb-4">
                Integrate with different services
            </h3>
            <div className="grid grid-cols-4 gap-6 justify-center items-center">
                <ServiceItem
                    content={<Image src="/assets/mpesa.png" alt="m-pesa" width={100} height={50}/>}
                />
                <ServiceItem
                    content={<Image src="/assets/shopify.png" alt="shopify" width={100} height={50}/>}
                />
                <ServiceItem
                    content={<Image src="/assets/slack.png" alt="slack" width={100} height={50}/>}
                />
                <ServiceItem
                    content={<Image src="/assets/whatsapp.png" alt="whatsapp" width={140} height={70}/>}
                />
                <ServiceItem
                    content={<Image src="/assets/arduino.png" alt="arduino" width={70} height={35}/>}
                />
                <ServiceItem
                    content={<Image src="/assets/gsm.png" alt="gsm" width={80} height={40}/>}
                />
                <ServiceItem
                    content={<Image src="/assets/android.png" alt="android" width={50} height={25}/>}
                />
                <ServiceItem
                    content={<Image src="/assets/iphone.png" alt="iphone" width={100} height={50}/>}
                />
            </div>
            <Button className="rounded-full text-sm py-6 w-fit" size={'lg'}>
                See all integrations
            </Button>
        </div>
    );
};

export default Services;