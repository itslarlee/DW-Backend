import Mascota from "../models/mascota.js";

// Agregar una nueva mascota
export const addMascota = async (req, res) => {
    try {
        let nuevaMascota = new Mascota(req.body);
        const mascota = await nuevaMascota.save();
        res.status(201).json(mascota); // 201 Created
    } catch (error) {
        res.status(400).send(error); // 400 Bad Request
    }
};

// Obtener todas las mascotas
export const getMascotas = async (req, res) => {
    try {
        const mascotas = await Mascota.find({});
        res.status(200).json(mascotas); // 200 OK
    } catch (error) {
        res.status(500).send(error); // 500 Internal Server Error
    }
};

// Obtener una mascota por ID
export const getMascotaByID = async (req, res) => {
    try {
        const mascota = await Mascota.findById(req.params.mascotaId);
        if (!mascota) {
            return res.status(404).send({ message: "Mascota no encontrada." }); // 404 Not Found
        }
        res.status(200).json(mascota); // 200 OK
    } catch (error) {
        res.status(500).send(error); // 500 Internal Server Error
    }
};

// Actualizar una mascota
export const updateMascota = async (req, res) => {
    const mascotaId = req.params.mascotaId;
    try {
        const mascota = await Mascota.findByIdAndUpdate(mascotaId, req.body, {
            new: true,
        });
        if (!mascota) {
            return res.status(404).send({ message: "Mascota no encontrada." }); // 404 Not Found
        }
        res.status(200).json(mascota); // 200 OK
    } catch (error) {
        res.status(400).send(error); // 400 Bad Request
    }
};

// Eliminar una mascota
export const deleteMascota = async (req, res) => {
    try {
        const result = await Mascota.deleteOne({ _id: req.params.mascotaId });
        if (result.deletedCount === 0) {
            return res.status(404).send({ message: "Mascota no encontrada." }); // 404 Not Found
        }
        res.status(200).json({ message: "Mascota eliminada exitosamente" }); // 200 OK
    } catch (error) {
        res.status(500).send(error); // 500 Internal Server Error
    }
};
