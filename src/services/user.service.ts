import { UserPojo } from './../data/models/user.model';
import { NewUserDto, UserDto } from './../controllers/types';
import { UserRepository } from '../data/repositories/user.repository';

export class UserService{
    _userRepository: UserRepository
    constructor(){
        this._userRepository = new UserRepository()
    }

    async addUser(user: NewUserDto): Promise<number> {
        const userPojo: UserPojo = this.parseDtoIntoPojo(user);
        const userPromise = await this._userRepository
        .addUser(userPojo)
        .then((id_user) => {
            console.log(id_user);
            return id_user;
        })
        .catch((error) => {
            console.error(error);
            throw error;
        });
        return userPromise;
    }
    async getAllUsers() : Promise<UserDto[]>{
        const userPromise = await this._userRepository.getAllUsers().then(usersAsPojo =>{
            let usersAsDto : UserDto[] = []
            usersAsPojo.forEach(userAsPojo => {
                let userAsDto = this.parsePojoIntoDto(userAsPojo)
                usersAsDto.push(userAsDto)
            })
            return usersAsDto
        }) .catch(error=>{
            console.log(error)
            throw error
        })
        return userPromise
    }
    async getUserbyEmailAndPassword(email:string, pass:string): Promise<UserDto> {
        const usersPromise = await this._userRepository
        .getUserbyEmailAndPassword(email, pass)
        .then((userAsPojo) => {
            let userAsDTO = this.parsePojoIntoDto(userAsPojo);
    
            return userAsDTO;
        })
        .catch((error) => {
            console.error(error);
            throw error;
        });
        return usersPromise;
    }
    async getUserbyId (id: number): Promise<UserDto | undefined>{
        const userPromise = await this._userRepository.getUserbyId(id).then(userAsPojo => {
        if(!!userAsPojo) {
            return this.parsePojoIntoDto(userAsPojo);
        } else {
            return undefined;
        }
        }).catch(error => {
        console.log(error);
        throw error;
        });
        return userPromise;
    }

    parsePojoIntoDto (userPojo : UserPojo) : UserDto {
        const userDto: UserDto = {
            user_id : userPojo.user_id,
            username : userPojo.username,
            email: userPojo.email,
            password: userPojo.password,
            fullname : userPojo.fullname,
            deposit : userPojo.deposit,
            birthdate : userPojo.birthdate,
        }
        return userDto

        
    }

parseDtoIntoPojo(userDto: NewUserDto): UserPojo {
    return userDto as UserPojo;
}
    }
