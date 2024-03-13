import express from 'express';
import {
    addTable,
    getTables,
    updateTable,
    deleteTable,
} from '../controllers/tables.controller.js';

const router = express.Router();

router.post('/', addTable);
router.get('/', getTables);
router.put('/:code', updateTable);
router.delete('/:code', deleteTable);

export default router;
