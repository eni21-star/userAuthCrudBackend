const task = require('../Models/task');

const updateTask = async (req, res) => {
    const { id } = req.params;
    const user = req.user;


    try {

        const findTask = await task.findById(id);

        if (user._id == findTask.user || user.isAdmin) {

            const findTaskUpdate = await task.findByIdAndUpdate(id, req.body);

            if (findTaskUpdate) {
                const updatedTask = await task.findById(id);
                res.status(200).json(updatedTask);
            }
            else {
                res.status(404).json({ message: "could not update task, task not found" });
            }
        }
        else {

            return res.status(401).json({ message: "You are not authorized to update this task" })

        }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = updateTask;