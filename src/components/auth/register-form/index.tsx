'use client'

import React, {useState, useTransition} from 'react';
import * as z from 'zod';
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

import {RegisterSchema} from "@/schemas";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {Socials} from "@/components/auth/partials/socials";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {FormAlertMessage} from "../shared/form-message";
import {register} from "@/services/register";

type AlertMessageState = {
    messageType: 'danger' | 'success';
    message: string | undefined;
};


export const RegisterForm = () => {
    const [isPending, startTransition] = useTransition();
    const [alertMessage, setAlertMessage] = useState<AlertMessageState>({
        messageType: 'danger',
        message: ''
    })
    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: '',
            password: '',
            firstName: '',
            lastName: ''
        }
    })

    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        setAlertMessage((prevSate) => ({
            ...prevSate,
            messageType: 'danger',
            message: ''
        }));

        startTransition(() => {
            register(values)
                .then((data) => {
                    if (!!data.error) {
                        setAlertMessage((prevSate) => ({
                            ...prevSate,
                            messageType: 'danger',
                            message: data.error
                        }));
                    }
                    if (!!data.success) {
                        setAlertMessage((prevSate) => ({
                            ...prevSate,
                            messageType: 'success',
                            message: data.success
                        }));
                    }
                })
        })
    }

    return (
        <div className="flex flex-col h-full w-full">
            <div className="flex justify-end underline underline-offset-4">
                <a className='text-muted-foreground hover:text-primary' href='/login'>
                    Already have an account?
                </a>
            </div>
            <div className="flex flex-col h-full w-full self-center justify-center space-y-6 max-w-[500px]">
                <div className="flex flex-col space-y-2 text-center"><h1
                    className="text-3xl font-semibold tracking-tight">Create an account</h1><p
                    className="text-base text-muted-foreground">Enter your details below to register</p></div>
                <div className="grid gap-6">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                            <div className='space-y-4'>
                                <FormField
                                    control={form.control}
                                    name='firstName'
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>First Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    disabled={isPending}
                                                    className='py-6'
                                                    {...field}
                                                    placeholder='First Name'
                                                    type='text'
                                                />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name='lastName'
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Last Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    disabled={isPending}
                                                    className='py-6'
                                                    {...field}
                                                    placeholder='Last Name'
                                                    type='text'
                                                />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name='email'
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                    disabled={isPending}
                                                    className='py-6'
                                                    {...field}
                                                    placeholder='example@email.com'
                                                    type='email'
                                                />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name='password'
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <Input
                                                    disabled={isPending}
                                                    className='py-6'
                                                    {...field}
                                                    placeholder='******'
                                                    type='password'
                                                />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormAlertMessage messageType={alertMessage.messageType} message={alertMessage.message}/>
                            <Button
                                disabled={isPending}
                                className='w-full py-6'
                                type='submit'
                            >
                                Create an account
                            </Button>
                        </form>
                    </Form>
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center"><span className="w-full border-t"></span>
                        </div>
                        <div className="relative flex justify-center text-sm uppercase"><span
                            className="bg-background px-2 text-muted-foreground">Or continue with</span></div>
                    </div>
                    <Socials/>
                </div>
                <p className="px-8 text-center text-sm text-muted-foreground">By clicking continue, you agree to our <a
                    className="underline underline-offset-4 hover:text-primary" href="/terms">Terms of
                    Service</a> and <a
                    className="underline underline-offset-4 hover:text-primary" href="/privacy">Privacy Policy</a>.</p>
            </div>
        </div>
    );
};