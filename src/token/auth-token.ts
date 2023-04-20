import jwt from 'jsonwebtoken';

const Jwt = {
    verifyToken: (req: any, res: any, next: any) => {
        let token = req.headers.authorization;
        if (!token) {
            return res.status(403).send({ message: 'No token provided!' });
        }
        console.log(process.env.TOKEN_PHRASE)

        jwt.verify(token, process.env.TOKEN_PHRASE!, (err: any, decoded: any) => {
            if (err) {
                return res.status(401).send({ message: 'Unauthorized' });
            }
            req.user_id = decoded.user_id;
            next();
        });
    }
}
export default Jwt