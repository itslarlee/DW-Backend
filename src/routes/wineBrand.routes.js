import express from 'express';
import {
    addWineBrand,
    getWineBrands,
    updateWineBrand,
    deleteWineBrand,
} from '../controllers/wineBrand.controller.js';

const router = express.Router();

router.post('/', addWineBrand);
router.get('/', getWineBrands);
router.put('/:code', updateWineBrand);
router.delete('/:code', deleteWineBrand);

export default router;
