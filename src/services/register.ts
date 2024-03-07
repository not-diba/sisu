'use server'

import * as z from 'zod'
import bcrypt from 'bcryptjs'
import {RegisterSchema} from "@/schemas";
import prisma from "@/lib/db";
import {getUserByEmail} from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) {
        return {error: 'Invalid fields'}
    }

    const {firstName, lastName, email, password} = validatedFields.data;

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
        return {error: 'User already exists'}
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
        data: {
            firstName,
            lastName,
            email,
            password: hashedPassword,
        }
    })

    // TODO: Send verification token email

    return {success: 'User created'}
}