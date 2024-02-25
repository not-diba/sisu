import React from 'react';
import {Button} from "@/components/ui/button";
import Logo from "@/components/logo";

export const Navigation = () => {
    return (
        <nav className="flex flex-row justify-between px-32 pt-6 items-center">
            <ul className="flex flex-row gap-10 items-center text-base">
                <Logo />
                <li>Products</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Support</li>
            </ul>
            <div className="flex items-center gap-3">
                <Button>Login</Button>
                <>theme</>
            </div>
        </nav>
    );
};