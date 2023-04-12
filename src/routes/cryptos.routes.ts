import { cryptosController } from './../controllers/cryptos.controllers';
import  express  from "express";

const router = express.Router()

// TODO: Añadir endpoints
router.get('/all', cryptosController.getAllCryptos)


export default router
module.exports = router 