import { Schema, model } from "mongoose";

const replySchema = new Schema({
	text: {
		type: String,
		required: false,
	},
	upVotes: {
		type: Number,
		default: 0,
	},
	downVotes: {
		type: Number,
		default: 0,
	},
	author: {
		type: String,
		required: false,
	},
	upvoteUsers: [],
	downvoteUsers: [],
	date: {
		type: Date,
		default: Date.now,
	},
});

const answerSchema = new Schema({
	answerContent: {
		type: String,
		required: false,
	},
	replies: [replySchema],
	answerUpVotes: {
		type: Number,
		default: 0,
	},
	answerDownVotes: {
		type: Number,
		default: 0,
	},
	upvoteUsers: [],
	downvoteUsers: [],
	answerDate: {
		type: Date,
		default: Date.now,
	},
	answerAuthor: {
		type: String,
		required: false,
	},
});

const questionSchema = new Schema({
	questionTitle: {
		type: String,
		required: true,
	},
	answers: [answerSchema],
	questionAuthor: {
		type: String,
		required: true,
	},
	questionDate: {
		type: Date,
		default: Date.now,
	},
	answerCount: {
		type: Number,
		default: 0,
	},
	views: {
		type: Number,
		default: 0,
	},
	questionUpVotes: {
		type: Number,
		default: 0,
	},
	questionDownVotes: {
		type: Number,
		default: 0,
	},
	upvoteUsers: [],
	downvoteUsers: [],
	categories: [
		{
			name: {
				type: String,
				required: true,
			},
		},
	],
});

const QuestionModel = model("Question", questionSchema);

export default QuestionModel;
