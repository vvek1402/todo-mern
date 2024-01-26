import express from "express";
import CreateTodoRequest from "../requests/CreateTodoRequest";
import { createTodo, deletTodo, getAll, changeStatus } from "../controllers/TodoController";

const router = express.Router();

router.route("/todo").post(CreateTodoRequest, createTodo);

router.route("/getalltodos").get(getAll);

router.route("/delete/:deleteid").delete(deletTodo);

router.route("/update/:todoid").put(changeStatus);

export default router;
