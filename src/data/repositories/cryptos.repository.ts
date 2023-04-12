
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


}

