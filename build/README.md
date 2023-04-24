
* UserRouter
POST :  (/api/users/login) -> Recibe los datos del usuarios ( username y password) 
POST :  (/api/users/add) -> Recibe todos los datos del registro ( username, fullname, birthdate, deposit, password)
POST /api/users/update -> Recibe el token para obtener el id usuario, y la cantidad a sumar al usuario

*CryptosRouter
GET /api/cryptos/get/all -> Recoge los datos de la tabla de las cryptomonedas
POST /api/cryptos/update -> Actualiza el stock  cuando un usuario compra o vende


* CryptoUserRouter
GET /api/cryptos_user/cryptosuser -> Recibe el token y devuelve las cryptos que tiene el usuario
POST /api/cryptos_user/update/buy -> Recibe el token, el id de la cryptomoneda, la cantidad y el tipo de operación


