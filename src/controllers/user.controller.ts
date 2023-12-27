import { Response, Request } from 'express';
import { findAllUser, findById } from '../service/user.service';

const getAllUsers = async (req: Request, res: Response) => {
   const users = await findAllUser();

   res.status(200).json({
      status: 'success',
      data: {
         users
      }
   })
}

const findUserById = async (req: Request, res: Response) => {
   const { id } = req.params;
   const user = await findById(id);

   res.status(200).json({
      status: 'success',
      data: {
         user
      }
   })
}

export {
   getAllUsers, findUserById,
}
