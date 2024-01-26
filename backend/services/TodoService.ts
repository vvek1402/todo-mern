import TodoModel from "../models/Todo";
import Todo from "../interfaces/Todo";

export const storeTodo = async (todo: any): Promise<string> => {
    try {
      await TodoModel.create(todo);
      return "Todo Created Sucessfully";
    } catch (error) {
      console.error("Error creating todo:", error);
      throw error;
    }
  }

  export const getAllTodos = async () => {
    try {
      return await TodoModel.find().sort({ status: 1 });
    } catch (error) {
      console.error("Error fetching todo:", error);
      throw error;
    }
  }

  export const deleteTodo = async (_id : string) => {
    try {
      await TodoModel.deleteOne({ '_id': _id });
      return "Todo Deleted Successfully"
    } catch (error) {
      console.error("Error fetching todo:", error);
      throw error;
    }
  }

  export const updateTodo = async (_id : string, data : any) => {
    try {
      await TodoModel.findOneAndUpdate({ '_id': _id }, data);
      return "Todo Status Updated Successfully"
    } catch (error) {
      console.error("Error fetching todo:", error);
      throw error;
    }
  }
