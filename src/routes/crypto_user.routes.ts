import { cryptoUserController } from './../controllers/crypto_user.controllers';
import  express  from "express";
import Jwt from '../token/auth-token';

const router = express.Router()

// TODO: Añadir endpoints
router.post('/update/buy', [Jwt.verifyToken], cryptoUserController.SellCryptos);
router.get('/wallets', [Jwt.verifyToken], cryptoUserController.getAllUserCrypto)



export default router
module.exports = router 