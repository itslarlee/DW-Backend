import WineBrand from "../models/wineBrand.model.js";

export const addWineBrand = async (req, res) => {
    try {
        const newWineBrand = new WineBrand(req.body);
        const savedWineBrand = await newWineBrand.save();
        res.status(201).json(savedWineBrand);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getWineBrands = async (req, res) => {
    try {
        const wineBrands = await WineBrand.find({});
        res.status(200).json(wineBrands);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const updateWineBrand = async (req, res) => {
    try {
        const updatedWineBrand = await WineBrand.findOneAndUpdate({ code: req.params.code }, req.body, { new: true });
        if (!updatedWineBrand) {
            return res.status(404).send({ message: "Wine brand not found." });
        }
        res.status(200).json(updatedWineBrand);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const deleteWineBrand = async (req, res) => {
    try {
        const result = await WineBrand.deleteOne({ code: req.params.code });
        if (result.deletedCount === 0) {
            return res.status(404).send({ message: "Wine brand not found." });
        }
        res.status(200).json({ message: "Wine brand successfully deleted." });
    } catch (error) {
        res.status(500).send(error);
    }
};
