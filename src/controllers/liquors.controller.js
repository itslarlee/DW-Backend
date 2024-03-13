import Liquor from "../models/liquors.model.js";

export const addLiquor = async (req, res) => {
    try {
        let newLiquor = new Liquor(req.body);
        const liquor = await newLiquor.save();
        res.status(201).json(liquor);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getLiquors = async (req, res) => {
    try {
        const liquors = await Liquor.find({});
        res.status(200).json(liquors);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getLiquorByCode = async (req, res) => {
    try {
        const liquor = await Liquor.findOne({ code: req.params.code });
        if (!liquor) {
            return res.status(404).send({ message: "Licor no encontrado." });
        }
        res.status(200).json(liquor);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const updateLiquor = async (req, res) => {
    try {
        const liquor = await Liquor.findOneAndUpdate({ code: req.params.code }, req.body, { new: true });
        if (!liquor) {
            return res.status(404).send({ message: "Licor no encontrado." });
        }
        res.status(200).json(liquor);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const deleteLiquor = async (req, res) => {
    try {
        const result = await Liquor.deleteOne({ code: req.params.code });
        if (result.deletedCount === 0) {
            return res.status(404).send({ message: "Licor no encontrado." });
        }
        res.status(200).json({ message: "Licor eliminado exitosamente" });
    } catch (error) {
        res.status(500).send(error);
    }
};
