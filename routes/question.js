import express from "express";
import questionControllers from "../controllers/Question.js";
const questionsRouter = express.Router();

// Route for creating a new question
questionsRouter.post("/", questionControllers.createQuestion);

// Route for getting all questions
questionsRouter.get("/", questionControllers.getAllQuestions);
questionsRouter
	.route("/votes/:id")
	.post(questionControllers.createQuestionsUpvotesAndDownvotes);
questionsRouter.route("/answers/:id").post(questionControllers.createAnswer);
questionsRouter
	.route("/answers/:qid/:aid")
	.post(questionControllers.createAnswersUpvotesAndDownvotes);

// Route for getting a single question by ID
questionsRouter.get("/:id", questionControllers.getQuestionById);

// Route for updating a question by ID
questionsRouter.put("/:id", questionControllers.updateQuestion);

// Route for deleting a question by ID
questionsRouter.delete("/:id", questionControllers.deleteQuestion);

export default questionsRouter;
