import express from 'express';
import {
    addHotDrink,
    getHotDrinks,
    getHotDrinkByCode,
    updateHotDrink,
    deleteHotDrink,
} from '../controllers/hotDrinks.controller.js';

const router = express.Router();

router.post('/', addHotDrink);
router.get('/', getHotDrinks);
router.get('/:code', getHotDrinkByCode);
router.put('/:code', updateHotDrink);
router.delete('/:code', deleteHotDrink);

export default router;
