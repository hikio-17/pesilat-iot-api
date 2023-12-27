import { Router } from "express";
import { userSignin, userSignup } from "../controllers/auth.controller";

const router = Router();

router.post('/auth/signup', userSignup);
router.post('/auth/', userSignin);

export default router;