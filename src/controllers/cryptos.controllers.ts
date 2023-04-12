import { CryptosService } from './../services/cryptos.service';

const cryptosService : CryptosService = new CryptosService()

export const cryptosController = {
    getAllCryptos : (_req: any, res: any) =>{
        cryptosService
        .getAllCryptos()
        .then(result =>{
            console.log(result)
            res.json(result)
        })
        .catch(Error =>{
            console.log(Error)
            res.sendStatus(500)
        })
    },

}