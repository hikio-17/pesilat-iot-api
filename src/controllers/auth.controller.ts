import { Request, Response } from "express"
import { signin, signup } from "../service/auth.service"

const userSignup = async (req: Request, res: Response) => {
   const user = await signup(req.body);

   res.status(201).json({
      status: 'success',
      data: {
         user
      }
   })
}

const userSignin = async (req: Request, res: Response) => {
   const user = await signin(req.body);
   res.status(200).json({
      user,
   });
}

export {
   userSignup, userSignin,
}