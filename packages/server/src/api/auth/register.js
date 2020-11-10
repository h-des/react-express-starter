import { createUser } from "../../services/auth";
import { findOneWhere } from "../../services/user";
import jwt from "jsonwebtoken";

const login = async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  if (confirmPassword !== password)
    return res.status(422).send("Invalid credentials");

  const alreadyExists = await findOneWhere({ email });
  if (alreadyExists) return res.status(422).send("Invalid credentials");

  const user = await createUser({ email, password });

  const token = jwt.sign({ id: user.id }, process.env.JWT_KEY);

  res.cookie("jwt", token, {
    maxAge: "86400000",
    httpOnly: true,
  });

  res.json(user);
};

export default login;
