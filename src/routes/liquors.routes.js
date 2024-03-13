import express from 'express';
import {
    addLiquor,
    getLiquors,
    getLiquorByCode,
    updateLiquor,
    deleteLiquor,
} from '../controllers/liquors.controller.js';

const router = express.Router();

router.post('/', addLiquor);
router.get('/', getLiquors);
router.get('/:code', getLiquorByCode);
router.put('/:code', updateLiquor);
router.delete('/:code', deleteLiquor);

export default router;
