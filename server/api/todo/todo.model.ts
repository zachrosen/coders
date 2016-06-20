import * as mongoose from "mongoose";

export interface ITodoModel extends ITodo, mongoose.Document {
}

let todoSchema = new mongoose.Schema({
  date: String,
  description: String,
  completed: Boolean
})

export let Todo = mongoose.model<ITodoModel>('Todo', todoSchema);
