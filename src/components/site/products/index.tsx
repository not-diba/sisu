import React from 'react';
import {CgWebsite} from "react-icons/cg";
import {RxMobile} from "react-icons/rx";
import {AiOutlineApi} from "react-icons/ai";
import {BiLike} from "react-icons/bi";
import {RiSeoLine} from "react-icons/ri";
import { PiCircuitry } from "react-icons/pi";


import ProductItem from "@/components/site/products/partials/product_item";


const Products = () => {
    return (
        <div className="flex w-full h-fit justify-center items-center border-y border-gray-300 py-16 px-32">
            <div className="grid grid-cols-3 gap-20 justify-center text-start">
                <ProductItem title={'Website builder'}
                             text={"Quaerat provident commodi consectetur veniam similique ad earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore suscipit quas?"}
                             icon={<CgWebsite/>}
                />
                <ProductItem title={'Mobile Application'}
                             text={"Quaerat provident commodi consectetur veniam similique ad earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore suscipit quas?"}
                             icon={<RxMobile/>}
                />
                <ProductItem title={'Social Media Managment'}
                             text={"Quaerat provident commodi consectetur veniam similique ad earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore suscipit quas?"}
                             icon={<BiLike/>}
                />
                <ProductItem title={'SEO'}
                             text={"Quaerat provident commodi consectetur veniam similique ad earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore suscipit quas?"}
                             icon={<RiSeoLine/>}
                />
                <ProductItem title={'APIs'}
                             text={"Quaerat provident commodi consectetur veniam similique ad earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore suscipit quas?"}
                             icon={<AiOutlineApi/>}
                />
                <ProductItem title={'IOT & Electronics'}
                             text={"Quaerat provident commodi consectetur veniam similique ad earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore suscipit quas?"}
                             icon={<PiCircuitry/>}
                />
            </div>
        </div>
    );
};

export default Products;