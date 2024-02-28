import Restaurant from "../models/restaurants.model.js";

export const addRestaurant = async (req, res) => {
    try {
        let newRestaurant = new Restaurant(req.body);
        const restaurant = await newRestaurant.save();
        res.status(201).json(restaurant);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find({});
        res.status(200).json(restaurants);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getRestaurantByCode = async (req, res) => {
    try {
        const restaurant = await Restaurant.findOne({ code: req.params.code });
        if (!restaurant) {
            return res.status(404).send({ message: "Restaurante no encontrado." });
        }
        res.status(200).json(restaurant);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const updateRestaurant = async (req, res) => {
    try {
        const restaurant = await Restaurant.findOneAndUpdate({ code: req.params.code }, req.body, { new: true });
        if (!restaurant) {
            return res.status(404).send({ message: "Restaurante no encontrado." });
        }
        res.status(200).json(restaurant);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const deleteRestaurant = async (req, res) => {
    try {
        const result = await Restaurant.deleteOne({ code: req.params.code });
        if (result.deletedCount === 0) {
            return res.status(404).send({ message: "Restaurante no encontrado." });
        }
        res.status(200).json({ message: "Restaurante eliminado exitosamente" });
    } catch (error) {
        res.status(500).send(error);
    }
};
