
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


async getCryptosByUserId(user_id:string) : Promise<CryptoUserPojo[]>{
    try {
        return await this._cryptoUserRepository.findAll({
        where: {
            user_id: user_id,
        },
        });
    } catch (error) {
        console.error(error);
        return [];
    }

}


async addCryptos(newCryptoUser: CryptoUserPojo): Promise<string> {
    try {
    let user = await this._cryptoUserRepository.create(newCryptoUser);
    return user.user_id;
    } catch (error) {
    console.error(error);
    return error.toString();
    }
}
async updateCryptos(newCryptoUser: CryptoUserPojo): Promise<string> {
    try {
        console.log("%%%%%%%%%")

    await this._cryptoUserRepository.update(newCryptoUser, {

        where: {
        user_id: newCryptoUser.user_id,
        crypto_id: newCryptoUser.crypto_id,
        },
    });
    return newCryptoUser.user_id;
    } catch (error) {
    console.error(error);
    return error.toString();
    }
}

}

