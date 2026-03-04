import { prisma } from "../lib/prisma";
import { roles } from "../generated/prisma/client";
import * as bcrypt from "bcryptjs";

async function main() {

    const hashedPassword = await bcrypt.hash("password!", 12)

    const owner = await prisma.user.create({
        data: {
            email: "owner@gmail.com",
            name: "Owner",
            password: hashedPassword,
            role: roles.OWNER,

        },
    });
    console.log("CREATED OWNER", owner);
    

    const admin = await prisma.user.create({
        data: {
            email: "admin@gmail.com",
            name: "Admin",
            password: hashedPassword,
            role: roles.ADMIN,

        },
    });
    console.log("CREATED OWNER", admin);

        const user = await prisma.user.create({
        data: {
            email: "User@gmail.com",
            name: "User",
            password: hashedPassword,
        },
    });
    console.log("CREATED OWNER", user);
}

    main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });