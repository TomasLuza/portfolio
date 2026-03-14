import { Router } from "express";
import * as LandingBlogsController from "../controllers/LandingBlogsController";


const router = Router();

router.get("/", LandingBlogsController.index)


export default router;