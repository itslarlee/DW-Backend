import Soda from "../models/sodas.model.js";

export const addSoda = async (req, res) => {
    try {
        let newSoda = new Soda(req.body);
        const soda = await newSoda.save();
        res.status(201).json(soda);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getSodas = async (req, res) => {
    try {
        const sodas = await Soda.find({});
        res.status(200).json(sodas);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getSodaByCode = async (req, res) => {
    try {
        const soda = await Soda.findOne({ code: req.params.code });
        if (!soda) {
            return res.status(404).send({ message: "Soda no encontrada." });
        }
        res.status(200).json(soda);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const updateSoda = async (req, res) => {
    try {
        const soda = await Soda.findOneAndUpdate({ code: req.params.code }, req.body, { new: true });
        if (!soda) {
            return res.status(404).send({ message: "Soda no encontrada." });
        }
        res.status(200).json(soda);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const deleteSoda = async (req, res) => {
    try {
        const result = await Soda.deleteOne({ code: req.params.code });
        if (result.deletedCount === 0) {
            return res.status(404).send({ message: "Soda no encontrada." });
        }
        res.status(200).json({ message: "Soda eliminada exitosamente" });
    } catch (error) {
        res.status(500).send(error);
    }
};
