import { CryptoUserPojo } from '../data/models/crypto_user.model';
import { CryptoUserDto } from '../controllers/types';
import { CryptoUserRepository } from '../data/repositories/cryptoUser.repository';

export class CryptoUserService{
    _cryptoUserRepository: CryptoUserRepository
    constructor(){
        this._cryptoUserRepository = new CryptoUserRepository()
    }



    async getAllUserCryptos(user_id: CryptoUserDto) {
        const cryptoPromise = await this._cryptoUserRepository.getAllUserCryptos(user_id).then(cryptosUsersAsPojo => {
            let cryptos: CryptoUserDto[] = [];
            cryptosUsersAsPojo.forEach(cryptoUserAsPojo => {
                cryptos.push(this.parsePojoIntoDto(cryptoUserAsPojo));
            });
            return cryptos
        }).catch(error => {
            console.log(error)
            throw error
        })

        return cryptoPromise
    }
    async updateUserCrypto (userCrypto: CryptoUserDto): Promise<string> {
        var userCryptoPojo : CryptoUserPojo = userCrypto as CryptoUserPojo
        const updatedUserCrypto = await this._cryptoUserRepository.updateUserCrypto(userCryptoPojo)
        return updatedUserCrypto
      }
    /* async SellCryptos(user_id: string, crypto_id: string, actions: string, amount: number) {
        console.log(amount)
        const cryptoPromise = await this._cryptoUserRepository.SellCrypto(user_id, crypto_id, actions, amount)
            .then(cryptosUsersAsPojo => {

                return cryptosUsersAsPojo
            })
            .catch(error => {
                console.log(error)
                throw error
            })

        return cryptoPromise
    
    } */



    parsePojoIntoDto (cryptoUserPojo : CryptoUserPojo) : CryptoUserDto {
        const cryptoDto: CryptoUserDto = {
            crypto_id : cryptoUserPojo.crypto_id,
            user_id: cryptoUserPojo.user_id,
            amount: cryptoUserPojo.amount
        }
        return cryptoDto

        
    }
}
