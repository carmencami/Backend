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
    updateAmount: (req: any, res: any) => {
        let crypto_id = req.body.crypto_id;
        let amount = req.body.amount;
        let actions = req.body.actions
        console.log(crypto_id, " cryptoID")
        return cryptosService.updateAmount(crypto_id, amount, actions)
            .then(r => {
                res.json(r)
            })
            .catch(error => {
                console.error(error)
                res.sendStatus(500)
            })
    }

}