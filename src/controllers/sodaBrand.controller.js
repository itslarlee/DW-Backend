import SodaBrand from "../models/sodaBrand.model.js";

export const addSodaBrand = async (req, res) => {
    try {
        let newSodaBrand = new SodaBrand(req.body);
        const sodaBrand = await newSodaBrand.save();
        res.status(201).json(sodaBrand);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getSodaBrands = async (req, res) => {
    try {
        const sodaBrands = await SodaBrand.find({});
        res.status(200).json(sodaBrands);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const updateSodaBrand = async (req, res) => {
    try {
        const sodaBrand = await SodaBrand.findOneAndUpdate({ code: req.params.code }, req.body, { new: true });
        if (!sodaBrand) {
            return res.status(404).send({ message: "Marca de soda no encontrada." });
        }
        res.status(200).json(sodaBrand);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const deleteSodaBrand = async (req, res) => {
    try {
        const result = await SodaBrand.deleteOne({ code: req.params.code });
        if (result.deletedCount === 0) {
            return res.status(404).send({ message: "Marca de soda no encontrada." });
        }
        res.status(200).json({ message: "Marca de soda eliminada exitosamente" });
    } catch (error) {
        res.status(500).send(error);
    }
};
