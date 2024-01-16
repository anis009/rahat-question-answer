import QuestionModel from "../models/Question.js";

// Controller for creating a new question
const createQuestion = async (req, res) => {
	try {
		const newQuestion = new QuestionModel(req.body);
		const savedQuestion = await newQuestion.save();
		res.status(201).json(savedQuestion);
	} catch (error) {
		res.status(500).json({ error: "Error creating the question" });
	}
};

// Controller for getting all questions
const getAllQuestions = async (req, res) => {
	try {
		const questions = await QuestionModel.find();
		res.status(200).json(questions);
	} catch (error) {
		res.status(500).json({ error: "Error retrieving questions" });
	}
};

// Controller for getting a single question by ID
const getQuestionById = async (req, res) => {
	try {
		const question = await QuestionModel.findById(req.params.id);
		if (!question) {
			return res.status(404).json({ error: "Question not found" });
		}
		res.status(200).json(question);
	} catch (error) {
		res.status(500).json({ error: "Error retrieving the question" });
	}
};

const createQuestionsUpvotesAndDownvotes = async (req, res) => {
	const { type, email } = req.body;
	try {
		const question = await QuestionModel.findById(req.params.id);
		if (!question) {
			return res.status(404).json({ error: "Question not found" });
		}
		const downvoteUsers = question.downvoteUsers;
		const upvoteUsers = question.upvoteUsers;

		if (downvoteUsers.includes(email) && type === "upvote") {
			//! make upvotes first
			question.questionUpVotes = question.questionUpVotes + 1;
			question.upvoteUsers.push(email);
			//! reduce number of downvotes
			question.questionDownVotes = question.questionDownVotes - 1;
			question.downvoteUsers = question.downvoteUsers.filter(
				(item) => item !== email
			);
		} else if (upvoteUsers.includes(email) && type === "downvote") {
			//! make downvotes first
			question.questionDownVotes = question.questionDownVotes + 1;
			question.downvoteUsers.push(email);
			//! reduce number of upvotes
			question.questionUpVotes = question.questionUpVotes - 1;
			question.upvoteUsers = question.upvoteUsers.filter(
				(item) => item !== email
			);
		} else if (downvoteUsers.includes(email)) {
			question.questionDownVotes = question.questionDownVotes - 1;
			question.downvoteUsers = question.downvoteUsers.filter(
				(item) => item !== email
			);
		} else if (upvoteUsers.includes(email)) {
			question.questionUpVotes = question.questionUpVotes - 1;
			question.upvoteUsers = question.upvoteUsers.filter(
				(item) => item !== email
			);
		} else if (type === "downvote") {
			question.questionDownVotes = question.questionDownVotes + 1;
			question.downvoteUsers.push(email);
		} else if (type === "upvote") {
			question.questionUpVotes = question.questionUpVotes + 1;
			question.upvoteUsers.push(email);
		}

		await question.save();
		res.json({
			message: "voted successfully",
			success: true,
		});
	} catch (error) {
		res.json({
			message: error.message,
		});
	}
};

const createAnswer = async (req, res) => {
	const data = req.body;
	try {
		const question = await QuestionModel.findById(req.params.id);
		if (!question) {
			return res.status(404).json({ error: "Question not found" });
		}
		question.answers.unshift(data);
		await question.save();
		res.json({
			message: "Answer created successfully",
			success: true,
		});
	} catch (error) {
		res.json({
			message: error.message,
		});
	}
};

const createAnswersUpvotesAndDownvotes = async (req, res) => {
	const { type, email } = req.body;
	const qid = req.params.qid;
	const aid = req.params.aid;
	try {
		const question = await QuestionModel.findById(qid);
		if (!question) {
			return res.status(404).json({ error: "Question not found" });
		}
		const answers = question.answers;
		const idx = answers.findIndex((item) => item._id.toString() === aid);
		if (idx < 0) {
			return res.status(404).json({ error: "Answer not found" });
		}
		let answer = answers[idx];

		const downvoteUsers = answer.downvoteUsers;
		const upvoteUsers = answer.upvoteUsers;

		if (downvoteUsers.includes(email) && type === "upvote") {
			//! make upvotes first
			answer.questionUpVotes = answer.questionUpVotes + 1;
			answer.upvoteUsers.push(email);
			//! reduce number of downvotes
			answer.questionDownVotes = answer.questionDownVotes - 1;
			answer.downvoteUsers = answer.downvoteUsers.filter(
				(item) => item !== email
			);
		} else if (upvoteUsers.includes(email) && type === "downvote") {
			//! make downvotes first
			answer.questionDownVotes = answer.questionDownVotes + 1;
			answer.downvoteUsers.push(email);
			//! reduce number of upvotes
			answer.questionUpVotes = answer.questionUpVotes - 1;
			answer.upvoteUsers = answer.upvoteUsers.filter((item) => item !== email);
		} else if (downvoteUsers.includes(email)) {
			answer.questionDownVotes = answer.questionDownVotes - 1;
			answer.downvoteUsers = answer.downvoteUsers.filter(
				(item) => item !== email
			);
		} else if (upvoteUsers.includes(email)) {
			answer.questionUpVotes = answer.questionUpVotes - 1;
			answer.upvoteUsers = answer.upvoteUsers.filter((item) => item !== email);
		} else if (type === "downvote") {
			answer.questionDownVotes = answer.questionDownVotes + 1;
			answer.downvoteUsers.push(email);
		} else if (type === "upvote") {
			answer.questionUpVotes = answer.questionUpVotes + 1;
			answer.upvoteUsers.push(email);
		}
		answers[idx] = answer;
		question.answers = answers;
		await question.save();
		res.json({
			message: "voted successfully",
			success: true,
		});
	} catch (error) {
		res.json({
			message: error.message,
		});
	}
};

// Controller for updating a question by ID
const updateQuestion = async (req, res) => {
	try {
		const updatedQuestion = await QuestionModel.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);
		if (!updatedQuestion) {
			return res.status(404).json({ error: "Question not found" });
		}
		res.status(200).json(updatedQuestion);
	} catch (error) {
		res.status(500).json({ error: "Error updating the question" });
	}
};

// Controller for deleting a question by ID
const deleteQuestion = async (req, res) => {
	try {
		const deletedQuestion = await QuestionModel.findByIdAndDelete(
			req.params.id
		);
		if (!deletedQuestion) {
			return res.status(404).json({ error: "Question not found" });
		}
		res.status(200).json({ message: "Question deleted successfully" });
	} catch (error) {
		res.status(500).json({ error: "Error deleting the question" });
	}
};

const QuestionControllers = {
	createQuestion,
	getAllQuestions,
	getQuestionById,
	updateQuestion,
	deleteQuestion,
	createQuestionsUpvotesAndDownvotes,
	createAnswer,
	createAnswersUpvotesAndDownvotes,
};

export default QuestionControllers;
