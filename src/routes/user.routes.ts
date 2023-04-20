import { userController } from './../controllers/user.controllers';
import  express  from "express";
import Jwt from '../token/auth-token';

const router = express.Router()

// TODO: Añadir endpoints
router.post('/login', userController.getUserLoginId);
router.post('/add', userController.addUser);
router.post('/update', [Jwt.verifyToken], userController.updateBalance)


export default router
module.exports = router 