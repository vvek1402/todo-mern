"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CreateTodoRequest_1 = __importDefault(require("../requests/CreateTodoRequest"));
const TodoController_1 = require("../controllers/TodoController");
const router = express_1.default.Router();
router.route("/todo").post(CreateTodoRequest_1.default, TodoController_1.createTodo);
router.route("/getalltodos").get(TodoController_1.getAll);
router.route("/delete/:deleteid").delete(TodoController_1.deletTodo);
router.route("/update/:todoid").put(TodoController_1.changeStatus);
exports.default = router;
