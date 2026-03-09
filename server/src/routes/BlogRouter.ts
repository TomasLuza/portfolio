import { Router } from "express";
import * as BlogController from "../controllers/BlogController";

const router = Router()

router.get("/", BlogController.index)
router.post("/create", BlogController.create)
router.get("/:id", BlogController.show)
router.post("/:id", BlogController.update)
router.delete("/:id", BlogController.destroy)

export default router