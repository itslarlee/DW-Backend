import express from 'express';
import {
    addSodaNationality,
    getSodaNationalities,
    getSodaNationalityByCode,
    updateSodaNationality,
    deleteSodaNationality,
} from '../controllers/sodaNationality.controller.js';

const router = express.Router();

router.post('/', addSodaNationality);
router.get('/', getSodaNationalities);
router.get('/:code', getSodaNationalityByCode);
router.put('/:code', updateSodaNationality);
router.delete('/:code', deleteSodaNationality);

export default router;
