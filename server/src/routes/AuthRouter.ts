import { Router } from "express";
import * as AuthController from "../controllers/AuthController";
import type { Request, Response } from "express";

const router = Router();

router.post("/login", AuthController.login)


router.get("/test", ( req: Request, res: Response) => {
    return res.status(200).json(
        "FETCH WAS SUCCESFULL"
)
})

export default router;