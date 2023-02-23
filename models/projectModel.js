const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  pic: {
    type: String,
    required: true,
  },
  languages: {
    type: Array,
    required: true,
  },
  live: {
    type: String,
    required: true,
  },
  demo: {
    type: String,
    required: true,
  },
});

mongoose.models = {};
module.exports = mongoose.model("Project", projectSchema);
