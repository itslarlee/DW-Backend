import SodaNationality from "../models/sodaNationality.model.js";

export const addSodaNationality = async (req, res) => {
    try {
        let newSodaNationality = new SodaNationality(req.body);
        const sodaNationality = await newSodaNationality.save();
        res.status(201).json(sodaNationality);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getSodaNationalities = async (req, res) => {
    try {
        const sodaNationalities = await SodaNationality.find({});
        res.status(200).json(sodaNationalities);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getSodaNationalityByCode = async (req, res) => {
    try {
        const sodaNationality = await SodaNationality.findOne({ code: req.params.code });
        if (!sodaNationality) {
            return res.status(404).send({ message: "Nacionalidad de soda no encontrada." });
        }
        res.status(200).json(sodaNationality);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const updateSodaNationality = async (req, res) => {
    try {
        const sodaNationality = await SodaNationality.findOneAndUpdate({ code: req.params.code }, req.body, { new: true });
        if (!sodaNationality) {
            return res.status(404).send({ message: "Nacionalidad de soda no encontrada." });
        }
        res.status(200).json(sodaNationality);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const deleteSodaNationality = async (req, res) => {
    try {
        const result = await SodaNationality.deleteOne({ code: req.params.code });
        if (result.deletedCount === 0) {
            return res.status(404).send({ message: "Nacionalidad de soda no encontrada." });
        }
        res.status(200).json({ message: "Nacionalidad de soda eliminada exitosamente" });
    } catch (error) {
        res.status(500).send(error);
    }
};
