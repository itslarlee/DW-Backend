import HotDrink from "../models/hotDrinks.model.js";

export const addHotDrink = async (req, res) => {
    try {
        let newHotDrink = new HotDrink(req.body);
        const hotDrink = await newHotDrink.save();
        res.status(201).json(hotDrink);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getHotDrinks = async (req, res) => {
    try {
        const hotDrinks = await HotDrink.find({});
        res.status(200).json(hotDrinks);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getHotDrinkByCode = async (req, res) => {
    try {
        const hotDrink = await HotDrink.findOne({ code: req.params.code });
        if (!hotDrink) {
            return res.status(404).send({ message: "Bebida caliente no encontrada." });
        }
        res.status(200).json(hotDrink);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const updateHotDrink = async (req, res) => {
    try {
        const hotDrink = await HotDrink.findOneAndUpdate({ code: req.params.code }, req.body, { new: true });
        if (!hotDrink) {
            return res.status(404).send({ message: "Bebida caliente no encontrada." });
        }
        res.status(200).json(hotDrink);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const deleteHotDrink = async (req, res) => {
    try {
        const result = await HotDrink.deleteOne({ code: req.params.code });
        if (result.deletedCount === 0) {
            return res.status(404).send({ message: "Bebida caliente no encontrada." });
        }
        res.status(200).json({ message: "Bebida caliente eliminada exitosamente" });
    } catch (error) {
        res.status(500).send(error);
    }
};
