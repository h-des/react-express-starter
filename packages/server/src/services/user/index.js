import { model } from "../../repositories/user";

export const findUserByPk = (id) => model.findByPk(id);

export const findOneWhere = (where) => model.findOne({ where });
