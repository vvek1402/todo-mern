interface Todo {
    todo: string;
    status: string;
    createdAt?: {
        type: Date,
        default: Date,
    };
}

export default Todo;