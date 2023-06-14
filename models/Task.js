const mongoose = require("mongoose");
// validation
const TaskSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "must provide name"],
    trim: true,
    maxlength: [20, "name can not be more than 20 characters"],
    validate: {
      validator: function (value) {
        return value.trim().length > 0;
      },
      message: "name can not be empty",
    },
  },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model("Task", TaskSchema);
