import express from 'express';
import {
    addLiquorBrand,
    getLiquorBrands,
    getLiquorBrandByCode,
    updateLiquorBrand,
    deleteLiquorBrand,
} from '../controllers/liquorBrand.controller.js';

const router = express.Router();

router.post('/', addLiquorBrand);
router.get('/', getLiquorBrands);
router.get('/:code', getLiquorBrandByCode);
router.put('/:code', updateLiquorBrand);
router.delete('/:code', deleteLiquorBrand);

export default router;
