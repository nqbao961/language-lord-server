import mongoose from "mongoose";
import { IQuiz } from ".";

const quizSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["shuffleLetters", "shuffleIdiom", "multipleChoice"],
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  explaination: String,
  info: String,
  choices: {
    type: [String],
    default: undefined,
  },
  createdAt: { type: Date, default: Date.now },
  levelId: { type: Number, ref: "Level" },
  levelNumber: Number,
  language: {
    type: String,
    required: true,
  },
});

const Quiz = mongoose.model<IQuiz>("Quiz", quizSchema);

export default Quiz;
