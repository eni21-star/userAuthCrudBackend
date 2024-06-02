const model = require('../Models/model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const registerController = async (req, res) => {
    try {
        let { email, username, password, role, isAdmin } = req.body;

        if (!email || !username || !password || !role) {
            return res.status(400).json({ message: "Please provide email, username, password, and role" });
        }

        const findUser = await model.findOne({ email: email });

        if (findUser) {
            return res.status(409).json({ message: "User already exists" });
        }
        else {
            password = await bcrypt.hash(password, 10);
            const user = await model.create({ email, username, password, role, isAdmin });
            const userData =
            {
                _id: user._id,
                username: user.username,
                role: user.role
            }

            const token = jwt.sign(userData, process.env.SECRET_KEY)
            res.status(201).json({
                message: "User created successfully",
                token: token
            })
        }
    }
    catch (err) {
        res.status(500).json({ Errmessage: err.message })
    }
}

module.exports = registerController;