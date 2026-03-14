import { Router } from "express"
import authRouter from "./AuthRouter"
import adminblogRouter from "./AdminBlogRouter"
import landingblogRouter from "./LandingBlogsRouter";

const router = Router();

router.use("/auth", authRouter)
router.use("/blogs", landingblogRouter)

// ADMIN ROUTES
router.use("/admin/blogs", adminblogRouter)

export { router }