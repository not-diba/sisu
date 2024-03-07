import React from 'react';
import Logo from "@/components/logo";

const AuthLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <div className="w-full h-full grid grid-cols-2">
            <div className="flex flex-col justify-between w-full h-full bg-zinc-900 p-16">
                <Logo color="white" />
                <p className='text-xl text-white'>
                    Commodi minima excepturi repudiandae velit hic maxime
                    doloremque. Quaerat provident commodi consectetur veniam similique ad
                    earum omnis ipsum saepe.
                </p>
            </div>
           <div className="flex flex-col w-full h-full p-16">
               <div className="flex h-full justify-center items-center">
                   {children}
               </div>
           </div>
        </div>
    );
};

export default AuthLayout;