export class UserRegisterDto{
    username:string
    email:string
    password:string
    fullname:string
    deposit:number
    birthdate:string
}
export class userWalletDto {
    userToken: string
    crypto_id: string
    amount: number
}
export class UserLoginDto {
    username: string
    password: string
}
export class userData {
    fullname: string
    user_id: string
    username:string
    balance: number
}
export class DataUserToken {
    fullname: string
    userToken: string
}

export class CryptoDto{
    crypto_id:string
    crypto_name:string
    value:number
    icon:string
    asset:string
    stock:number
}

export class CryptoUserDto{
    crypto_id:string
    user_id: string
    amount:number
}




