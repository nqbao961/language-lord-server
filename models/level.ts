import mongoose from "mongoose";
import { ILevel } from ".";

const levelSchema = new mongoose.Schema({
  _id: String, // lang-number
  levelNumber: Number,
  quizList: [{ type: mongoose.Schema.Types.ObjectId, ref: "Quiz" }],
});

const Level = mongoose.model<ILevel>("Level", levelSchema);

export default Level;