import express from 'express';
import {
    addWineNationality,
    getWineNationalities,
    updateWineNationality,
    deleteWineNationality,
} from '../controllers/wineNationality.controller.js';

const router = express.Router();

router.post('/', addWineNationality);
router.get('/', getWineNationalities);
router.put('/:code', updateWineNationality);
router.delete('/:code', deleteWineNationality);

export default router;
