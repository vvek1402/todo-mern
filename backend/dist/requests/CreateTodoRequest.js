"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const CreateTodoRequest = [
    (0, express_validator_1.check)('todo').notEmpty().withMessage('Todo Field is required'),
    (0, express_validator_1.check)('todo').isLength({ max: 30 }).withMessage('Todo must be below 30 characters'),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];
exports.default = CreateTodoRequest;
