import  jwt  from 'jsonwebtoken';
import { UserPojo } from './../data/models/user.model';
import { UserLoginDto,UserRegisterDto, DataUserToken } from './../controllers/types';
import { UserRepository } from '../data/repositories/user.repository';
import { v4 as uuid } from 'uuid';

export class UserService{
    _userRepository: UserRepository
    constructor(){
        this._userRepository = new UserRepository()
    }

    async addUser(user: UserRegisterDto): Promise<string | undefined> {

        const id: string = uuid();
        let newUserPojo = user as UserPojo
        newUserPojo.user_id = id;
        newUserPojo.deposit = 0;

        const userPromise = await this._userRepository.addUser(newUserPojo)
            .then(resp => {
                return resp
            }).catch(error => {
                throw error
            })
        return userPromise
    }
    
    async getUserLoginId(user: UserLoginDto): Promise<DataUserToken | undefined> {
        const userPromise = await this._userRepository.getUserLoginId(user)
            .then(resp => {
                console.log(resp)
                if (resp) {
                    return { userToken: this.firmarToken(resp.user_id), fullname: resp?.fullname, balance: resp.balance }
                }
                else {
                    return undefined
                }
            })
            .catch(error => {
                throw error
            })
        return userPromise
    }
    
    async updateBalance(user_id: string, balance: number): Promise<number | undefined> {
        console.log(user_id, "  ", balance)
        const userPromise = await this._userRepository.updateBalance(user_id, balance)
            .then(resp => {
                console.log(resp + "repuesta")
                return resp;
            })
            .catch(error => {
                throw error
            })
        return userPromise
    }

    firmarToken(idUser: string) {
        let token = jwt.sign({ user_id: idUser }, process.env.PHRASE!, {
            expiresIn: '5h'
        });
        return token
    }

    }
