'use client'

import React from 'react';
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

interface LoginButtonProps {
    children: React.ReactNode
    mode?: 'modal' | 'redirect'
    asChild?: boolean
}

export const LoginButton = ({
                                children,
                                mode = 'redirect',
                                asChild
                            }: LoginButtonProps) => {

    const router = useRouter();

    const onClick = () => {
        router.push('/login')
    }

    return (
        <div onClick={onClick}>
            {children}
        </div>
    );
};

