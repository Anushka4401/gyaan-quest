const express = require("express");
const {
  getQuestions,
  inserQuestions,
  deleteQuestions,
  getResult,
  storeResult,
  deleteResult,
} = require("../controllers/controller");

const router = express.Router();
router.route("/");
router
  .route("/questions")
  .get(getQuestions)
  .post(inserQuestions)
  .delete(deleteQuestions);

router.route("/result").get(getResult).post(storeResult).delete(deleteResult);

module.exports = router;
