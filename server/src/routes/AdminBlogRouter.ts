import { Router } from "express";
import * as AdminBlogController from "../controllers/AdminBlogController";
import { isAdminOrOwner } from "../middleware/passport";

const router = Router()

router.get("/", isAdminOrOwner, AdminBlogController.index)
router.post("/create", isAdminOrOwner, AdminBlogController.create)
router.get("/:id", isAdminOrOwner, AdminBlogController.show)
router.post("/:id", isAdminOrOwner, AdminBlogController.update)
router.delete("/:id", isAdminOrOwner, AdminBlogController.destroy)

export default router