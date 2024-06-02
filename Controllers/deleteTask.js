const task = require('../Models/task');

const deleteTask = async (req, res) => {
    const user = req.user;
    try {

        const { id } = req.params;

        const findTask = await task.findById(id);
        if (user._id == findTask.user || user.isAdmin) {


            const findandDelete = await task.findByIdAndDelete(id);
            if (findandDelete) {
                res.status(200).json({
                    message: "task deleted successfully",
                    findandDelete
                })
            }
            else {
                res.status(400).json({ message: "error while deleting task" })
            }
        }
        else {

            return res.status(401).json({ message: "You are not authorized to delete this task" })

        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = deleteTask;