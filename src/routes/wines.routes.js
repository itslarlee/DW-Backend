import express from 'express';
import {
    addWine,
    getWines,
    getWineByCode,
    updateWine,
    deleteWine,
} from '../controllers/wines.controller.js';

const router = express.Router();

router.post('/', addWine);
router.get('/', getWines);
router.get('/:code', getWineByCode);
router.put('/:code', updateWine);
router.delete('/:code', deleteWine);

export default router;
