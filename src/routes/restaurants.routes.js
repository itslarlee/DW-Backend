import express from 'express';
import {
    addRestaurant,
    getRestaurants,
    getRestaurantByCode,
    updateRestaurant,
    deleteRestaurant,
} from '../controllers/restaurants.controller.js';

const router = express.Router();

router.post('/', addRestaurant);
router.get('/', getRestaurants);
router.get('/:code', getRestaurantByCode);
router.put('/:code', updateRestaurant);
router.delete('/:code', deleteRestaurant);

export default router;
