import { cryptoUserController } from './../controllers/crypto_user.controllers';
import  express  from "express";

const router = express.Router()

// TODO: Añadir endpoints
router.put('/update', cryptoUserController.updateUserCrypto);
router.get('/cryptosuser', cryptoUserController.getAllUserCrypto)



export default router
module.exports = router 