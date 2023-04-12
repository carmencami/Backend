import { CryptoUserService } from ".././services/cryptoUser.service";

const cryptoUserService : CryptoUserService = new CryptoUserService()

export const cryptoUserController = {

    getCryptosByUserId : (req: any, res: any) =>{
        try{
            const user_id = req.params.id
            cryptoUserService.getCryptosByUserId(user_id) .then (result =>{
        (result != null) ? res.json(result) : res.sendStatus(404);
                
            })
        } 
        catch (Error){
            console.log(Error)
            res.sendStatus(500)
        }
    },
    
    addCryptos : (req: any, res: any) =>{
        try{
            const newCrypto = req.body
            cryptoUserService.addCryptos(newCrypto) .then(result =>{
                console.log(result);
                res.json(result)
            })
        }
        catch(Error){
            console.log(Error);
            res.sendStatus(500)
        }
    },
    updateCryptos: (req: any, res: any) => {

        try {
          //El try catch es para gestionar que el req.body pueda estar mal y provoque un bad request.
        const newCryptos = req.body;
          //no puedo usar async await, porque eso paraliza la ejecución del front, es mejor usar .then()
        cryptoUserService.updateCryptos(newCryptos).then((result) => {
            console.log(result);
            res.json(result);
        });
        } catch (exception) {
        console.error(exception);
        res.sendStatus(500);
        }
    }

}