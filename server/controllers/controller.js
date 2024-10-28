const questionModel = require("../models/questionModel");
const resultModel = require("../models/resultModel");

const { questions, answers } = require("../config/list");
const getQuestions = async (req, res) => {
  try {
    let q = await questionModel.find();
    if (q.length == 0) {
      //if no question, then insert
      await questionModel.insertMany({ questions, answers });
      q = await questionModel.find(); //fetch
    }
    res.status(200).json({
      success: true,
      q,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

const inserQuestions = async (req, res) => {
  try {
    questionModel.insertMany({ questions: questions, answers: answers });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

const deleteQuestions = async (req, res) => {
  try {
    await questionModel.deleteMany();
    res.status(200).json({
      success: true,
      msg: "Questions deleted",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

const getResult = async (req, res) => {
  try {
    const result = resultModel.find();
    res.status(200).json({
      success: true,
      result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

const storeResult = async (req, res) => {
  try {
    const { username, result, attempts, points, achieved } = req.body;
    if (!username && !result) {
      throw new Error("Data is incomplete");
    }
    const newResult = await resultModel.create({
      username,
      result,
      attempts,
      points,
      achieved,
    });
    res.status(200).json({
      success: true,
      newResult,
      msg: "Result saved",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

const deleteResult = async (req, res) => {
  try {
    await resultModel.deleteMany();
    res.status(200).json({
      success: true,

      msg: "Result deleted",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};
module.exports = {
  getQuestions,
  inserQuestions,
  deleteQuestions,
  getResult,
  storeResult,
  deleteResult,
};
