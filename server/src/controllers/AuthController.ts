import type { Request, Response, NextFunction } from "express"
import { body, matchedData, validationResult } from "express-validator"
import { prisma } from "../../lib/prisma";
import bcrypt from "bcryptjs"
import { newToken } from "../middleware/passport";

const loginValidator = [
    body("email")
    .trim()
    .escape()
    .isEmail()
    .withMessage("El.paštas turi būti galiojantis")
    .notEmpty()
    .withMessage("El.paštas yra privalomas"),
    body("password")
    .trim()
    .escape()
    .isString()
    .withMessage("Slaptažodis turi būti tekstas")
    .notEmpty()
    .withMessage("Slaptažodis yra privalomas")
    .isLength({ min: 8 })
    .withMessage("Slaptažodis turi būti bent 8 simbolių")
]

export const login = [
    ...loginValidator,
    async ( req: Request, res: Response, next: NextFunction ) => {
        const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(401).json({
                success: false,
                message: "Duomenų Klaida!",
                error: errors.array()
            })
        }

        const { email, password } = matchedData(req)

        try {
            const user = await prisma.user.findUnique({
                where: {
                    email: email
                }
            })

            if(!user){
                return res.status(401).json({
                    success: false,
                    message: "Neteisingas El.paštas arba Slaptažodis"
                })
            }

            const isPasswordValid = bcrypt.compare(password, user.password)

            if(!isPasswordValid){
                return res.status(401).json({
                    success: false,
                    message: "Neteisignas El.paštas arba Slaptažodis"
                })
            }

            console.log(user);
            

            const token = newToken(user)

            const { password: _, ...userData } = user
            


            res.cookie('authToken', token, {
                httpOnly: false,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict'
            })

            res.cookie('userInfo', JSON.stringify(userData), {
                httpOnly: false,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict'
            })

            return res.status(200).json({
                success: true,
                message: "Prisijungta Sėkimingai!"
            })

        } catch (error) {
            console.log("Login Error: ", error);
            return next(error)
        }
    }
]

