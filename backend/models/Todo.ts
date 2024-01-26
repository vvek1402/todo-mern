import mongoose, { Schema } from 'mongoose';
import Todo from "../interfaces/Todo";

const todoSchema = new Schema<Todo>({
  todo: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<Todo>("Todo", todoSchema);
