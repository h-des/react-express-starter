import { Router } from "express";
import login from "./login";
import register from "./register";

const router = Router();

router.post("/login", login);
router.post("/register", register);

export default router;
