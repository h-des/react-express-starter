import jwt from "jsonwebtoken";
import { findUserByPk } from "../services/user";

const verifyUser = async (req, res, next) => {
  if (!req.cookies.jwt) res.status(401).send("Unauthorized");

  const decoded = jwt.verify(req.cookies.jwt, process.env.JWT_KEY);

  if (!decoded.id) res.status(401).send("Unauthorized");

  const user = await findUserByPk(decoded.id);
  res.locals.user = user;
  next();
};

export default verifyUser;
