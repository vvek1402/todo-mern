import { Request, Response } from "express";
import { storeTodo, getAllTodos, deleteTodo, updateTodo } from "../services/TodoService";
import Todo from "../interfaces/Todo";

export const createTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { todo, status} = req.body;

    const data: Todo = {
      todo,
      status,
    };

    const todoRes: string = await storeTodo(data);
    res.status(201).json({ msg : todoRes });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getAll = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const todoRes = await getAllTodos();
    res.status(201).json(todoRes);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};


export const deletTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { params } = req;
    const { deleteid } = params;

    const todoRes = await deleteTodo(deleteid);
    res.status(201).json({ msg : todoRes });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const changeStatus = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { params } = req;
    const { todoid } = params;

    const { status} = req.body;

    const data: any = {
      status
    };
    const todoRes = await updateTodo(todoid, data);
    res.status(201).json({ msg : todoRes });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
