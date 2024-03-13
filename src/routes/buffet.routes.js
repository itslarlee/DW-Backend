import express from 'express';
import {
    addBuffet,
    getBuffets,
    getBuffetByCode,
    updateBuffet,
    deleteBuffet,
} from '../controllers/buffet.controller.js';

const router = express.Router();

router.post('/', addBuffet);
router.get('/', getBuffets);
router.get('/:code', getBuffetByCode);
router.put('/:code', updateBuffet);
router.delete('/:code', deleteBuffet);

export default router;
