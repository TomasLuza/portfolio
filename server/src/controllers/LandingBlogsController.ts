import type { Request, Response, NextFunction } from "express"
import { prisma } from "../../lib/prisma";

export const index = [
    async (req: Request, res: Response, next: NextFunction) =>{
        try {
         const blogs = await prisma.blog.findMany({
             where: { published: true }
         })
         res.status(200).json(blogs)
        } catch (error) {
            console.log(error);
            next(error)
        }
    }
]