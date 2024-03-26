const { knex } = require("../../config/db");

exports.taskCreateController = (req, res) => {
  knex("task")
    .insert({
      user: req.body.user,
      taskName: req.body.taskName,
      TaskType: req.body.TaskType
    })
    .then(TaskCreated => res.redirect("/"))
    .catch(err => res.send(err));
}

