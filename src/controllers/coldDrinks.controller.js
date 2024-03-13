import ColdDrink from "../models/coldDrinks.model.js";

export const addColdDrink = async (req, res) => {
    try {
        let newColdDrink = new ColdDrink(req.body);
        const coldDrink = await newColdDrink.save();
        res.status(201).json(coldDrink);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getColdDrinks = async (req, res) => {
    try {
        const coldDrinks = await ColdDrink.find({});
        res.status(200).json(coldDrinks);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getColdDrinkByCode = async (req, res) => {
    try {
        const coldDrink = await ColdDrink.findOne({ code: req.params.code });
        if (!coldDrink) {
            return res.status(404).send({ message: "Bebida fría no encontrada." });
        }
        res.status(200).json(coldDrink);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const updateColdDrink = async (req, res) => {
    try {
        const coldDrink = await ColdDrink.findOneAndUpdate({ code: req.params.code }, req.body, { new: true });
        if (!coldDrink) {
            return res.status(404).send({ message: "Bebida fría no encontrada." });
        }
        res.status(200).json(coldDrink);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const deleteColdDrink = async (req, res) => {
    try {
        const result = await ColdDrink.deleteOne({ code: req.params.code });
        if (result.deletedCount === 0) {
            return res.status(404).send({ message: "Bebida fría no encontrada." });
        }
        res.status(200).json({ message: "Bebida fría eliminada exitosamente" });
    } catch (error) {
        res.status(500).send(error);
    }
};
