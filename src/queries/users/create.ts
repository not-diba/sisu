import prisma from "@/lib/db";
import {User} from "@prisma/client";


export const createUser = async () => {
    const user: User = await prisma.user.create({
        data: {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@email.com'
        }
    })
    return user
}