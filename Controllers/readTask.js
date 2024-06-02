const task = require('../Models/task');

const displayTask = async (req, res) => {


  try {

    const displayTask = await task.find({}).sort({ _id: -1 })

    if (displayTask) {
      res.status(202).json(displayTask)
    }
    else {
      res.status(404).json({ message: "error while retrieving task" });
    }

  } catch (error) {
    res.status(500).json(error.message);
  }
}

module.exports = displayTask;