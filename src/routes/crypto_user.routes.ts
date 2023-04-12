import { cryptoUserController } from '../controllers/crypto_user.controllers';
import  express  from "express";

const router = express.Router()

// TODO: Añadir endpoints
router.post('/add', cryptoUserController.addCryptos)
router.get('/get/:id', cryptoUserController.getCryptosByUserId)
router.put('/update', cryptoUserController.updateCryptos)



export default router
module.exports = router 