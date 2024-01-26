"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodo = exports.deleteTodo = exports.getAllTodos = exports.storeTodo = void 0;
const Todo_1 = __importDefault(require("../models/Todo"));
const storeTodo = async (todo) => {
    try {
        await Todo_1.default.create(todo);
        return "Todo Created Sucessfully";
    }
    catch (error) {
        console.error("Error creating todo:", error);
        throw error;
    }
};
exports.storeTodo = storeTodo;
const getAllTodos = async () => {
    try {
        return await Todo_1.default.find().sort({ status: 1 });
    }
    catch (error) {
        console.error("Error fetching todo:", error);
        throw error;
    }
};
exports.getAllTodos = getAllTodos;
const deleteTodo = async (_id) => {
    try {
        await Todo_1.default.deleteOne({ '_id': _id });
        return "Todo Deleted Successfully";
    }
    catch (error) {
        console.error("Error fetching todo:", error);
        throw error;
    }
};
exports.deleteTodo = deleteTodo;
const updateTodo = async (_id, data) => {
    try {
        await Todo_1.default.findOneAndUpdate({ '_id': _id }, data);
        return "Todo Status Updated Successfully";
    }
    catch (error) {
        console.error("Error fetching todo:", error);
        throw error;
    }
};
exports.updateTodo = updateTodo;
