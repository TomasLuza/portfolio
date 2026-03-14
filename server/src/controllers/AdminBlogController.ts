import type { Request, Response, NextFunction } from "express"
import { body, matchedData, validationResult, param } from "express-validator"
import { prisma } from "../../lib/prisma"

export const index = [
    async (req: Request, res: Response, next: NextFunction ) => {
        try {
            const blogs = await prisma.blog.findMany()
            return res.status(201).json(blogs)
        } catch (error) {
            next(error)
        }
    }
]

const idValidator = [
    param("id").toInt().isInt().withMessage("Neteisingas ID")
];

export const show = [
    ...idValidator,
    async (req: Request, res: Response, next: NextFunction ) => {
        const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({
                success: false,
                message: "Duomenų klaida",
                error: errors.array()
            })
        }

        const { id } = matchedData(req)
        
        try {
            const blog = await prisma.blog.findUnique({
                where: { id: id }
            })

            if(!blog){
                return res.status(400).json({
                    success: false,
                    message: "Blogas nerastas"
                })
            }

            return res.status(200).json(blog)
        } catch (error) {
            console.log(error);
            next(error)
        }
    }
]

const storeValidator = [
    body("title")
    .trim()
    .escape()
    .isString()
    .withMessage("Pavadinimas turi būti tekstas")
    .notEmpty()
    .withMessage("Pavadinimas yra privalomas"),
    body("content")
    .trim()
    .escape()
    .isString()
    .withMessage("Tekstas turi būti sudarytas vien tik iš raidžių")
    .notEmpty()
    .withMessage("Laukelis yra privalomas")
]

export const create = [
    ...storeValidator,
    async ( req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(401).json({
                success: false,
                message: "Duomenų klaida",
                error: errors.array()
            })
        }
        const { title, content } = matchedData(req)

        try {
            const createBlog = await prisma.blog.create({
               data: { title: title,
                content: content
               
            }
            });
            return res.status(201).json(createBlog)
        } catch (error) {
            next(error)
        }
    }
]

export const update = [
    ...storeValidator,
    ...idValidator,
    async( req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req)
            if(!errors.isEmpty()){
                return res.status(400).json({
                    success: false,
                    message: "Duomenų klaida",
                    error: errors.array()
                })
            }
            const { title, content, id } = matchedData(req)

            try {
                const updateBlog = await prisma.blog.update({
                    where : { id: id},
                    data: { title: title,
                            content: content
                     }
                });
                return res.status(200).json(updateBlog)
            } catch (error) {
                console.log(error);
                next(error)
            }
    }
]

export const destroy = [
    ...idValidator,
    async (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({
                success: false,
                message: "Duomenų klaida",
                error: errors.array()
            })
        }

        const { id } = matchedData(req)

        try {
            await prisma.blog.delete({
                where: { id: id }
            })
            return res.status(204).send()
        } catch (error) {
            next(error)
        }
    }
]
// model blog
//   title     String
//   content   String @db.Text
//   published Boolean @default(false)
//   author    user    @relation(fields: [id], references: [id])