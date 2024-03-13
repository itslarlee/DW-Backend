import Buffet from "../models/buffet.model.js";

export const addBuffet = async (req, res) => {
    try {
        let newBuffet = new Buffet(req.body);
        const buffet = await newBuffet.save();
        res.status(201).json(buffet);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getBuffets = async (req, res) => {
    try {
        const buffets = await Buffet.find({});
        res.status(200).json(buffets);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getBuffetByCode = async (req, res) => {
    try {
        const buffet = await Buffet.findOne({ code: req.params.code });
        if (!buffet) {
            return res.status(404).send({ message: "Buffet no encontrado." });
        }
        res.status(200).json(buffet);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const updateBuffet = async (req, res) => {
    try {
        const buffet = await Buffet.findOneAndUpdate({ code: req.params.code }, req.body, { new: true });
        if (!buffet) {
            return res.status(404).send({ message: "Buffet no encontrado." });
        }
        res.status(200).json(buffet);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const deleteBuffet = async (req, res) => {
    try {
        const result = await Buffet.deleteOne({ code: req.params.code });
        if (result.deletedCount === 0) {
            return res.status(404).send({ message: "Buffet no encontrado." });
        }
        res.status(200).json({ message: "Buffet eliminado exitosamente" });
    } catch (error) {
        res.status(500).send(error);
    }
};
