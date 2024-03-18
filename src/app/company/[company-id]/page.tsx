import React from 'react';
import {auth, signOut} from '@/auth';
import {Button} from "@/components/ui/button";

const CompanyPage = async () => {
    const session = await auth();

    return (
        <div className='flex justify-between'>
            <div>User Page:
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

export default CompanyPage;