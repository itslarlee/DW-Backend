import express from 'express';
import {
    addColdDrink,
    getColdDrinks,
    getColdDrinkByCode,
    updateColdDrink,
    deleteColdDrink,
} from '../controllers/coldDrinks.controller.js';

const router = express.Router();

router.post('/', addColdDrink);
router.get('/', getColdDrinks);
router.get('/:code', getColdDrinkByCode);
router.put('/:code', updateColdDrink);
router.delete('/:code', deleteColdDrink);

export default router;
