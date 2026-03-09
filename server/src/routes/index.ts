import { Router } from "express"
import authRouter from "./AuthRouter"
import blogRouter from "./BlogRouter"

const router = Router();

router.use("/auth", authRouter)
router.use("/blogs", blogRouter)

export { router }