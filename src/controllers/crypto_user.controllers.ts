import { CryptoUserService } from ".././services/cryptoUser.service";

const cryptoUserService : CryptoUserService = new CryptoUserService()

export const cryptoUserController = {

    getAllUserCrypto: (req: any, res: any) => {
        let user_id = req.body
        console.log(user_id);
        
        return cryptoUserService.getAllUserCryptos(user_id).then(r => {
            res.json(r)
        }).catch(error => {
            console.error(error)
            res.sendStatus(500)
        })
    },
    updateUserCrypto: (req: any, res: any) => {
        try {
        const userCrypto = req.body
        cryptoUserService.updateUserCrypto(userCrypto).then(result => {
            res.json(result)
        })
        } catch (e) {
        res.sendStatus(400)
        }
    }

    /* SellCryptos: (req: any, res: any) => {
        let user_id = req.user_id
        let crypto_id = req.body.crypto_id
        let actions = req.body.actions
        let amount = req.body.amount
        return cryptoUserService.SellCryptos(user_id, crypto_id, actions, amount)
            .then(r => {
                res.json(r)
            })
            .catch(error => {
                console.error(error)
                res.sendStatus(500)
            })
    } */
    



}