import { UserService } from './../services/user.service';

const userService : UserService = new UserService()

export const userController = {
    addUser: (req: any, res: any) => {
        console.log(req.body)
        return userService.addUser(req.body)
            .then(r => {
                res.json(r)
            })
            .catch(error => {
                console.error(error)
                res.sendStatus(500)
            })
    },

    getUserLoginId: (req: any, res: any) => {
        let username = req.body.username;
        let passwd = req.body.password;
        console.log(username, passwd + " body")
        return userService.getUserLoginId(req.body)
            .then(r => {
                console.log(r)
                res.json(r)
            })
            .catch(error => {
                console.error(error)
                res.sendStatus(500)
            })
    },
    updateBalance: (req: any, res: any) => {

        let user_id: string = req.user_id
        let balance: number = req.body.balance;

        return userService.updateBalance(user_id, balance)
            .then(resp => {
                let response: string = "";
                console.log(req.user_id)
                if (!!resp) {
                    response = "Saldo actualizado"
                } else {
                    response = "No se ha podido aplicar el nuevo saldo"
                }
                console.log(resp)
                res.json({ balance: resp, response })
            })
            .catch(error => {
                console.error(error)
                res.sendStatus(500)
            })
    },

}