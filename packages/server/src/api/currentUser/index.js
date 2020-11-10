import { Router } from "express";
import show from "./show";

const router = Router();

router.get("/", show);

export default router;
