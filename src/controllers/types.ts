export class UserDto{
    user_id:string
    username:string
    email:string
    password:string
    fullname:string
    deposit:number
    birthdate:string
}
export type NewUserDto = Omit<UserDto, 'user_id'>


export class CryptoDto{
    crypto_id:string
    crypto_name:string
    value:number
    icon:string
    asset:string
    stock:number
}

export class CryptoUserDto{
    user_id:string
    crypto_id:string
    amount:number
}




