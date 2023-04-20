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
                let cryptoAsDto = this.parseCryptoIntoDto(cryptoAsPojo)
                cryptosAsDto.push(cryptoAsDto)
            })
            return cryptosAsDto
        }) .catch(error=>{
            console.log(error)
            throw error
        })
        return cryptoPromise
    }
    async updateAmount(crypto_id: string, stock: number, operation: string) {
        const cryptoPromise = await this._cryptosRepository.updateAmount(crypto_id, stock, operation)
            .then(cryptosAsPojo => {
                return cryptosAsPojo
            })
            .catch(error => {
                console.log(error)
                throw error
            })

        return cryptoPromise
    }

    parseCryptoIntoDto (cryptoPojo : CryptoPojo) : CryptoDto {
        const cryptoDto: CryptoDto = {
            crypto_id : cryptoPojo.crypto_id,
            crypto_name : cryptoPojo.crypto_name,
            value: cryptoPojo.value,
            icon: cryptoPojo.dataValues.icon,
            asset : cryptoPojo.asset,
            stock : cryptoPojo.stock
        }
        return cryptoDto

        
    }
}
