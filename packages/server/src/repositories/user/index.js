import { User } from "../../models";
import bcrypt from "bcrypt";
import { omit } from "ramda";

export { User as model };
const SALT_ROUNDS = 10;

export const createUser = async ({ email, password }) => {
  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  const user = await User.create({
    email,
    password: hashedPassword,
    userName: email.split("@")[0],
  });

  return omit(["password"], user.toJSON());
};

export const verifyUser = async ({ email, password }) => {
  const user = await User.scope("withSecretColumns").findOne({
    where: { email },
  });

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  return isPasswordCorrect ? omit(["password"], user.toJSON()) : null;
};
