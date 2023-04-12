import { CryptoPojo } from './../data/models/cryptos.model';
import { CryptoDto } from './../controllers/types';
import { CryptosRepository } from '../data/repositories/cryptos.repository';

export class CryptosService{
    _cryptosRepository: CryptosRepository
    constructor(){
        this._cryptosRepository = new CryptosRepository()
    }

    async getAllCryptos() : Promise<CryptoDto[]>{
        const cryptoPromise = await this._cryptosRepository
        .getAllCryptos()
        .then(cryptosAsPojo =>{
            let cryptosAsDto : CryptoDto[] = []
            cryptosAsPojo.forEach(cryptoAsPojo => {
                let cryptoAsDto = this.parsePojoIntoDto(cryptoAsPojo)
                cryptosAsDto.push(cryptoAsDto)
            })
            return cryptosAsDto
        }) .catch(error=>{
            console.log(error)
            throw error
        })
        return cryptoPromise
    }


    parsePojoIntoDto (cryptoPojo : CryptoPojo) : CryptoDto {
        const cryptoDto: CryptoDto = {
            crypto_id : cryptoPojo.dataValues.crypto_id,
            crypto_name : cryptoPojo.dataValues.crypto_name,
            value: cryptoPojo.dataValues.value,
            icon: cryptoPojo.dataValues.icon,
            asset : cryptoPojo.dataValues.asset,
            stock : cryptoPojo.dataValues.stock
        }
        return cryptoDto

        
    }
}
