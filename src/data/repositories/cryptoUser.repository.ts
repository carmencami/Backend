
import { connect } from "../config/cryptoUser.db.config";
import { CryptoUserPojo } from "../models/crypto_user.model";

export class CryptoUserRepository {
    _database : any = {}
    _cryptoUserRepository : any


    constructor(){
        this._database = connect();
        this._cryptoUserRepository =
        this._database.sequelize.getRepository(CryptoUserPojo);
    }


    async getAllUserCryptos(user_id: string): Promise<CryptoUserPojo[]> {
        try {
            return await this._cryptoUserRepository.findAll({
                where: {
                    userId: user_id
                }
            });
        } catch (error) {
            console.log(error)
            return []
        }
    }


async SellCrypto(user_id: string, crypto_id: string, actions: string, amount: number): Promise<CryptoUserPojo[]> {
    console.log(amount)
    try {
        let findWallet = await this._cryptoUserRepository.findOne({
            where: {
                user_id: user_id,
                crypto_id: crypto_id
            }
        });
        console.log(findWallet, "find")
        if (findWallet == null) {
            if (actions == "buy" && amount > 0) {
                return await this._cryptoUserRepository.create(
                    { user_id: user_id, crypto_id: crypto_id, amount: amount },

                )
            } else {
                return []
            }
        } else {
            let newAmount: number = 0
            let oldAmount: string = findWallet.amount
            if (actions == "buy" && amount > 0) {
                newAmount = parseFloat(amount.toString()) + parseFloat(oldAmount)
                console.log(findWallet.amount, " buy")

            } else if (actions == "sell" && amount < findWallet.amount) {
                newAmount = findWallet.amount - amount
                console.log(newAmount, " sell")
            } else {
                newAmount = findWallet.amount
                console.log(newAmount, " otro")
            }
            // this._cryptoRepository.updateAmount(cryptoId, amount, operation)

            return await this._cryptoUserRepository.update({ amount: newAmount }, {
                where: {
                    userId: user_id,
                    cryptoId: crypto_id
                }
            })
        }

    } catch (error) {
        console.log(error)
        return []
    }
}
}