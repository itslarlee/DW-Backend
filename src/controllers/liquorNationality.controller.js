import LiquorNationality from "../models/liquorNationality.model.js";

export const addLiquorNationality = async (req, res) => {
    try {
        let newLiquorNationality = new LiquorNationality(req.body);
        const liquorNationality = await newLiquorNationality.save();
        res.status(201).json(liquorNationality);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getLiquorNationalities = async (req, res) => {
    try {
        const liquorNationalities = await LiquorNationality.find({});
        res.status(200).json(liquorNationalities);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getLiquorNationalityByCode = async (req, res) => {
    try {
        const liquorNationality = await LiquorNationality.findOne({ code: req.params.code });
        if (!liquorNationality) {
            return res.status(404).send({ message: "Nacionalidad del licor no encontrada." });
        }
        res.status(200).json(liquorNationality);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const updateLiquorNationality = async (req, res) => {
    try {
        const liquorNationality = await LiquorNationality.findOneAndUpdate({ code: req.params.code }, req.body, { new: true });
        if (!liquorNationality) {
            return res.status(404).send({ message: "Nacionalidad del licor no encontrada." });
        }
        res.status(200).json(liquorNationality);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const deleteLiquorNationality = async (req, res) => {
    try {
        const result = await LiquorNationality.deleteOne({ code: req.params.code });
        if (result.deletedCount === 0) {
            return res.status(404).send({ message: "Nacionalidad del licor no encontrada." });
        }
        res.status(200).json({ message: "Nacionalidad del licor eliminada exitosamente" });
    } catch (error) {
        res.status(500).send(error);
    }
};
