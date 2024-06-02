
const dotenv = require('dotenv').config();
const jwt = require('jsonwebtoken');

const jwtVerify = (req, res, next) => {

    const authHeader = req.headers.token;

    if (authHeader) {

        try {
            const token = authHeader.split(" ")[1];

            jwt.verify(token, process.env.SECRET_KEY, (err, user) => {

                if (err) {
                    res.status(401).send("invalid token")
                }
                else{
                req.user = user
                next()
            }

            })

        } catch (error) {
            res.send(error.message);
        }

    } else {
        res.status(401).send("you are not authenticated")
    }
}


module.exports = jwtVerify