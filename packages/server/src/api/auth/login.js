import { verifyUser } from "../../services/auth";
import jwt from "jsonwebtoken";

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await verifyUser({ email, password });

  if (!user) return res.status(422).send("Invalid credentials");

  const token = jwt.sign({ id: user.id }, process.env.JWT_KEY);

  res.cookie("jwt", token, {
    maxAge: "86400000",
    httpOnly: true,
  });

  res.json(user);
};

export default login;
