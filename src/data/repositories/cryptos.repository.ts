
import { connect } from "../config/cryptos.db.config";
import { CryptoPojo } from "../models/cryptos.model";

export class CryptosRepository {
    _database : any = {}
    _cryptosRepository : any


    constructor(){
        this._database = connect()
        this._cryptosRepository = this._database.sequelize.getRepository(CryptoPojo)
    }


async getAllCryptos(): Promise <CryptoPojo[]>{
    try {
        return await this._cryptosRepository.findAll()
    } catch (error){
        console.error(error)
        return []
    }
}
async updateAmount(crypto_id: string, stock: number, actions: string): Promise<CryptoPojo[]> {
    try {
        console.log(crypto_id)
        let findCrypto = await this._cryptosRepository.findOne({
            where: {
                crypto_id: crypto_id
            }
        })
        let newStock = 0
        if (actions == 'buy') {
            newStock = findCrypto.stock - stock
        } else {
            newStock = +findCrypto.stock + +stock
        }
        return await this._cryptosRepository.update({ stock: newStock }, { where: { crypto_id: crypto_id } });
    } catch (error) {
        console.log(error)
        return []
    }
}

}

