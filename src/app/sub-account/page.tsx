import React from 'react';
import {auth, signOut} from "@/auth";
import {Button} from "@/components/ui/button";

const SubAccountPage = async () => {
    const session = await auth();

    return (
        <div className='flex justify-between'>
            <div>Sub-Account Page:
                {JSON.stringify(session)}
            </div>
            <form action={async () => {
                'use server'

                await signOut()
            }}>
                <Button type='submit'>
                    Sign Out
                </Button>
            </form>
        </div>
    );
};

export default SubAccountPage;