import express from 'express';
import {
    addSpecialty,
    getSpecialties,
    updateSpecialty,
    deleteSpecialty,
} from '../controllers/specialties.controller.js';

const router = express.Router();

router.post('/', addSpecialty);
router.get('/', getSpecialties);
router.put('/:code', updateSpecialty);
router.delete('/:code', deleteSpecialty);

export default router;
