import { Router } from "express";
import { getAllUsers, findUserById } from "../controllers/user.controller";

const router = Router();

router.get('/users', getAllUsers);
router.get('/users/:Id', findUserById);

export default router;
