import express from 'express';
import {
    addSoda,
    getSodas,
    getSodaByCode,
    updateSoda,
    deleteSoda,
} from '../controllers/sodas.controller.js';

const router = express.Router();

router.post('/', addSoda);
router.get('/', getSodas);
router.get('/:code', getSodaByCode);
router.put('/:code', updateSoda);
router.delete('/:code', deleteSoda);

export default router;
