import * as models from "./models";
import { getDatabase } from "../config/sequelize";

for (const [model] in models) {
  if (model.associate) {
    model.associate(models);
  }
}

export const database = getDatabase();

export * from "./models";
