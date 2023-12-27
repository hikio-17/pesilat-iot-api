import shortid from 'shortid';
import { UserModel } from "../models/UserModel";

const signup = async (data) => {
   const id = shortid(10);
   const user = await UserModel.create({ id, ...data });

   return user
}

const signin = async (data: { nik: number, password: string }) => {
   const user = await UserModel.findByNIK(data.nik);
   console.log(user);
   return user;
}

export {
   signup, signin,
}