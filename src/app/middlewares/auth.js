import Jwt from "jsonwebtoken";
import authConfig from "../../config/auth";


export default (req, res, next) => {
    const authToken = req.headers.authorization;
    console.log(authToken);

    if (!authToken) {
        return res.status(401).json({ error: 'token not provided' })
    }

    const token = authToken.split(' ')[1];

    try {
        Jwt.verify(token, authConfig.secret, function (err, decoded) {
            if (err) {
                throw new Error();
            }

            req.userId = decoded.id;
            req.userName = decoded.name;

            return next();
        })

    } catch (err) {
        return res.status(401).json({ error: 'token invalid' })
    }
}