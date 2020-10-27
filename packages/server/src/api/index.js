import { Router } from "express";
import { User } from "../models";
const router = Router();

router.get("/test", async (req, res) => {
  const user = await User.create({
    userName: "test",
    email: "test",
    password: "test",
  });

  res.json(user);
});

export default router;
