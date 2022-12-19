import { Router } from "express";
import controllers from "../controllers/messageControllers.js";

const router = Router();

router.post("/create",controllers.createMessage);

router.get("/id/:id", controllers.viewSingleMessage);

export default router;
