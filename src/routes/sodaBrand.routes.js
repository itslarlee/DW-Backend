import express from 'express';
import {
    addSodaBrand,
    getSodaBrands,
    updateSodaBrand,
    deleteSodaBrand,
} from '../controllers/sodaBrand.controller.js';

const router = express.Router();

router.post('/', addSodaBrand);
router.get('/', getSodaBrands);
router.put('/:code', updateSodaBrand);
router.delete('/:code', deleteSodaBrand);

export default router;
