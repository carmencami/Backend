import { UserService } from './../services/user.service';

const userService : UserService = new UserService()

export const userController = {
    addUser : (req: any, res: any) =>{
        try{
            const newUser = req.body
            userService.addUser(newUser) .then(result =>{
                res.json(result)
            })
        }
        catch(Error){
            console.log(Error);
            res.send(500)
        }
    },
    getAllUsers : (_req: any, res: any) =>{
        userService.getAllUsers().then(result =>{
            res.json(result)
        })
        .catch(Error =>{
            console.log(Error)
            res.send(500)
        })
    },

    getUserbyEmailAndPassword: (req: any, res: any) => {
        console.log("################################")
        console.log(req.body.email)
        const email = req.body.email
        const password = req.body.password
        console.log("AAAAAAAAAAAAAAAAAAAAAAA")
        userService
        .getUserbyEmailAndPassword(email,password)
        .then((result) => {
            res.json(result);
        })
        .catch((excepcion) => {
            console.error(excepcion);
            res.send(500);
        });
    },
    getUserById : (req: any, res: any) =>{
        try{
            const user_id = req.params.id
            userService.getUserbyId(user_id) .then (result =>{
                res.json(result)
            })
        } 
        catch (Error){
            console.log(Error)
            res.sendStatus(500)
        }
    },

    updateUser: (req: any, res: any) => {

        try {
          //El try catch es para gestionar que el req.body pueda estar mal y provoque un bad request.
        const newUser = req.body;
          //no puedo usar async await, porque eso paraliza la ejecución del front, es mejor usar .then()
        userService.updateUser(newUser).then((result) => {
            console.log(result);
            res.json(result);
        });
        } catch (exception) {
        console.error(exception);
        res.sendStatus(500);
        }
    }

}