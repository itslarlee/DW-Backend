import express from 'express';
import {
    addLiquorNationality,
    getLiquorNationalities,
    getLiquorNationalityByCode,
    updateLiquorNationality,
    deleteLiquorNationality,
} from '../controllers/liquorNationality.controller.js';

const router = express.Router();

router.post('/', addLiquorNationality);
router.get('/', getLiquorNationalities);
router.get('/:code', getLiquorNationalityByCode);
router.put('/:code', updateLiquorNationality);
router.delete('/:code', deleteLiquorNationality);

export default router;
