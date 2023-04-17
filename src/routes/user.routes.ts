import { userController } from './../controllers/user.controllers';
import  express  from "express";

const router = express.Router()

// TODO: Añadir endpoints
router.post('/add', userController.addUser)
router.get('/all', userController.getAllUsers)
router.post('/login', userController.getUserbyEmailAndPassword)
router.get('/get/:id', userController.getUserById)
router.put('/update', userController.updateUser)


export default router
module.exports = router 