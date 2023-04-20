import { cryptosController } from './../controllers/cryptos.controllers';
import  express  from "express";
import Jwt from '../token/auth-token';

const router = express.Router()

// TODO: Añadir endpoints
router.get('/all', cryptosController.getAllCryptos)
router.post('/update/amount', [Jwt.verifyToken] ,cryptosController.updateAmount);

export default router
module.exports = router 