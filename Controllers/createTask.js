const task = require('../Models/task');
const jwt = require('jsonwebtoken');


const createTask = async (req, res) => {


    try {
        user = req.user;
        if (user.role !== 'client') {
            res.status(401).json({ message: "You are not authorized to create a task" })
        }
        else {

            const { title, description, tags, payment } = req.body;
            if (!req.body) {
                res.status(400).json({ message: "Please provide all the job details" })
            }
            else {
                const newTask = await task.create({ user: user._id, title, description, tags, payment });
                if (newTask) {
                    res.status(201).json({ message: "Task created successfully", newTask })
                }
                else {
                    res.status(400).json({ message: "Task could not be created" })
                }

            }
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

module.exports = createTask;