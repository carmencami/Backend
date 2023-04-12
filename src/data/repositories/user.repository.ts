
import { connect } from "../config/user.db.config";
import { UserPojo } from "../models/user.model";

export class UserRepository {
    _database : any = {}
    _userRepository : any


    constructor(){
        this._database = connect()
        this._userRepository = this._database.sequelize.getRepository(UserPojo)
    }


async addUser (newUser: UserPojo) : Promise<number>{
    try{
        newUser= await this._userRepository.create(newUser)
        return newUser.id
    } catch (error) {
        console.log(error)
        return -1
    }
}
async getAllUsers(): Promise <UserPojo[]>{
    try {
        return await this._userRepository.findAll()
    } catch (error){
        console.error(error)
        return []
    }
}
async getUserbyEmailAndPassword(email:string, password:string): Promise<UserPojo> {
    try {
        const user = await this._userRepository.findOne({
            where: {
                email: email,
                password: password
            }
        });
        console.log("user:::", user);
        return user;
    } catch (error) {
        console.error(error);
    return error;
    }
}
async getUserbyId(id:number) : Promise<UserPojo | undefined>{
    try{
        return await this._userRepository.findByPk(id)
    }catch (error) {
        console.error(error)
        return undefined
    }

}

}

