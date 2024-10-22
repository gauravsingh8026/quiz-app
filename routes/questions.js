// routes/questions.js
const express = require("express");
const router = express.Router();
const Question = require("../models/Question");

// @route GET /api/questions
// @desc Get all questions
router.get("/", async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route POST /api/questions
// @desc Create a new question
router.post("/", async (req, res) => {
  const { category, question, options, correctAnswer } = req.body;

  try {
    const newQuestion = new Question({
      category,
      question,
      options,
      correctAnswer,
    });

    const savedQuestion = await newQuestion.save();
    res.json(savedQuestion);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.post("/bulk", async (req, res) => {
  const questions = req.body;

  try {
    const savedQuestions = await Question.insertMany(questions);
    res.json(savedQuestions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
