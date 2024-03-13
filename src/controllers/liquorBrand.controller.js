import LiquorBrand from "../models/liquorBrand.model.js";

export const addLiquorBrand = async (req, res) => {
    try {
        let newLiquorBrand = new LiquorBrand(req.body);
        const liquorBrand = await newLiquorBrand.save();
        res.status(201).json(liquorBrand);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getLiquorBrands = async (req, res) => {
    try {
        const liquorBrands = await LiquorBrand.find({});
        res.status(200).json(liquorBrands);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getLiquorBrandByCode = async (req, res) => {
    try {
        const liquorBrand = await LiquorBrand.findOne({ code: req.params.code });
        if (!liquorBrand) {
            return res.status(404).send({ message: "Marca de licor no encontrada." });
        }
        res.status(200).json(liquorBrand);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const updateLiquorBrand = async (req, res) => {
    try {
        const liquorBrand = await LiquorBrand.findOneAndUpdate({ code: req.params.code }, req.body, { new: true });
        if (!liquorBrand) {
            return res.status(404).send({ message: "Marca de licor no encontrada." });
        }
        res.status(200).json(liquorBrand);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const deleteLiquorBrand = async (req, res) => {
    try {
        const result = await LiquorBrand.deleteOne({ code: req.params.code });
        if (result.deletedCount === 0) {
            return res.status(404).send({ message: "Marca de licor no encontrada." });
        }
        res.status(200).json({ message: "Marca de licor eliminada exitosamente" });
    } catch (error) {
        res.status(500).send(error);
    }
};
