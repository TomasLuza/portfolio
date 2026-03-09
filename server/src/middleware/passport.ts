import type { NextFunction, Request, Response } from "express";
import passport from "passport";
import { Strategy as JwtStrategy, type StrategyOptions} from "passport-jwt";
import { prisma } from "../../lib/prisma"
import type { user } from "../../generated/prisma/client";
import jwt from "jsonwebtoken"

export const JWT_SECRET = process.env.JWT_SECRET;
    if(!JWT_SECRET){
        throw new Error("JWT_SECRET is not defined in .env file")
    }

 const JWT_EXPIRES_IN = "1h"

 const cookieExtractor = ( req: Request ) => {
    let jwt = null;
     if( req && req.cookies ){
        jwt = req.cookies['authToken']
     }
     return jwt;
 };

 const jwtOptions: StrategyOptions = {
    jwtFromRequest: cookieExtractor,
    secretOrKey: JWT_SECRET
 }

 passport.use(
    new JwtStrategy( jwtOptions, async ( payload: any, done: any ) => {
        try {
            const user = await prisma.user.findUnique({
                where: {
                    id: payload.id,
                    role: payload.role
                }
            })
            if(user){
               const { password, ...userWithoutPassword } = user;
               return done(null, userWithoutPassword)
            }

            return done(null, false)
        } catch (error) {
            return done(error, false)
        }
    })
 )

 export const newToken = (user: user) => {
    jwt.sign(
        {
            id: user.id,
            role: user.role
        },
        JWT_SECRET,
        { expiresIn: JWT_EXPIRES_IN }
    )
 }

export const isAuth = ( req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('jwt', { session: false }, (error : any, user: any) => {
        if(error){
            return res.status(500).json({
             error: "Internal Server Error"   
            })
        }

        if(!user){
            return res.status(401).json({
                error: "Unauthorized",
                message: "Prašome Prisijungti"
            });
        }
        req.user = user;
        return next();
    })(req, res ,next);
};

export const isAdmin = ( req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('jwt', { session: false }, (error: any, user: any) => {
        if(error){
            return res.status(500).json({
                error: "Internal Server Error"
            })
        }

        if(!user){
            return res.status(401).json({
                error: "Unauthorized",
                message: "Prašome Prisijungti"
            })
        }

        if(user.role !== "ADMIN"){
            return res.status(403).json({
                error: "Forbidden",
                message: "Neturite prieigos teisių"
            });
        }
        req.user = user
        return next()
    })(req, res, next)
}

export const isOwner = ( req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('jwt', { session: false}, ( error: any, user: any) => {
        if(error){
            return res.status(500).json({
                error: "Internal Server Error"
            })
        }

        if(!user){
            return res.status(401).json({
                error: "Unauthorized",
                message: "Prašome Prisijungti"
            })
        }

        if(user.role !== "OWNER"){
            return res.status(403).json({
                error: "Forbidden",
                message: "Neturite prieigos teisių"
            })
        }
        req.user = user
        return next()
    })(req, res, next)
}