import express from 'express';
import {
    addConsecutive,
    getConsecutives,
    updateConsecutive,
    deleteConsecutive,
} from '../controllers/consecutive.controller.js';

const router = express.Router();

router.post('/', addConsecutive);
router.get('/', getConsecutives);
router.put('/:code', updateConsecutive);
router.delete('/:code', deleteConsecutive);

export default router;
