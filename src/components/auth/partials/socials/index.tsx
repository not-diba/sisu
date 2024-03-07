import React from 'react';
import {Button} from "@/components/ui/button";
import {FcGoogle} from "react-icons/fc";
import {FaGithub} from "react-icons/fa6";

export const Socials = () => {
    return (
        <div className='flex flex-row justify-between w-full gap-4'>
            <Button variant={'outline'} className='flex w-full py-6 items-center gap-2'>
                            <span>
                                <FcGoogle className='size-5'/>
                            </span>
                Google
            </Button>
            <Button variant={'outline'} className='flex w-full py-6 items-center gap-2'>
                            <span>
                                <FaGithub className='size-5'/>
                            </span>
                Github
            </Button>
        </div>
    );
};