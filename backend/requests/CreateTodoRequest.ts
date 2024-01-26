import { Request, Response, NextFunction } from 'express';
import { check, validationResult } from 'express-validator';

const CreateTodoRequest = [
  check('todo').notEmpty().withMessage('Todo Field is required'),
  check('todo').isLength({ max: 30 }).withMessage('Todo must be below 30 characters'),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export default CreateTodoRequest;
