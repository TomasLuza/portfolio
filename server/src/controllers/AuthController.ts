import type { Request, Response, NextFunction } from "express"
import { validationResult, matchedData, body } from "express-validator"
import { prisma } from "../../lib/prisma"
import bcrypt from "bcryptjs"

export const loginValidator = [
    body("email")
    .trim()
    .escape()
    .isEmail()
    .withMessage("El.paštas turi būti galiojantis.")
    .notEmpty()
    .withMessage("El.paštas yra privalomas."),
    body("password")
    .trim()
    .escape()
    .isString()
    .withMessage("Slaptažodis privalo būti tekstas")
    .isLength({min: 8})
    .withMessage("Slaptažodis turi buti sudarytas bet iš 8 simbolių")
    .notEmpty()
    .withMessage("Slaptažodis yra privalomas")
]


export const login = [
  ...loginValidator,
  async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(401).json({
            success: false,
            message: "Duomenų klaida.",
            errors: errors.array()
        })
    }

    const { email, password } = matchedData(req)

    try {
        const user = await prisma.user.findUnique({
        where: { email }
    })

    if(!user) {
        return res.status(401).json({
            success: false,
            message: "Neteisingas El.paštas arba Slaptažodis."
        })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if(!isPasswordValid){
        return res.status(401).json({
            succes: false,
            message: "Neteisingas El.paštas arba Slaptažodis."
        })
    }

    res.status(200).json({
        succes: true,
        message: "Prisijungta Sėkmingai."
    })
    } catch (error) {
        console.log("Login Error: ", error);
        next(error)   
    }
  }
]
