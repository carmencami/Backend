import { userData, UserLoginDto } from './../../controllers/types';
import { connect } from "../config/user.db.config";
import { UserPojo } from "../models/user.model";


export class UserRepository {
    _database : any = {}
    _userRepository : any


    constructor(){
        this._database = connect()
        this._userRepository = this._database.sequelize.getRepository(UserPojo)
    }


    async addUser(user: UserPojo): Promise<string | undefined> {
        try {
            const findUser = await this._userRepository.findOne({
                where: {
                    username: user.username ,
                }
            })
            if (findUser == null) {
                await this._userRepository.create(user)
                return 'User registered!'
            } else {
                return 'User exist!'
            }
        } catch (error) {
            console.error(error)
            return undefined
        }
    }

    async updateBalance(user_id: string, balance: number) {
        console.log(balance)
        try {
            const findUser = await this._userRepository.findOne({
                where: {
                    user_id: user_id
                }
            })
            let newBalance: number = + balance + +findUser.deposit
            await this._userRepository.update({ deposit: newBalance }, {
                where: {
                    userId: user_id,
                    deposit: balance
                }
            })
            return newBalance

        } catch (error) {
            return undefined
        }
    }


    async getUserLoginId(user: UserLoginDto): Promise<userData | undefined> {
        console.log(user)
        try {
            const findUser = await this._userRepository.findOne({
                where: {
                    username: user.username,
                    password: user.password
                }
            })
            return { user_id: findUser.user_id, fullname: findUser.fullname, balance: findUser.deposit }
        } catch (error) {
            console.log(error)
            return undefined
        }
    }
async getUserbyId(id:string) : Promise<UserPojo | undefined>{
    try{
        return await this._userRepository.findByPk(id)
    }catch (error) {
        console.error(error)
        return undefined
    }

}
async UserBalance(user_id: string, balance: number) {
    console.log(balance)
    try {
        const findUser = await this._userRepository.findOne({
            where: {
                userId: user_id
            }
        })
        let newBalance: number = + balance + +findUser.deposit
        await this._userRepository.update({ deposit: newBalance }, {
            where: {
                userId: user_id
            }
        })
        return newBalance

    } catch (error) {
        return undefined
    }
}

}

