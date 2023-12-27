
import { UserModel } from "../models/UserModel";

const findAllUser = async () => {
   return UserModel.all();
}

const findById = async (id) => {
   return UserModel.findById(id);
}

export {
   findAllUser, findById,
}