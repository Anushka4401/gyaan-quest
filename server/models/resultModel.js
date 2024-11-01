const mongoose = require("mongoose");
const resultSchema = new mongoose.Schema({
  username: { type: String },
  result: { type: Array, default: [] },
  attempts: { type: Number, default: 0 },
  points: { type: Number, default: 0 },
  achieved: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now },
});
const resultModel = mongoose.model("result", resultSchema);
module.exports = resultModel;
