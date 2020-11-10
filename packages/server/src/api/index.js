import { Router } from "express";
import auth from "./auth";
import currentUser from "./currentUser";
import { verifyUser } from "../middlewares";

const router = Router();

router.use("/auth", auth);
router.use("/current-user", verifyUser, currentUser);

export default router;
