const express = require("express");

const router = express.Router();
const {
  addTask,
  createTask,
  deleteTask,
  getTasks,
  updateTask,
  editTask,
} = require("../controllers/tasks");

router.route("/").post(createTask).get(getTasks);
router.route("/edit/:id").get(editTask);
router.route("/delete/:id").get(deleteTask);
router.route("/update/:id").post(updateTask);
router.route("/add").get(addTask);

module.exports = router;