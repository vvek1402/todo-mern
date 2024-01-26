"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeStatus = exports.deletTodo = exports.getAll = exports.createTodo = void 0;
const TodoService_1 = require("../services/TodoService");
const createTodo = async (req, res) => {
    try {
        const { todo, status } = req.body;
        const data = {
            todo,
            status,
        };
        const todoRes = await (0, TodoService_1.storeTodo)(data);
        res.status(201).json({ msg: todoRes });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};
exports.createTodo = createTodo;
const getAll = async (req, res) => {
    try {
        const todoRes = await (0, TodoService_1.getAllTodos)();
        res.status(201).json(todoRes);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};
exports.getAll = getAll;
const deletTodo = async (req, res) => {
    try {
        const { params } = req;
        console.log(params);
        const { deleteid } = params;
        const todoRes = await (0, TodoService_1.deleteTodo)(deleteid);
        res.status(201).json({ msg: todoRes });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};
exports.deletTodo = deletTodo;
const changeStatus = async (req, res) => {
    try {
        const { params } = req;
        const { todoid } = params;
        const { status } = req.body;
        const data = {
            status
        };
        const todoRes = await (0, TodoService_1.updateTodo)(todoid, data);
        res.status(201).json({ msg: todoRes });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};
exports.changeStatus = changeStatus;
