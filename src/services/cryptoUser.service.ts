import { CryptoUserPojo } from '../data/models/crypto_user.model';
import { CryptoUserDto } from '../controllers/types';
import { CryptoUserRepository } from '../data/repositories/cryptoUser.repository';

export class CryptoUserService{
    _cryptoUserRepository: CryptoUserRepository
    constructor(){
        this._cryptoUserRepository = new CryptoUserRepository()
    }


    async getCryptosByUserId (user_id: string): Promise<CryptoUserDto[]>{
        const cryptoUserPromise = await this._cryptoUserRepository
        .getCryptosByUserId(user_id)
        .then((cryptoUsersAsPojo) => {
        let cryptoUsersAsDto: CryptoUserDto[] = [];
        cryptoUsersAsPojo.forEach((cryptoUserAsPojo) => {
            let cryptoUserAsDto = this.parsePojoIntoDto(cryptoUserAsPojo);
            cryptoUsersAsDto.push(cryptoUserAsDto);
        });
        return cryptoUsersAsDto;
        })
        .catch((error) => {
        console.error(error);
        throw error;
        });

    return cryptoUserPromise;
    }
    async addCryptos(crypto: CryptoUserDto): Promise<string> {
        let cryptoUserPojo: CryptoUserPojo = this.parseDtoIntoPojo(crypto);
        const cryptosPromise = await this._cryptoUserRepository
        .addCryptos(cryptoUserPojo)
        .then((user_id) => {
            return user_id;
        })
        .catch((error) => {
            console.error(error);
            throw error;
        });
        return cryptosPromise;
    }

    async updateCryptos(crypto: CryptoUserDto): Promise<string> {
        const cryptoUserPojo: CryptoUserPojo = this.parseDtoIntoPojo(crypto);
        const cryptosPromise = await this._cryptoUserRepository
        .updateCryptos(cryptoUserPojo)
        .then((user_id) => {
            return user_id;
        })
        .catch((error) => {
            console.error(error);
            throw error;
        });
        return cryptosPromise;
    }

    parsePojoIntoDto (cryptoUserPojo : CryptoUserPojo) : CryptoUserDto {
        const cryptoDto: CryptoUserDto = {
            user_id : cryptoUserPojo.dataValues.user_id,
            crypto_id : cryptoUserPojo.dataValues.crypto_id,
            amount: cryptoUserPojo.dataValues.amount
        }
        return cryptoDto

        
    }
    parseDtoIntoPojo(cryptoUserDto: CryptoUserDto): CryptoUserPojo {
        // Los pojos no se incicializan como constantes
    
        return cryptoUserDto as CryptoUserPojo;
    }
}
