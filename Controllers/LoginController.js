const model = require('../Models/model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const env = require('dotenv').config();

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Please provide email and password" });
        }

        const findUser = await model.findOne({ email: email });

        if (!findUser) {
            return res.status(404).json({ message: "User does not exist" });
        }
        else {
            const comparePassword = await bcrypt.compare(password, findUser.password)
            if (comparePassword) {
                const payload = findUser.toObject();

                delete payload.password;
                delete payload.createdAt;
                delete payload.updatedAt;
                delete payload.__v;
                
                const token = jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: "1hr"})
                return res.status(200).json({
                    message: `user ${findUser.username} logged in successfully`,
                    token: token
                })
            }
            else {
                return res.status(401).json({
                    message: `incorrect password for user ${findUser.username}`,
                })
            }
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = loginController;

// const model = require('../Models/model');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
// const env = require('dotenv').config();
// const redis = require('redis');
// const client = redis.createClient();

// const loginController = async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         if (!email || !password) {
//             return res.status(400).json({ message: "Please provide email and password" });
//         }

//         const findUser = await model.findOne({ email: email });

//         if (!findUser) {
//             return res.status(404).json({ message: "User does not exist" });
//         }
//         else {
//             const comparePassword = await bcrypt.compare(password, findUser.password)
//             if (comparePassword) {
//                 const payload = findUser.toObject();

//                 delete payload.password;
//                 delete payload.createdAt;
//                 delete payload.updatedAt;
//                 delete payload.__v;
                
//                 const token = jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: "1hr"})

//                 // Check if user is already logged in
//                 client.get(findUser._id.toString(), (err, data) => {
//                     if (data) {
//                         return res.status(400).json({ message: "User already logged in" });
//                     } else {
//                         // Store token in Redis
//                         client.set(findUser._id.toString(), token, 'EX', 60 * 60); // Expires after 1 hour

//                         return res.status(200).json({
//                             message: `user ${findUser.username} logged in successfully`,
//                             token: token
//                         })
//                     }
//                 });
//             }
//             else {
//                 return res.status(401).json({
//                     message: `incorrect password for user ${findUser.username}`,
//                 })
//             }
//         }
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// }

// module.exports = loginController;