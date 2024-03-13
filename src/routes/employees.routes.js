import express from 'express';
import {
    addEmployee,
    getEmployees,
    updateEmployee,
    deleteEmployee,
} from '../controllers/employees.controller.js';

const router = express.Router();

router.post('/', addEmployee);
router.get('/', getEmployees);
router.put('/:code', updateEmployee);
router.delete('/:code', deleteEmployee);

export default router;
