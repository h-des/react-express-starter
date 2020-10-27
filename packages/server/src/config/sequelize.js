import Sequelize from "sequelize";
import configs from "./config";

let DB;

const connectToDB = () => {
  const config = configs[process.env.NODE_ENV];

  DB = new Sequelize(config.database, config.username, config.password, config);

  return DB;
};

export const getDatabase = () => DB || connectToDB();
